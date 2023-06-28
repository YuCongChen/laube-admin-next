/**
 * winston日志配置
 *
 * @author: Cody
 * @time: 2023-06-28 10:37:28
 */
import { createLogger } from 'winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

const instance = createLogger({
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple(),
      ),
    }),
    new winston.transports.DailyRotateFile({
      level: 'warn',
      dirname: 'logs',
      filename: 'warn-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '30d',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple(),
      ),
    }),
    new winston.transports.DailyRotateFile({
      level: 'info',
      dirname: 'logs',
      filename: 'info-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '30d',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple(),
      ),
    }),
  ],
});

export default instance;
