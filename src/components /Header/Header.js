import React from "react"

const Header = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="./Header#" className="brand-logo">MyFilms</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="./Header#">Repo</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Header;