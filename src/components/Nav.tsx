import './Nav.scss';
import { LocalMallOutlined } from '@material-ui/icons';

const Nav = () => {
    return (
        <div className="nav">
            <h1>
                F<span>oo</span>dy
            </h1>
            <div>
                <a href="home">Home</a>
                <a href="menu">Menu</a>
                <a href="about">About Us</a>
                <a href="contact">Contact</a>
            </div>
            <div>
                <div className="icon-wrapper">
                    <LocalMallOutlined />
                </div>
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;
