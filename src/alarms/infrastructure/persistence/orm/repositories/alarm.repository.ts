import { AlarmRepository } from '@/alarms/application/ports/alarm.repository';
import { Alarm } from '@/alarms/domain/alarm';
import { AlarmEntity } from '@/alarms/infrastructure/persistence/orm/entities/alarm.entity';
import { AlarmMapper } from '@/alarms/infrastructure/persistence/orm/mappers/alarm.mapper';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class OrmAlarmRepository implements AlarmRepository {
  constructor(
    @InjectRepository(AlarmEntity)
    private readonly alarmRepository: Repository<AlarmEntity>,
  ) {}

  async findAll(): Promise<Alarm[]> {
    const entities = await this.alarmRepository.find();
    return entities.map((entity) => AlarmMapper.toDomain(entity));
  }

  async save(alarm: Alarm): Promise<Alarm> {
    const persistenceAlarm = AlarmMapper.toPersistence(alarm);
    const newEntity = await this.alarmRepository.save(persistenceAlarm);
    return AlarmMapper.toDomain(newEntity);
  }
}
