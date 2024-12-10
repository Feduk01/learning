import Wrapper from '../components/Wrapper'
import './App.css'

function App() {
  return (
    <div className="App">
      <Wrapper color={'lightblue'}>
        <h2>Text inside of the Wrapper</h2>
        <button>Press me</button>
      </Wrapper>

      <Wrapper color={'lightgreen'}>
        <h2>Another Wrapper</h2>
        <p>Describe the desire</p>
        <input type="text" placeholder="Type..." />
      </Wrapper>
    </div>
  )
}

export default App
