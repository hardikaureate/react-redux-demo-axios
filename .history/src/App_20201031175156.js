
import './App.css';
import {Provider} from 'react-redux'
import CackContainer from './components/CackContainer';

function App() {
  return (
    <Provider>
    <div className="App">
      <CackContainer />
    </div>
    </Provider>
  );
}

export default App;
