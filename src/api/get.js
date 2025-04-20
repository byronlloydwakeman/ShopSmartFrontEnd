import axios from "axios";

export const Get = (url) => {
  const headers = {
    "accept": "application/json",
    "Authorization": "bearer yelp-api-token"
  }
  return(
    axios.get(url, { headers })
  );    
}
