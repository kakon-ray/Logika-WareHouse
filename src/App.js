import Navbar from "./component/Navbar/Navbar"
import Delivery from "./component/Section/Delivery/Delivery"
import MetOurTem from "./component/Section/MetOurTem/MetOurTem"
import Slider from "./component/Slider/Slider"


const App = () => {

  return (
    <div>
    <Navbar></Navbar>
    <Slider></Slider>
    <Delivery></Delivery>
    <MetOurTem></MetOurTem>
     
    </div>
  )
}

export default App