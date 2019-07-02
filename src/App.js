import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';


/* function App() { */
class Header extends Component {
  render() {
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>

      </header>
    );
  }
}

class App extends Component {
  render() {
  return (
    <div className="App">
      <Header title={"Hello from App"} />
      <Counter />
    </div>
  );
}
}

export default App;
