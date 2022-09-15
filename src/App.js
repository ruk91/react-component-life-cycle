import './App.css';
import { useState, useEffect } from 'react'
import Text from './Text';
import Axios from 'axios'

function App() {
  const [showText, setShowText] = useState(false)
  const [catFact, setCatFact] = useState('')

  // useEffect(() => {
  //   fetch('https://catfact.ninja/fact')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log('data: ', data)
  //   })
  // }, [])

  // useEffect(() => {
  //   Axios('https://catfact.ninja/fact')
  //   .then((res) => {
  //     console.log("res.data: ", res.data)
  //     setCatFact(res.data.fact)
  //   })
  // }, [])

  useEffect(() => {
    fetchCatFact()
  }, [])
  
  const fetchCatFact = () => {
    Axios('https://catfact.ninja/fact')
    .then((res) => {
      console.log("res.data: ", res.data)
      setCatFact(res.data.fact)
    })
  }

  return (
    <div className="App">
      <button
        // onClick={() => {
        //   setShowText(!showText)
        // }}
        onClick={fetchCatFact}
      >
        Generate Cat Fact
      </button>
      <h3>{catFact}</h3>

      {
        showText && <Text />
      }
    </div>
  );
}

export default App;
