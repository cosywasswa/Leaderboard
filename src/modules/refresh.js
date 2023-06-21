const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = 'whitty123';

const saveScores = async (user, score) => {
  const response = await fetch(`${url}games/${id}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await response.json();
  return data;
};

const returnScores = async () => {
  const response = await fetch(`${url}games/${id}/scores/`);
  const data = await response.json();
  return data;
};

export { saveScores, returnScores };