// eslint-disable-next-line
import './App.css';
import CategoryList from './components/Category/CategoryList.js';
import Navbar from './components/Navbar.js'

function App() {
  return (
    <div className="bg-white">
      <Navbar/>
      <div className="flex">
        <CategoryList/>
      </div>
    </div>
  );
}

export default App;
