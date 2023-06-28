import { Global, Module, Logger } from '@nestjs/common';
import configuration from './configuration';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [],
  providers: [Logger],
  exports: [Logger],
})
export class AppModule {}
