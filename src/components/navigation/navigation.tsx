import '@styles/navigation/navigation.css'

import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    const links = [
        { to: "/", value: "Home" },
        { to: "/tasks", value: "Tasks" },
        { to: "/hideout", value: "Hideout" },
    ];

    return(
        <>
            <nav className={`navigation`}>
                <div className={'navigation-wrapper'}>
                    <div className={'navigation-logo'}>
                        {/* Put logo */}
                    </div>
                    <div className="navigation-links">
                        <ul className={'navigation-links-list'}>
                            {links.map(link =>
                                (
                                    <li className={"navigation-link"} key={link.to}>
                                        <Link to={link.to}>
                                            <h2>{link.value}</h2>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;