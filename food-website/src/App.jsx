import TopNav from "./components/TopNav";
import Featured from "./components/Featured"; 
import Delivery from "./components/Delivery"; 
import TopPicks from "./components/TopPicks"; 
import Meal from "./components/Meal";
const App = () => {
  return (
    <>
      <TopNav />
      <Featured /> 
      <Delivery/> 
      <TopPicks/> 
      <Meal/>
    </>
  );
};

export default App;
