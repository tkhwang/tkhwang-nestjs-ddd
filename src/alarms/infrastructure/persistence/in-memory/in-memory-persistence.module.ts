import { AlarmRepository } from '@/alarms/application/ports/alarm.repository';
import { OrmAlarmRepository } from '@/alarms/infrastructure/persistence/orm/repositories/alarm.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [
    {
      provide: AlarmRepository,
      useClass: OrmAlarmRepository,
    },
  ],
  exports: [AlarmRepository],
})
export class InMemoryAlarmPersistenceModule {}
