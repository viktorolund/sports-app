import winston from "winston";
import path from "path";

const infologName = "file-log.info";
const infopath = path.join(__dirname, infologName);

const winstonConsoleLogger = new winston.Logger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: infopath,
      level: "info"
    })
  ]
});

winstonConsoleLogger.cli();

export { winstonConsoleLogger };
