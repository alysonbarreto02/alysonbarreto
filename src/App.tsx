import Globalstyle from './assets/style/globalstyle';
import { AboutMe } from './components/Content/AboutMe/AboutMe';
import { Home } from './components/Content/Home/Home';
import { Menu } from './components/Menu/Menu';


function App() {
  return (
    <>
      <Globalstyle/>
      <Menu/>
      <Home/>
      <AboutMe/>
    </>
  );
}

export default App;
