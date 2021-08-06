
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import { createStore } from 'redux'
import { userReducer } from 'react';
import {connect} from 'react-redux'

const ContextA = React.createContext();
const storeA = createStore(userReducer);

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
connect(mapStateA, null, null, { context: ContextA })(UserContainer)
//compose(connect(mapStateA, null, null, { context: ContextA }))(UsersContainer);
export default App;
