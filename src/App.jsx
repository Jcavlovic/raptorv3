import ToggleSwitches from "./containers/ToggleSwitches.jsx";
import MenuBar from "./containers/MenuBar.jsx";
import StatusBar from "./containers/StatusBar.jsx";
//import ImageGallary from "./containers/timeline.jsx";

function App() {
  return (
    <div>
      <MenuBar />
      <ToggleSwitches />
      <StatusBar />
    </div>
  );
}

export default App;
