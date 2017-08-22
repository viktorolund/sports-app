import io from "socket.io-client";

import * as actionTypes from "./actionTypes";

function loadNewsSuccess(news) {
  return {
    type: actionTypes.NEWS_LOADED,
    news
  };
}

function loadNews() {
  return dispatch => {
    if (process.env.NODE_ENV !== "production") {
      const nws = require("../../server/app/news-from-db");
      dispatch(loadNewsSuccess(nws));
    } else {
      const socket = io();

      socket.on("latest news", news => {
        dispatch(loadNewsSuccess(news));
      });
    }
  };
}

export { loadNews, loadNewsSuccess };
