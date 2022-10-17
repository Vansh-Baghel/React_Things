import "./App.css";
import BackwardCounter from "./Counter/BackwardCounter";
import ForwardCounter from "./Counter/ForwardCounter";

function App() {
  return (
    <div className="App-header">
    <ForwardCounter />
    <BackwardCounter/>
    </div>
  )
}

export default App;