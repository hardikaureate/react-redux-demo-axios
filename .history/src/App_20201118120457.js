
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import { connect } from "react-redux";

// const App = (props) => {
//   console.log("In main");
//   return <div>App</div>;
// };

function App() {
  return (
    <Provider store={store}>
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
  );
}
const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

export default connect(mapStateToProps, {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
})(App);
//export default App;
