import React,{ useState, useEffect } from 'react';
import { postPrompt } from '../apiCalls';
import inactiveAI from '../assets/inactiveAI.png';
import activeAI from '../assets/activeAI.png';
import '../styles/PromptForm.css';
import 'animate.css';

const PromptForm = ({ setResponseLog }) => {
  const [prompt, setPrompt] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [response, setResponse] = useState(null);
  const [animation, setAnimation] = useState('');
  let img;
  let formButton;
  let responseBox;

  if (isSubmitted) {
    img = {
      src: activeAI,
      alt: 'active AI'
    };
    formButton = <button onClick={e => resetForm(e)}>Reset</button>
  } else {
    img = {
      src: inactiveAI,
      alt: 'inactive AI'
    };
    formButton = <button>Submit</button>
  }

  const submitForm = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setAnimation('animate__animated animate__pulse animate__infinite');
    postPrompt(prompt)
      .then(data => {
        setResponse(data.response);
        setAnimation('');
        setResponseLog(prevResponseLog => {
          return [
            {
              id: data.id,
              prompt: prompt,
              response: data.response
            },
            ...prevResponseLog
          ];
        });
      });
  }

  const resetForm = (e) => {
    e.preventDefault();
    setPrompt('');
    setResponse(null);
    setIsSubmitted(false);
  }

  responseBox = (
    <section className="response-box">
      <p className="response-text">{response}</p>
    </section>
  );

  return (
    <form onSubmit={e => submitForm(e)}>
      <label htmlFor="inputPrompt">Enter prompt</label>
      <textarea
        id="inputPrompt"
        className="input-prompt"
        name="inputPrompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={isSubmitted}
        required
      />
      <div className="response-container">
        <img src={img.src} className={`image-ai ${animation}`} alt={img.alt} />
        {response && responseBox}
      </div>
      {formButton}
    </form>
  );
}

export default PromptForm;
