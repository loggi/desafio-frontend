import Header from "../../Components/Header/Header";
import Home from '../../Components/Home/Home';
import Footer from '../../Components/Footer/Footer';

const HomeScreen= () => {

    return(
        <>
            <Header className="hidden"></Header>
            <Home/>
            <Footer/>
        </>
    )

};

export default HomeScreen;