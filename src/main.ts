import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use( function(req, res, next) {

	if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
	  return res.sendStatus(204);
	}
  
   next();
	
  });
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: 'http://localhost:4200', // Укажите URL вашего клиента
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Укажите разрешенные методы
  });

  await app.listen(port);
}


bootstrap();

