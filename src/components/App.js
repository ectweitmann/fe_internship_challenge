import React from 'react';
import PromptForm from './PromptForm';
import '../styles/App.css';

function App() {
  return (
    <div className="base-background">
      <div className="content-background">
        <header className="App-header">
          <h1>Fun with AI</h1>
        </header>
        <PromptForm />
      </div>
    </div>
  );
}

export default App;
