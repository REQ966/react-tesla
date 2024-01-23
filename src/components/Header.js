import "./Header.css";

export default function Header({logo, menu}){
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="nav-links">
                <a href="/">Model S</a>
                <a href="/">Model X</a>
                <a href="/">Solar Roof</a>
                <a href="/">Solar Panel</a>
            </div>

            <div className="nav-links-secondary">
            <a href="/">Támogatás</a>
            <a href="/">Fiók</a> 

            <div className="menu">
                <img src={menu} alt="Menu" />
            </div>

            </div>
        </header>
    );
}