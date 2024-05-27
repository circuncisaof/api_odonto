import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
export const globalSet = 'api/v1';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(globalSet);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
