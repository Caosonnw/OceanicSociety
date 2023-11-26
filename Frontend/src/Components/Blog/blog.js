import React from 'react'
import "./blog.css";
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <React.Fragment>
        <div className="title-vlt"> 
            <div id="hv2">
                <h1>Volunteer abroad with marine conservation programs worldwide.</h1>
                <p>Volunteers have played an important role in Oceanic Society's work since our founding in 1969, and we invite you to lend your hand as a volunteer with one of our programs.</p>
                <br />
                <p>Our marine conservation volunteer programs offer hands-on opportunities foryou to participate in marine research and conservation worldwide. We are pleased to offer volunteer opportunities with sea turtles, coral reefs, dolphins, and more.Browse our current ocean volunteer vacations below.</p>
                <div id="hv">
                </div>
            </div>
            <div id="vlt-3">
                <h1>Available Volunteer Trips</h1>
                <div className="row">
                <div className="vlt-trips">
                    <div className="vlt-1">
                    <Link target="_blank" to="https://www.oceanicsociety.org/expedition/azores-manta-conservation-diving-experience/">
                        <img src="assets/Image/img-8.jpg"  alt=''/>
                    </Link>
                    <div className="desc">Azores: Manta Conservation Diving Experience</div>
                    </div>
                </div>
                <div className="vlt-trips">
                    <div className="vlt-1">
                    <Link target="_blank" to="https://www.oceanicsociety.org/expedition/belize-ocean-wildlife-volunteer-program/">
                        <img src="assets/Image/img-9.jpg" alt='' />
                    </Link>
                    <div className="desc">Belize: Ocean Wildlife Volunteer Program</div>
                    </div>
                </div>
                <div className="vlt-trips">
                    <div className="vlt-1">
                    <Link target="_blank" to="https://www.oceanicsociety.org/expedition/trinidad-land-of-the-leatherbacks/">
                        <img src="assets/Image/img-10.jpg" alt=''/>
                    </Link>
                    <div className="desc">Trinidad: Land of the Leatherbacks</div>
                    </div>
                </div>
                <div className="vlt-trips">
                    <div className="vlt-1">
                    <Link target="_blank" to="https://www.oceanicsociety.org/expedition/puerto-rico-coral-reef-volunteer-program/">
                        <img src="assets/Image/img-11.jpg" alt=''/>
                    </Link>
                    <div className="desc">Puerto Rico: Coral Reef Volunteer Program</div>
                    </div>
                </div>
                <div className="vlt-trips">
                    <div className="vlt-1">
                    <Link target="_blank" to="https://www.oceanicsociety.org/expedition/palau-shark-and-coral-reef-monitoring/">
                        <img src="assets/Image/img-12.jpg" alt=''/>
                    </Link>
                    <div className="desc">Palau: Shark and Coral Reef Monitoring</div>
                    </div>
                </div>
                <div className="vlt-trips">
                    <div className="vlt-1">
                    <Link target="_blank" to="https://www.oceanicsociety.org/expedition/palau-shark-week/">
                        <img src="assets/Image/img-13.jpeg" alt=''/>
                    </Link>
                    <div className="desc">Palau Shark Week</div>
                    </div>
                </div>
                <div className="vlt-trips">
                    <div className="vlt-1">
                    <Link target="_blank" to="https://www.oceanicsociety.org/expedition/plastic-free-raja-ampat/">
                        <img src="assets/Image/img-14.jpg" alt=''/>
                    </Link>
                    <div className="desc">Plastic Free Raja Ampat</div>
                    </div>
                </div>
                <div className="vlt-trips">
                    <div className="vlt-1">
                    <Link target="_blank" to="https://www.oceanicsociety.org/expedition/whales-dolphins-and-biodiversity-of-southwest-mexico/">
                        <img src="assets/Image/img-15.jpg" alt=''/>
                    </Link>
                    <div className="desc">Whales, Dolphins, and Biodiversity of Southwest Mexico</div>
                    </div>
                </div>
                </div>
            </div>
            <div id="hv3">
                <h1>Why Be a Volunteer for Marine Conservation</h1>     
                <p> The oceans are the lifeblood of our planet, and yet they have never been sicker. 
                Threats like overfishing, plastic pollution, climate change, and others have taken a tremendous toll on ocean health. 
                People are responsible for these ocean problems, and, at the same time, people are the solution.
                We can all do something every day to support healthier oceans.</p>
                <p>For those looking to do more, one way to make a difference in marine conservation is to volunteer for a marine conservation program.
                These programs offer volunteers the opportunity to work alongside ocean experts and contribute to vital research and conservation efforts.</p>
                <p>There are many benefits to participating in a marine conservation volunteer program. 
                One of the most significant benefits is the opportunity to make a real impact. 
                Volunteers have the chance to contribute to important research projects, help protect endangered species, and promote sustainable practices.
                Volunteers can also learn new skills, gain valuable knowledge, and make a meaningful difference in the world.</p>
                <p>Another benefit of volunteering is the chance to work and live in some of the most beautiful locations in the world.
                Volunteers also get the opportunity to experience new cultures and environments, meet like-minded individuals, and make lifelong friendships.</p>
                <p>Marine conservation volunteer programs also offer a unique opportunity for personal growth and development.
                By stepping outside of their comfort zones and working in challenging environments, volunteers can develop new skills and gain confidence.
                They can also gain a greater understanding of the interconnectedness of the natural world and the importance of conservation efforts.</p>
                <p>By participating in a marine conservation volunteer program, you can contribute to vital research and conservation efforts, 
                help protect endangered species, and promote sustainable practices. So why not take the plunge and sign up for a marine conservation program today? 
                You won't regret it!</p>
            </div>
        </div>

    </React.Fragment>
  )
}
