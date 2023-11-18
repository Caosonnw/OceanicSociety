import React from 'react';
import "./about.css";

export default function About() {
  return (
    <React.Fragment>
        <div>
            <img src="/assets/Image/JPG/04.png" id="image" alt=''/>
            <b id="title">About Us</b>
            <div>
            <iframe
                    title="YouTube Video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/YE7VzlLtp-4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div style={{width: '40%', height: '57%', backgroundColor: '#222222', float: 'right', lineHeight: '1.45'}}>
                <div className="noidung1"> Our Mission </div>
                <div className="noidung2">
                    Oceanic Society works to improve ocean health by deepening the connections 
                    between people and nature to address the root cause of its decline: human behavior.
                </div>
                </div>
                <div style={{width: '100%', height: 650, backgroundColor: '#111111', clear: 'both'}}>
                <div className="noidung3">
                    As America's oldest non-profit organization dedicated to ocean conservation, 
                    Oceanic Society has worked for more than 50 years to inspire and empower people
                    worldwide to take part in building a healthy future for the world's oceans.
                    Through our work we are:
                </div>
                <div className="container">
                    <div className="square">
                    <img className="icon" src="/assets/Image/world.png" alt='' />
                    <div className="content">
                        Bringing the ocean into our daily lives with 
                        Blue Habits—a science-based effort to motivate simple, 
                        daily choices that lead to healthier oceans.
                    </div>
                    </div>
                    <div className="square">
                    <img className="icon" src="/assets/Image/fish.png" alt=''/>
                    <div className="content">
                        Supporting efforts worldwide that engage coastal 
                        communities in protecting threatened marine species and 
                        their habitats.
                    </div>
                    </div>
                    <div className="square">
                    <img className="icon" src="/assets/Image/compass.png" alt='' />
                    <div className="content">
                        Leading expeditions that give people life-changing 
                        experiences in nature, support ocean research and conservation, 
                        and shape the travel industry.
                    </div>
                    </div>
                </div>
                <div className="noidung3">
                    Together, these strategies aim to "move the needle" in ways that measurably 
                    improve ocean health and reduce the hazards that humans pose to oceans over time.
                </div>
                </div>
                <img src="/assets/Image/05.png" id="image2" alt=''/>
                <div style={{width: '50%', height: '64%', backgroundColor: '#222222', float: 'right', lineHeight: '1.45'}}>
                <div className="noidung4"> Our Work </div>
                <div className="noidung5"> 
                    We're working to connect people to the ocean and build a movement dedicated to solving the 
                    key ocean problems of our time. Learn about our programs to reduce ocean plastic pollution,
                    curb climate change, save sea turtles, and more.
                </div>
                <a href="https://www.oceanicsociety.org/our-work/" target="_self" className="fl-button"> <span className="fl-button-text">Learn More</span> </a>
                </div>
                <div className="container-image">
                <div className="line1" />
                <div className="noidung6"> Our Staff </div>
                {/* thêm thẻ vào đây */}
                <div className="line2" />
                </div>
                <div className="container-image2">
                <img className="image3" src="/assets/Image/15.jpg" alt=''/>
                <div className="image-overlay" />
                <p className="noidung7"> History </p>
                <p className="noidung8"> 
                    As America's first non-profit organization dedicated to the ocean, 
                    Oceanic Society helped build the modern ocean conservation movement and pioneered the ecotourism industry. 
                    Learn more about our history and accomplishments.
                </p>
                <a href="https://www.oceanicsociety.org/our-work/" target="_self" className="fl-button2"> <span className="fl-button-text2">Our History</span> </a>
                </div>
            </div>
        </div>

    </React.Fragment>
  )
}
