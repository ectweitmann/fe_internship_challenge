import React,{ useState, useEffect } from 'react';
import inactiveAI from '../assets/inactiveAI.png';
import activeAI from '../assets/activeAI.png';
import '../styles/PromptForm.css';

const PromptForm = () => {
  const [prompt, setPrompt] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  let imgSrc;
  let formButton;

  if (isSubmitted) {
    console.log('if', isSubmitted);
    imgSrc = activeAI;
    formButton = <button type="button" onClick={e => resetForm(e)}>Reset</button>
  } else {
    console.log('else', isSubmitted);
    imgSrc = inactiveAI;
    formButton = <button onClick={e => submitForm(e)}>Submit</button>

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
    <form>
      <label htmlFor="inputPrompt">Enter prompt</label>
      <textarea
        id="inputPrompt"
        className="input-prompt"
        name="inputPrompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <img src={imgSrc} className="image-ai" />
      {formButton}
    </form>
  );
}

export default PromptForm;
