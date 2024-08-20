import './App.css';
import Header from './Topbar/Header';
import Pageend from './Footer/Pageend';
import Slide from './Topbar/Slide';


function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Slide/>
      </div>
      <Pageend/>
    </div>
  );
}

export default App;

