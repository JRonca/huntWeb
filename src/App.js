import React from 'react';
import Header from './components/Header';
import Main from './pages/main';
import './styles.css'
import Routes from './routes'
const App=()=>(
  <div className="App">
    <Header/>
    <Routes />
  </div>
);
/*
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}
*/
export default App;
