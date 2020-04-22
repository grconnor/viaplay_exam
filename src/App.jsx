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
        <div className="display-show">
          <img
            src={serie.content.images.landscape.url}
            alt={serie.content.originalTitle}
          />
        </div>
      );
    });
  }

  return (
    <>
      <div className="header">
        <img
          src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
          alt="logo"
        />
      </div>
      <div>{displaySeries}</div>
      <div className="footer" />
    </>
  );
};

export default App;
