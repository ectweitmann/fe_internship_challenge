import React from 'react';
import '../styles/ResponseCard.css';

const ResponseCard = ({ prompt, response }) => {
  return (
    <section className="response-card" tabIndex="0">
      <div className="prompt-line-wrapper">
        <label htmlFor="prompt" className="response-section-labels">Prompt:</label>
        <p id="prompt">{prompt}</p>
      </div>
      <div className="response-line-wrapper">
        <label htmlFor="response" className="response-section-labels">Response:</label>
        <p id="response">{response}</p>
      </div>
    </section>
  );
}

export default ResponseCard;
