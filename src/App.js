import logo from './logo.svg';

import './App.css';
import { useState } from 'react';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

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
     <Navbar/>
      {SelectPage(state, setState)}
      <Home />
    </div>
  );
}

export default App;
