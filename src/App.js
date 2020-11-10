import  React from 'react';
import './App.css';
import Random from './components/randomgif';
import Tag from './components/taggif';
function App() {
  return (
    <div className="App">
      Custom React Hooks
      <div className="main-container">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
