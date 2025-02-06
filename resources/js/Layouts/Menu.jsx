import React, { useEffect, useState } from "react";

export default function Menu({}) {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasShadow(window.scrollY > 0);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); 

    return (
        <header className={`s-header ${hasShadow ? "shadow" : ""}`}>

            <div className="s-header__logo">
                <a href={route('home')}>
                    HaylivMakeUp
                </a>
            </div>

            <div className={menuIsVisible ? "s-header__content menu-visible" : "s-header__content"}>
        
                <nav className="s-header__nav-wrap" >
                    <ul className="s-header__nav">
                        <li><a className="smoothscroll" href="#hero" title="Intro">Home</a></li>
                        <li><a className="smoothscroll" href="#about" title="About">About</a></li>
                        <li><a className="smoothscroll" href="#services" title="Services">Services</a></li>
                        <li><a className="smoothscroll" href="#portfolio" title="Works">Works</a></li>
                    </ul>
                </nav>

                <a href="mailto:#0" className="btn btn--primary btn--small">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
                    Schedules visit
                </a>

            </div>

            <a className="s-header__menu-toggle" href="#0" onClick={()=>{
                setMenuIsVisible(!menuIsVisible)
                console.log(menuIsVisible)
        }}><span>Menu</span></a>

        </header>
    )
}