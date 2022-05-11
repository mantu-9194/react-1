import './App.css';
import FunctionalComponent from './Practice/FunctionalComponent';
import ClassComponent from './Practice/ClassComponent';
import './Practice/Style.css'
import { useState } from 'react'

function App() {
  const [name1, setName1] = useState(false)
  const [name2, setName2] = useState(false)
  return (
    <div className="App">

      <>
        <h1>Styling Using Functional and Class Component</h1>

        <div>
          <button id='btn1' onClick={() => { name1 ? setName1(false) : setName1(true) }}>To See Styling in Functional Component</button>
          {name1 && <FunctionalComponent />}
        </div>

        <div>
          <button id='btn2' onClick={() => { name2 ? setName2(false) : setName2(true) }}>To See Styling in Class Component</button>
          {name2 && <ClassComponent />}
        </div>
      </>


    </div>
  );
}

export default App;