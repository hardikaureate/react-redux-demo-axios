
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import CackContainer from './components/CackContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CackContainer />
    </div>
    </Provider>
  );
}

export default App;
