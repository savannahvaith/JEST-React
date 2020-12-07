import logo from './Resources/logo.svg';
import './Resources/App.css';
import ComponentWithProps from './Components/ComponentWithProps';
import Form from './Components/Form';

function App() {
  const props = {
    headerText: `A header`,
    contentProp: `Some Content`,
    numericProp: 100,
    valueProp: 10000,
    expressionProp: 2 + 2,
    functionProp: () => `hello world`,
    objectProp: {
      key1: `key1 value`,
      key2: 2,
      key3: [`key3`, `array`, `values`]
    },
    arrayProp: [1, 2, 3]
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to write in React
        </a>
      </header>
      {/* <ComponentWithProps {...props}/> */}
      <Form/>
    </div>
  );
}

export default App;
