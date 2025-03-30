import React from "react";
import "./Header.css"
import {Link, NavLink} from "react-router-dom";
import {SvgTelegram, SvgWhatsApp} from "../SvgIcon";

const Header = ({scrollToSection}) => {

    const handleScroll = (ref) => {
        if (ref && ref.current) {
            const topOffset = ref.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
    };

    return (
        <header className="Header">
            <Link className="HomeLink" to={"/"}>
                <img src={"/store/Emblem.png"} alt="Logo"/>
            </Link>
            <nav className="HeaderRouting">
                <li className="HeaderLink" onClick={() => scrollToSection && handleScroll(scrollToSection.aboutRef)}>
                    <Link to={"/#about"}>
                        О нас
                    </Link>
                </li>
                <li className="HeaderLink"
                    onClick={() => scrollToSection && handleScroll(scrollToSection.attractionsRef)}>
                    <Link to={"/#attractions"}>
                        Достопримечательности
                    </Link>
                </li>
                <NavLink
                    className="HeaderLink"
                    to="/my-places"
                    style={({isActive}) => ({
                        textShadow: isActive ? "0.5px 0 0 var(--color-main)" : "",
                        transform: isActive ? "scale(1.02)" : "",
                    })}
                >
                    Мои места
                </NavLink>
                <li className="HeaderLink" onClick={() => scrollToSection && handleScroll(scrollToSection.feedbackRef)}>
                    <Link to={"/#feedback"}>
                        Обратная связь
                    </Link>
                </li>
            </nav>
            <div className="SocialsLinks">
                <a href={"https://telegram.org"}>
                    <SvgTelegram/>
                </a>
                <a href={"https://www.whatsapp.com/"}>
                    <SvgWhatsApp/>
                </a>
            </div>
        </header>
    )
}

export default React.memo(Header)