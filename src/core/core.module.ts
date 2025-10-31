import { ApplicationBootstrapOptions } from '@/common/application-bootstrap-options.interface';
import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env.local', '.env'] })],
})
export class CoreModule {
  static forRoot(options: ApplicationBootstrapOptions) {
    const logger = new Logger(CoreModule.name);
    const driver = options.driver === 'orm' ? 'orm' : 'in-memory';
    logger.log(
      `CoreModule bootstrapping with ${driver === 'orm' ? '{orm}' : '{in-memory}'} provider.`,
    );

    const imports =
      options.driver === 'orm'
        ? [
            TypeOrmModule.forRootAsync({
              inject: [ConfigService],
              useFactory: (configService: ConfigService) => {
                return {
                  type: 'postgres',
                  host: configService.get<string>('DB_HOST'),
                  port: parseInt(configService.get<string>('DB_PORT') ?? '5432', 10),
                  username: configService.get<string>('DB_USERNAME'),
                  password: configService.get<string>('DB_PASSWORD'),
                  database: configService.get<string>('DB_NAME'),
                };
              },
            }),
          ]
        : [];

    return {
      module: CoreModule,
      imports,
    };
  }
}
