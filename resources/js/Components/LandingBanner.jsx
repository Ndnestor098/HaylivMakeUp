import React from "react";


export default function LandingBanner(params) {
    return(
        <section className="s-hero target-section">
    
            <div className="s-hero__bg">
                <div className="gradient-overlay"></div>
            </div>
    
            <div className="row s-hero__content">
                <div className="column">
                    
                    <h1>Hello.</h1>
                    <div className="s-hero__content-about">
                    
                        <p>
                        We are Flare. We love <br/>
                        building great brands <br/>
                        & digital experiences.
                        </p>
        
                        <footer>
                            <div className="s-hero__content-social">
                                <a href="#0"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                                <a href="#0"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                                <a href="#0"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                                <a href="#0"><i className="fab fa-dribbble" aria-hidden="true"></i></a>
                            </div>
                        </footer>
                    </div>
    
                </div>
            </div>
    
            <div className="s-hero__video">
                <a className="s-hero__video-link" href="https://player.vimeo.com/video/117310401?color=01aef0&amp;title=0&amp;byline=0&amp;portrait=0" data-lity="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>
                    <span className="s-hero__video-text">Play Video</span>
                </a>
            </div>
    
            <div className="s-hero__scroll">
                <a href="#about" className="s-hero__scroll-link smoothscroll">
                    Scroll Down
                </a>
            </div>
    
        </section> 
    );
}