import React from 'react';
import {
    Link,
} from 'react-router-dom'

function Landpage(props) {
    return (
        <>
             <header>
        <div className="header">
            <div className="nav">
                <img src="src/Tem/img/net2.png" alt="" className="logo"/>
                <div id="patel">
                    <select>English
                        <option value="English">English</option>
                        <option value="Hin-di">हिन्दी</option>
                    </select>
                    <button> <Link to="/signin" className='one'>Sign In</Link> </button>

                </div>
            </div>
            <div className="first">
                <h1> The biggest Indian hits. The best Indian stories.</h1>
                <h1>All streaming here.</h1>
                <p className="bio">Watch anywhere. Cancel anytime.</p>
                <p className="hi">Ready to watch? Enter your email to create or restart your membership.</p>
                <form action="" className="row">
                    <input type="email" name="" id="" placeholder="Please enter email"/>
                    <button type="submit">Get start</button>
                </form>
            </div>
        </div>
        <hr/>
        

    
        <section className="sectionof">
            <section className="fisrtsection">
                <div className="firstdiv">
                    <h1 className="">Enjoy on your TV</h1>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="seconddiv">
                    <img src="src/Tem/img/jiotv.png" alt="nothing"/>
                </div>
            </section>
            <hr/>
            <section className="fisrtsection">
                <div className="threddiv">
                    <img src="src/Tem/img/movie.png" alt=""/>
                </div>
                <div className="fourdiv">
                    <h1 className="">Download your shows </h1>
                    <h1> to watch offline</h1>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>
            </section>
            <hr/>
            <section className="fisrtsection">
                <div className="firstdiv">
                    <h1 className="">Watch everywhere</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="seconddiv">
                    <img src="src/Tem/img/diwali.png" alt="nothing"/>
                </div>
            </section>
            <hr/>
            <section className="fisrtsection">
                <div className="fiveddiv">
                    <img src="src/Tem/img/portfolio.png" alt="" className="create"/>
                </div>
                <div className="fourdiv">
                    <h1 className="">Create profiles for kids </h1>

                    <p>Send children on adventures with their favourite characters in a space made just for them—free
                        with your membership.</p>
                </div>
            </section>
            <hr/>

            <div className="toy">
                <h1>Frequently Asked Questions</h1>
                <ul className="according">
                    <li>
                        <input type="radio" name="according" id="first"/>
                        <label htmlFor="first">What is Netflix?</label>
                        <div className="contentloop">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur
                                voluptate dolorum, vel iure provident, architecto dolore reprehenderit quaerat animi
                                cumque ipsam, voluptas odit tempore. Accusamus reprehenderit officiis reiciendis
                                numquam.
                            </p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="according" id="second"/>
                        <label htmlFor="second">How much does Netflix cost?</label>
                        <div className="contentloop">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur
                                voluptate dolorum, vel iure provident, architecto dolore reprehenderit quaerat animi
                                cumque ipsam, voluptas odit tempore. Accusamus reprehenderit officiis reiciendis
                                numquam.
                            </p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="according" id="thired"/>
                        <label htmlFor="thired">Where can I watch?</label>
                        <div className="contentloop">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur
                                voluptate dolorum, vel iure provident, architecto dolore reprehenderit quaerat animi
                                cumque ipsam, voluptas odit tempore. Accusamus reprehenderit officiis reiciendis
                                numquam.
                            </p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="according" id="four"/>
                        <label htmlFor="four">How do I canel?</label>
                        <div className="contentloop">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur
                                voluptate dolorum, vel iure provident, architecto dolore reprehenderit quaerat animi
                                cumque ipsam, voluptas odit tempore. Accusamus reprehenderit officiis reiciendis
                                numquam.
                            </p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="according" id="five"/>
                        <label htmlFor="five">What can I watch on Netflix?</label>
                        <div className="contentloop">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur
                                voluptate dolorum, vel iure provident, architecto dolore reprehenderit quaerat animi
                                cumque ipsam, voluptas odit tempore. Accusamus reprehenderit officiis reiciendis
                                numquam.
                            </p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="according" id="six"/>
                        <label htmlFor="six">Is Netflix good for kids?</label>
                        <div className="contentloop">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur
                                voluptate dolorum, vel iure provident, architecto dolore reprehenderit quaerat animi
                                cumque ipsam, voluptas odit tempore. Accusamus reprehenderit officiis reiciendis
                                numquam.
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="tiger">
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <form action="" className="col">
                        <input type="email" name="" id="" placeholder="Email addres"/>
                        <button type="submit">Get start</button>
                    </form>
                </div>
            </div>
            <hr/>

            

            
            <footer>
            <div>
                <h4>Questions? Call <a href=""> 000-800-919-1694</a></h4>
            </div>

               <div className="footer">
                 <div className="footer-first">
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Speed Test</a></li>
                    </ul>
                   
                        <select className="tophero">English
                            <option value="English">English</option>
                            <option value="Hin-di">हिन्दी</option>
                        </select>
                    <h1 className="gold">Netflix India</h1>
                 </div>
                 <div className="footer-second">
                    <ul>
                        <li><a href="#">Help Centre</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Cookie Preferences</a></li>
                        <li><a href="#">Legal Notices</a></li>
                    </ul>
                 </div>
                 <div className="footer-thired">
                    <ul>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Ways to Watch</a></li>
                        <li><a href="#">Corporate Information</a></li>
                        <li><a href="#">Only on Netflix</a></li>
                    </ul>
                 </div>
                 <div className="footer-four">
                    <ul>
                        <li><a href="#">Media Centre</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                 </div>
               </div>
               
            </footer>
           
        </section>
        
        <div id="two">
        <div className="foga">
                WWWCopy@deeppatel459078.com
               </div>
               </div>



    </header>
        </>
    );
}

export default Landpage;