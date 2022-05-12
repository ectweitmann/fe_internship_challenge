export const cleanResponseData = (data) => {
  return {
    id: data.id,
    response: data.choices[0].text
  };
}
