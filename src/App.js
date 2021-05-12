import './App.css';
import categories from './helpers/data';
import Child from './components/child';
import Image from './components/Image';

function App() {

  return (
    <div className="App">
        <Image/>
      <header className="App-header">
      <div className="grid-container">
       <div className="headline"> <h2>Languages</h2></div>
        {categories.map(item => <Child language={item}/>)}
        </div>
      </header>
    </div>
  );
}

export default App;
