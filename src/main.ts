import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import winstonInstance from './winston';
import { WinstonModule } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      instance: winstonInstance,
    }),
  });

  await app.listen(3000);
}
bootstrap();
