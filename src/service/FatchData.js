import axios from "axios";

const FatchData = async () => {
  const apikey = "8F7a6l7hmgaVt41KDtsE5vox2ctd1Sxu";
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`;
  const response = await axios.get(url).then((res) => {
    return res;
  });
  return response;
};

export default FatchData;
