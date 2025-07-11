import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';


// Vite starter imports — not needed for current ALX tasks
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  // Vite counter logic — not used in current layout
  // const [count, setCount] = useState(0);

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

<UserProfile 
  name="Alice" 
  age="25" 
  bio="Loves Hiking and photography" 
/>


export default App;

// 👇 Vite starter JSX — commented out, not required for Task 2
/*
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
  <h1>Vite + React</h1>
  <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
  <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
*/
