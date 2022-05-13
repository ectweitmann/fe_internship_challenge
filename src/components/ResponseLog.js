import React from 'react';
import ResponseCard from './ResponseCard';
import '../styles/ResponseLog.css';

const ResponseLog = ({ responseLog }) => {
  const emptyLogMessage = <p className="empty-log-msg">There are no responses to log yet.</p>;

  const log = responseLog.map(response => {
    return (
      <ResponseCard
        key={response.id}
        prompt={response.prompt}
        response={response.response}
      />
    );
  });

  return (
    <section className="response-log">
      <h2>Responses</h2>
      {!log.length && emptyLogMessage}
      {log}
    </section>
  );
}

export default ResponseLog;
