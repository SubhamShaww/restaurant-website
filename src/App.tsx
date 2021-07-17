import Nav from './components/Nav';
import Banner from './components/Banner';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="app">
            <div className="app__body">
                <Nav />
                <Banner />
            </div>
        </div>
    );
};

export default App;
