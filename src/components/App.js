import React, { useState } from 'react';
import PromptForm from './PromptForm';
import ResponseLog from './ResponseLog';
import '../styles/App.css';

function App() {
  const [responseLog, setResponseLog] = useState([]);

  return (
    <div className="base-background">
      <div className="content-background">
        <header className="App-header">
          <h1>Fun with AI</h1>
        </header>
        <PromptForm setResponseLog={setResponseLog} />
        <ResponseLog responseLog={responseLog} />
      </div>
    </div>
  );
}

export default App;
