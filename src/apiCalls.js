export const postPrompt = (prompt) => {
  return fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`
    },
    body: JSON.stringify({
      prompt: `${prompt}`,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
