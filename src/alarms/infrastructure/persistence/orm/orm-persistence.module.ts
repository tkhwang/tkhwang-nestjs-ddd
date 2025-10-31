import { AlarmRepository } from '@/alarms/application/ports/alarm.repository';
import { AlarmEntity } from '@/alarms/infrastructure/persistence/orm/entities/alarm.entity';
import { OrmAlarmRepository } from '@/alarms/infrastructure/persistence/orm/repositories/alarm.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AlarmEntity])],
  providers: [
    {
      provide: AlarmRepository,
      useClass: OrmAlarmRepository,
    },
  ],
  exports: [AlarmRepository],
})
export class OrmAlarmPersistenceModule {}
