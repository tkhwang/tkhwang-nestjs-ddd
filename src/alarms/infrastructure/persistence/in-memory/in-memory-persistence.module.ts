import { AlarmRepository } from '@/alarms/application/ports/alarm.repository';
import { InMemoryAlarmRepository } from '@/alarms/infrastructure/persistence/in-memory/repositories/alarm.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [
    {
      provide: AlarmRepository,
      useClass: InMemoryAlarmRepository,
    },
  ],
  exports: [AlarmRepository],
})
export class InMemoryAlarmPersistenceModule {}
