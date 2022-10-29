import React from "react";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Badge from '@mui/material/Badge';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Navbar = (n) => {
    return (<>
        <nav className="navbar bg-light">
            <div className="container fw-semibold font-monospace ">
                <a className="navbar-brand" href="https://www.linkedin.com/in/chandrajeetmaurya/">
                    <img src="https://www.amfori.org/sites/default/files/webform/membership/logo/logo-ohne-kontur-1.gif" alt="Bootstrap" width="60" height="40" />
                </a>
                <h2 className="shadow_t"> KEEP INFO <Badge color="secondary" badgeContent={n.size} showZero>
                    <ChatBubbleIcon />
                </Badge> </h2>
            </div>
        </nav>

    </>)
}
export default Navbar;
