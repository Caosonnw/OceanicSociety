import React from 'react';
import { Link } from 'react-router-dom';
import "./Homestyle.css";
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Home() {
    const [email, setEmail] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [error, setError] = useState(null);
    const [notification, setNotification] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const closeAlert = () => {
        setShowAlert(false);
        setError(null);
        setNotification(null);
      };
    
      useEffect(() => {
        if (showAlert) {
          const timeoutId = setTimeout(() => {
            closeAlert();
          }, 3000);
    
          return () => {
            clearTimeout(timeoutId);
          };
        }
      }, [showAlert]);


      const handleContactSubmit = async () => {
        try {
            if (!email.trim()) {
              setNotification('Vui lòng nhập địa chỉ email.');
            } else {
              await axios.post('/contact/sendcontact', { email });
              setNotification('Liên hệ đã được gửi thành công!');
              setShowAlert(true);
            }
        } catch (error) {
          setError('Email đã gửi liên hệ trước đó.');
          setShowAlert(true);
        }
      };

  return (
    <React.Fragment>
        <div className='homepage'>
            <div className="hero">
                <nav>
                    <video autoPlay loop muted playsInline className="background-clip">
                        <source src="/assets/Media/Video-Banner.mp4" type='video/mp4' />
                    </video>
                </nav>       
            </div>
            <div className="content">
                <h1>Latest News</h1>
                <Link to="/news">Read More News</Link>
            </div>
            <div>
                <div className="mid-1">
                    <div>
                        <h1 className="title-mid">Creating a more oceanic society since 1969.</h1>
                    </div>
                    <div className="car-box">
                        <Link to="#"><img src="/assets/Image/home-box2.jpg" alt='' /></Link>
                        <Link to="#"><img src="/assets/Image/whale-watching-thumbnail.jpeg" alt=''/></Link>
                        <Link to="#"><img src="/assets/Image/home-box4.jpg" alt=''/></Link>
                        <Link to="#"><img src="/assets/Image/home-box1.jpg" alt=''/></Link>
                    </div>
                    <div className="car-text">
                        <Link to="#"><h3>Travel With Us&emsp;</h3></Link>
                        <Link to="#"><h3>Go Whale Watching</h3></Link>
                        <Link to="#"><h3>Learn About Our Work</h3></Link>
                        <Link to="#"><h3>Join Oceanic Society</h3></Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="mid-2">
                    <div>
                        <h1 className="title-mid">Travel With Us</h1>
                    </div>
                    <div className="car-box-trip">
                        <Link to="#"><img src="/assets/Image/family-trip.jpg" alt=''/></Link>
                        <Link to="#"><img src="/assets/Image/volunteer-trip.jpeg" alt=''/></Link>
                        <Link to="#"><img src="/assets/Image/Wildlife-Encounters.jpeg" alt=''/></Link>
                        <Link to="#"><img src="/assets/Image/Snorkeling-Trips.jpg" alt=''/></Link>
                    </div>
                    <div className="car-text" style={{marginBottom: '60px'}}>
                        <Link to="#"><h3>Travel With Us&emsp;</h3></Link>
                        <Link to="#"><h3>Volunteer Trip&emsp;&emsp;</h3></Link>
                        <Link to="#"><h3>Wildlife Encounters</h3></Link>
                        <Link to="#"><h3>Snorkeling Trips</h3></Link>
                    </div>
                    <div className='button-trip'><Link to="#"><button>Browse All Trip</button></Link></div>
                </div>
            </div>

            {/* join community  */}
            <div className='bg-content'>
                <div className="content-wrapper">
                    <div className='content-cnt'>
                        <h2>Join our community.</h2>
                        <p>Email address</p><p style={{color: 'red'}}>*</p>
                        <input type="email" placeholder="    Join our online community...." value={email} onChange={handleEmailChange}/>
                        <Link to="#">
                            <button onClick={handleContactSubmit}>Sign up</button>
                        </Link>
                        {/* Hiển thị thông báo nếu showAlert là true */}
                        {showAlert && (
                        <div className={`custom-alert ${error ? 'error' : ''}`}>
                        <p>{error || notification}</p>
                        </div>
                        )}
                    </div>
                </div>
            </div>


            {/* footer  */}
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>CONTACT</h4>
                            <div>
                                <span className="icon-location">
                                    <Link target="_blank" to="https://www.google.com/maps/place/Oceanic+Society/@37.9634731,-122.5580775,17z/data=!4m10!1m2!2m1!1sOceanic+Society+P.O.+Box+844+Ross,+CA+94957!3m6!1s0x8085974b629ef789:0xa52b4fd9c401dbcf!8m2!3d37.9634689!4d-122.5555026!15sCitPY2VhbmljIFNvY2lldHkgUC5PLiBCb3ggODQ0IFJvc3MsIENBIDk0OTU3kgEXbm9uX3Byb2ZpdF9vcmdhbml6YXRpb27gAQA!16s%2Fg%2F1hc7_0tdf?hl=vi-VN&entry=ttu"><i className="fa-solid fa-location-dot" /></Link>
                                </span>                        
                                <ul>
                                    <div style={{fontSize: 16, color: 'white', fontWeight: 600}}>&emsp;Oceanic Society<br/>&emsp;P.O. Box 844<br />&emsp;&emsp;&ensp;Ross, CA 94957</div>
                                </ul>
                                {/* <div><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3145.585079007598!2d-122.5580775!3d37.9634731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085974b629ef789%3A0xa52b4fd9c401dbcf!2sOceanic%20Society!5e0!3m2!1svi!2s!4v1700034135658!5m2!1svi!2s" width={250} height={170} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div> */}
                            </div>
                            <div>
                                <span className="icon-phone">
                                    <Link to="tel:1-415-256-9604"><i className="fa-solid fa-phone" /></Link>
                                </span>
                                <div style={{marginTop: 30, fontSize: 16, color: 'white', fontWeight: 600}}>&emsp;Hotline:</div>
                                <div style={{marginTop: 8, fontSize: 16, color: '#FEDB3D', fontWeight: 600}}>&emsp;1-415-256-9604</div>
                            </div>
                            <div>
                                <div style={{marginTop: 30, fontSize: 16, color: 'white', fontWeight: 600}}><strong>Expeditions &amp; General Inquiries</strong></div>
                                <div style={{marginTop: 8, fontSize: 16, color: '#FEDB3D', fontWeight: 600}}>1-800-326-7491</div>  
                            </div>           
                        </div>
                        <div className="footer-col">
                        <h4>Office Hours</h4>
                            <ul>
                                <div style={{fontSize: 16, color: 'white', fontWeight: 600}}>CA Office</div>
                                <div style={{fontSize: 16, color: 'white', fontWeight: 600}}>Mon-Fri: 8AM–3PM<br />(PDT/PST)</div>
                                <div style={{marginTop: 40, fontSize: 16, color: 'white', fontWeight: 600}}>DC Office</div>
                                <div style={{fontSize: 16, color: 'white', fontWeight: 600}}>Mon-Fri: 9AM–5PM<br />(EDT/EST)</div>
                            </ul>
                        </div>        
                        <div className="footer-col">
                            <h4>NAVIGATE</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="#">Shop</Link></li>
                                <li><Link to="#">Blog</Link></li>
                                <li><Link to="#">Take a Trip</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>LEGAL</h4>
                            <ul>
                                <li><Link to="#">Terms of Use</Link></li>
                                <li><Link to="#">Policy</Link></li>
                                <li><Link to="#">Accessibility Statement</Link></li>
                                <li><Link to="#">Sitemap</Link></li>
                            </ul>
                        </div>           
                    </div>
                </div>
            </div>
            <div className="footer-2 ">
                <div>                  
                    <img className="ft-logo" src="/assets/Image/footer-logo.png" alt="ft-logo" />
                    <div className="logo-tw social-link"><Link target="_blank" to="https://twitter.com/OceanicSociety"><i className="fa-brands fa-twitter" /></Link></div>
                    <div className="logo-yt social-link"><Link target="_blank" to="https://www.youtube.com/@OceanicSociety/featured"><i className="fa-brands fa-youtube" /></Link></div>
                    <div className="logo-ins social-link"><Link target="_blank" to="https://www.instagram.com/oceanic.society/"><i className="fa-brands fa-instagram" /></Link></div>
                    <div className="logo-fb social-link"><Link target="_blank" to="https://www.facebook.com/OceanicSociety"><i className="fa-brands fa-facebook-f" /></Link></div>
                </div>
                <div>
                    <div className="textcenter" style={{color: '#ccc', fontSize: 10}}>
                        © 2023 Oceanic Society. The Oceanic Society is a registered organization. Our Federal Tax ID is 94-3105570.
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
