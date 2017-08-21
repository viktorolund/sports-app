import React from "react";
import io from "socket.io-client";

import NewsList from "./NewsList";

class News extends React.Component {
  constructor(props) {
    super(props);

    if (process.env.NODE_ENV !== "production") {
      this.news = require("../../../server/app/news-from-db");
    } else {
      const socket = io();

      socket.on("latest news", news => {
        this.news = news;
      });
    }
  }

  render() {
    return (
      <div>
        {this.news && <NewsList news={this.news} />}
      </div>
    );
  }
}

export default News;
