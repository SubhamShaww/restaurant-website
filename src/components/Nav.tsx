import './Nav.scss';
import { LocalMallOutlined, MenuOutlined } from '@material-ui/icons';
import { useState } from 'react';

const Nav = () => {
    const [showOptions, setShowOptions] = useState<Boolean>(false);

    return (
        <div className="nav__wrapper">
            <div className="nav">
                <h1>
                    F<span>oo</span>dy
                </h1>
                <div className="nav__options1">
                    <a href="#">Home</a>
                    <a href="#">Menu</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                </div>
                <div className="nav__options2">
                    <div className="icon-wrapper">
                        <LocalMallOutlined />
                    </div>
                    <button>Sign Up</button>
                </div>
                <div className="nav__hamburger" onClick={() => setShowOptions(!showOptions)}>
                    <MenuOutlined />
                </div>
            </div>
            <div className={showOptions ? 'hamburgerOptions__show' : 'hamburgerOptions__hide'}>
                <a href="#">Home</a>
                <a href="#">Menu</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
};

export default Nav;
