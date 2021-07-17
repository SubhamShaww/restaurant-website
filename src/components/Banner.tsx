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
                    <div className="review__avatars"></div>
                    <div>⭐⭐⭐⭐⭐</div>
                </div>
            </div>
            <img className="banner__image" src="biryani.png" alt="banner image" />
        </div>
    );
};

export default Banner;
