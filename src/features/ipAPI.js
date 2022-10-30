const API_KEY = process.env.REACT_APP_IPIFY_API_KEY;

export const fetchInitialIp = () => {
  return fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`
  ).then((res) => res.json());
};
export const fetchSearchedIp = (userInput) => {
  return fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}${userInput}`
  ).then((res) => res.json());
};
