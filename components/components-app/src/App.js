// import logo from './logo.svg';
import './App.css';
import Counter from './components/functional_components';
import Home from './components/Home';
import Profile from './components/Profile';
import UsestateLearning from './components/UsestateLearning'

function App() {
  const users = {
    name : 'lilly',
    age : 3,
    hobby : 'Eating'
  }
  return (
    <div className="App">
      <Counter/>
      <Home username = {users.name}/>
      <Profile details = {users}/>
      <UsestateLearning/>
    </div>
  );
}

export default App;
