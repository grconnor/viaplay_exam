import axios from "axios";
import { GET_SERIES } from "../state/actions/actionTypes";

const fetchSeries = async (dispatch) => {
  let response = await axios.get(
    "https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga"
  );

  dispatch({
    type: GET_SERIES,
    payload: {
      seriesCollection:
        response.data._embedded["viaplay:blocks"][0]._embedded[
          "viaplay:products"
        ],
    },
  });
};

export { fetchSeries };
