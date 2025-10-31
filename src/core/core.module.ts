import { ApplicationBootstrapOptions } from '@/common/application-bootstrap-options.interface';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({})
export class CoreModule {
  static forRoot(options: ApplicationBootstrapOptions) {
    const imports =
      options.driver === 'orm'
        ? [
            TypeOrmModule.forRoot({
              type: 'postgres',
              host: process.env.DB_HOST,
              port: parseInt(process.env.DB_PORT ?? '5432'),
              username: process.env.DB_USERNAME,
              password: process.env.DB_PASSWORD,
              database: process.env.DB_NAME,
            }),
          ]
        : [];

    return {
      module: CoreModule,
      imports,
    };
  }
}
