import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    }),
  );
  const documentConfig = new DocumentBuilder()
    .addServer('http://localhost:3000')
    .setTitle('Pizza Delivery')
    .setDescription('API for Pizza Delivery')
    .setVersion('1.0')
    .build();

  const documentation = SwaggerModule.createDocument(app, documentConfig);

  SwaggerModule.setup('api', app, documentation);

  await app.listen(3000);
}
bootstrap();
