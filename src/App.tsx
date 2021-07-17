import Nav from './components/Nav';
import Banner from './components/Banner';
import FoodList from './components/FoodList';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="app">
            <div className="app__body">
                <Nav />
                <Banner />
                <FoodList />
            </div>
        </div>
    );
};

export default App;
