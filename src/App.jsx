import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeries } from "./modules/seriesAction";

const App = () => {
  const dispatch = useDispatch();
  const seriesCollection = useSelector((state) => state.seriesCollection);
  useEffect(() => {
    fetchSeries(dispatch);
  }, []);

  let displaySeries;
  if (seriesCollection) {
    displaySeries = seriesCollection.map((serie) => {
      return (
        <img
          src={serie.content.images.boxart.url}
          alt={serie.content.originalTitle}
        />
      );
    });
  }

  return <div>{displaySeries}</div>;
};

export default App;
