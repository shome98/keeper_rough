import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright {year}</p>//add copyright symbol
        </footer>
    )
}
export default Footer;