import './App.css';
import Header from "./components/Header";
import Logo from "./assets/logo.svg";
import Menu from "./assets/menu.svg";
import Modelx from "./assets/modelx.jpg"
import Models from "./assets/models.jpg"
import Solarpanel from "./assets/solar_panel.jpg"
import Solarroof from "./assets/solar_roof.jpg"

import Bg from "./components/Bg"

function App() {
  return (
    <div className="App">

      <Header logo={Logo} menu={Menu}/>
      <div className='item-container'>
        
        <Bg img={Modelx} car="Model X"/>
        
        <Bg img={Models} car="Model S"/>
        
        <Bg img={Solarpanel} car="Solar Panel"/>
       
        <Bg img={Solarroof} car="Solar Roof"/>
        
    </div>
    </div>
  );
}

export default App;
