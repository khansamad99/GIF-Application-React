import  React from 'react';
import './App.css';
import Random from './components/random2';
import Tag from './components/tag2';
function App() {
  return (
    <div>
      <h1>Custom React Hooks</h1>
        <div className="main-container">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
