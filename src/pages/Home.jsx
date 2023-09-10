import Categories from "../components/Categories";
import ElContainer from "../components/ElContainer";
import Rooms from "../components/Rooms";

const Home = () => {
    return (
        <ElContainer>
           <Categories></Categories> 
           <Rooms></Rooms>
        </ElContainer>
    );
};

export default Home;