import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './weather/app.globalhandler';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());

  const options = new DocumentBuilder()
  .setTitle('Weather API')
  .setDescription('This API will provide the current climate condition based on user input')
  .setVersion('1.0')
  .addServer('http://localhost:3333/', 'Local environment')
  .addTag('Current Weather')
  .build();

const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api-docs', app, document);

  await app.listen(3333);
}
bootstrap();
