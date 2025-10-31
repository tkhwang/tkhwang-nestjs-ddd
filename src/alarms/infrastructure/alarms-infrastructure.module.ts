import { InMemoryAlarmPersistenceModule } from '@/alarms/infrastructure/persistence/in-memory/in-memory-persistence.module';
import { OrmAlarmPersistenceModule } from '@/alarms/infrastructure/persistence/orm/orm-persistence.module';
import { Module } from '@nestjs/common';

@Module({})
export class AlarmsInfrastructureModule {
  static use(driver: 'orm' | 'in-memory') {
    const persistenceModule =
      driver === 'orm' ? OrmAlarmPersistenceModule : InMemoryAlarmPersistenceModule;

    return {
      module: AlarmsInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
