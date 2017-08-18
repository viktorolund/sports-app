/*eslint-disable no-console */
import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";
import { winstonConsoleLogger } from "./WinstonLogger";

process.env.NODE_ENV = "production";

winstonConsoleLogger.info("Building app in productionmode");
winstonConsoleLogger.info(
  "Generating minified bundle for production via Webpack.."
);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.info(err);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => winstonConsoleLogger.error(error));
  }

  if (jsonStats.hasWarnings) {
    jsonStats.warnings.map(warning =>
      winstonConsoleLogger.warning(
        `Webpack generated the following warnings: ${warning}`
      )
    );
  }

  winstonConsoleLogger.info(`Webpack stats: ${stats}`);

  winstonConsoleLogger.silly(
    "Your app has been compiled in production mode and written to /dist. It's ready to roll!"
  );

  return 0;
});
