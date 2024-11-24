import React from 'react';
import TerminalComponent from './components/TerminalComponent';

/*
function App() {
  return (
    <div className="App">
      <Terminal />
    </div>
  )
}
*/
const App: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0 }}>
      <TerminalComponent />
    </div>
  );
};

export default App;
