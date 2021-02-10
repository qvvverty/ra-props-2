import './App.css';
import items from './etsy.json';
import Listing from './components/Listing';

function App() {
  return (
    <Listing items={items} />
  );
}

export default App;
