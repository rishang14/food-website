import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";
import Cateogries from "./components/Cateogries";
import NewsLetter from "./components/NewsLetter"; 
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Cateogries />
      <NewsLetter/> 
      <Footer/>
    </>
  );
};

export default App;
