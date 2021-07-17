import './Nav.scss';
import { LocalMallOutlined } from '@material-ui/icons';

const Nav = () => {
    return (
        <div className="nav">
            <h1>
                F<span>oo</span>dy
            </h1>
            <div>
                <a href="#">Home</a>
                <a href="#">Menu</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
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
