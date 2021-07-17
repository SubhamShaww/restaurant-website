import './Banner.scss';

const Banner: React.FC = () => {
    return (
        <div className="banner">
            <div className="banner__content">
                <h1>it's not just Food, It's an Experience.</h1>
                <div className="bannercontent__buttons">
                    <button>View Menu</button>
                    <button>Book A Table</button>
                </div>
                <div className="bannercontent__review">
                    <p>Reviews</p>
                    <div className="review__avatars">
                        <img src="https://randomuser.me/api/portraits/thumb/men/66.jpg" alt="1st user" />
                        <img src="https://randomuser.me/api/portraits/thumb/men/62.jpg" alt="2nd user" />
                        <img src="https://randomuser.me/api/portraits/thumb/men/81.jpg" alt="3rd user" />
                        <span>40+</span>
                    </div>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                </div>
            </div>
            <img className="banner__image" src="biryani.png" alt="banner image" />
        </div>
    );
};

export default Banner;
