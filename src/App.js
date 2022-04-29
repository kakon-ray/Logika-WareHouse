import Footer from "./component/Footer/Footer";
import Login from "./component/LoginRegistation/Login/Login";
import Registaion from "./component/LoginRegistation/Registation/Registation";
import Navbar from "./component/Navbar/Navbar";
import Delivery from "./component/Section/Delivery/Delivery";
import MetOurTem from "./component/Section/MetOurTem/MetOurTem";
import Slider from "./component/Slider/Slider";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Delivery></Delivery>
      <MetOurTem></MetOurTem>
      <Footer></Footer>
      <Login></Login>
      <Registaion></Registaion>
    </div>
  );
};

export default App;
