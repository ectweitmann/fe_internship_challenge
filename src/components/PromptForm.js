import React,{ useState, useEffect } from 'react';
import inactiveAI from '../assets/inactiveAI.png';
import activeAI from '../assets/activeAI.png';
import '../styles/PromptForm.css';

const PromptForm = () => {
  const [prompt, setPrompt] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  let img;
  let formButton;

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
  }

  const resetForm = (e) => {
    e.preventDefault();
    setPrompt('');
    setIsSubmitted(false);
  }

  return (
    <form onSubmit={e => submitForm(e)}>
      <label htmlFor="inputPrompt">Enter prompt</label>
      <textarea
        id="inputPrompt"
        className="input-prompt"
        name="inputPrompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        required
      />
      <img src={img.src} className="image-ai" alt={img.alt} />
      {formButton}
    </form>
  );
}

export default PromptForm;
