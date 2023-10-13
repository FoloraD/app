import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

function SelectPage(state, setState) {
  switch (state.page) {
    case "page1":
      return <Page1 state={state} setState={setState} />
    case "page2":
      return <Page2 state={state} setState={setState} />
  }
}

function App() {
  const [state, setState] = useState({page: "page1"})

  return (
    <div className="App">
      <div className='navbar'></div>
      {SelectPage(state, setState)}
    </div>
  );
}

export default App;
