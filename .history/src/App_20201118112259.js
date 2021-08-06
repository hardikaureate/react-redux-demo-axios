
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

const ContextA = React.createContext();
const storeA = createStore(reducerA);

function App() {
  return (
    <Provider store={store}>
    <Provider store={storeA} context={ContextA} >
    <div className="App">
      <UserContainer /> 
    <ItemContainer cake />
    <ItemContainer />
      <HooksCakeContainer />
      <CakeContainer />
      <IceCreamContainer />
      <NewCakeContainer />
    </div>
    </Provider>
    </Provider>
  );
}

export default App;
