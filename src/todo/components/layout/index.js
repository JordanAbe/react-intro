import React from 'react';
import  {
    Alignment,
    Classes,
    Navbar,
    NavbarGroup,
    NavbarHeading,
} from '@blueprintjs/core';
import './style.css';

function NavbarPage(props) {
    return(
        <div>
            <Navbar className={Classes.DARK}>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>TODO App</NavbarHeading>
                </NavbarGroup>
            </Navbar>
            <div className="page">
                {props.children}
            </div>
        </div>
    )
}

export default NavbarPage;