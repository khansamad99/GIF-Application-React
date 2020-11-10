import  React from 'react';
import './App.css';
import Random from './components/randomgif';
import Tag from './components/taggif';
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
