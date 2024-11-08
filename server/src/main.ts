import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://10.0.2.2:8081',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
