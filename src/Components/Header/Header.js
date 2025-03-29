import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";
import {SvgTelegram, SvgWhatsApp} from "../SvgIcon";

const Header = () => {
    return (
            <header className="Header">
                <Link className="HomeLink" to={"/"}>
                    <img src={"./store/Emblem.png"} alt="Logo"/>
                </Link>
                <nav className="HeaderRouting">
                    <Link className="HeaderLink" to={"/about"}>О нас</Link>
                    <Link className="HeaderLink" to={"/attractions"}>Достопримечательности</Link>
                    <Link className="HeaderLink" to={"/my-places"}>Мои места</Link>
                    <Link className="HeaderLink" to={"/feedback"}>Обратная связь</Link>
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