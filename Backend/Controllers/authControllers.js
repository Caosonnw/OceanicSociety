const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

let refreshTokens = [];

const authControllers = {
    //REGISTER
    registerUser: async(req,res) => {
        try{
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            //Create new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });
            //Save To DB
            const user = await newUser.save();
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
        }
    },

    //GENERATE ACCESS TOKEN
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
            process.env.JWT_SECRET,
            {expiresIn: "30s"}
            );
    },
    //GENERATE REFRESH TOKEN
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
            process.env.JWT_REFRESH_KEY,
            {expiresIn: "365d"}
        );
    },

    //LOGIN
    loginUser: async(req,res) => {
        try{
            const user = await User.findOne({username: req.body.username});
            if (!user){
                return res.status(404).json("Wrong username!");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if(!validPassword){
                return res.status(404).json("Wrong Password!");
            }
            if(user && validPassword){
                const accessToken = authControllers.generateAccessToken(user);
                const refreshToken = authControllers.generateRefreshToken(user);
                refreshTokens.push(refreshToken);
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",
                })
                const {password, ...others} = user._doc;
                res.status(200).json({...others,accessToken});
            }
        }catch(err){
            res.status(500).json(err);
        }
    },

    requestRefreshToken: async(req,res) => {
        //TAKE REFRESH TOKEN FROM USER
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json("You're not authenticated");
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid");
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err,user) => {
            if(err){
                console.log(err);
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
            //CREATE NEW ACCESS TOKEN, REFRESH TOKEN
            const newAccessToken = authControllers.generateAccessToken(user);
            const newReFreshToken = authControllers.generateRefreshToken(user);
            refreshTokens.push(newReFreshToken);
            res.cookie("refreshToken", newReFreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict",
            });
            res.status(200).json({accessToken: newAccessToken});
        })
    },

    //LOG OUT
    userLogout: async(req,res) => {
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
        res.status(200).json("Logged out!");
    },
};

module.exports = authControllers;