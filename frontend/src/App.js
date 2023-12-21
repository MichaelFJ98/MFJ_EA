// eslint-disable-next-line
import './App.css';
import Category from './components/Category/Category.js';
import CategoryRow from './components/Category/CategoryRow.js';
import Navbar from './components/Navbar.js'

function App() {
  return (
    <div className="bg-white">
      <Navbar/>
      <div className="flex">
        <CategoryRow/>
      </div>
    </div>
  );
}

export default App;
