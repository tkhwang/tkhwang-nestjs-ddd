import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    // NOTE: To configure orm | in-memory, set DB_DRIVER environment variable in .env file
    AppModule.register({ driver: process.env.DB_DRIVER === 'orm' ? 'orm' : 'in-memory' }),
  );
  await app.listen(process.env.PORT ?? 3000);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
