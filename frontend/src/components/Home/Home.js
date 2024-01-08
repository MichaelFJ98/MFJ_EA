import CategoryList from '../Category/CategoryList.js';

//startpage display all categories using CategoryList component
function Home() {
  return (
    <div className="bg-white">
      <div className="flex">
        <CategoryList/>
      </div>
    </div>
  );
}

export default Home;
