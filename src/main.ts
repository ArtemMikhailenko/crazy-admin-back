import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://crazyfox.io'],
    credentials: true,
  });

  // Global validation
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('🦊 CrazyFox Numbers API')
    .setDescription('API для управления цифровыми данными лендинга CrazyFox')
    .setVersion('1.0')
    .addTag('numbers', 'Управление числовыми данными')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3001;
  await app.listen(port);
  
  console.log('🚀 CrazyFox Numbers API запущен на порту:', port);
  console.log('📚 Swagger документация: http://localhost:3001/api/docs');
}
bootstrap();