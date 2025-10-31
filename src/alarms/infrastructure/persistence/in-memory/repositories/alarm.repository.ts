import { AlarmRepository } from '@/alarms/application/ports/alarm.repository';
import { Alarm } from '@/alarms/domain/alarm';
import { AlarmEntity } from '@/alarms/infrastructure/persistence/in-memory/entities/alarm.entity';
import { AlarmMapper } from '@/alarms/infrastructure/persistence/in-memory/mappers/alarm.mapper';

export class InMemoryAlarmRepository implements AlarmRepository {
  private readonly alarms = new Map<string, AlarmEntity>();

  findAll(): Promise<Alarm[]> {
    const entities = Array.from(this.alarms.values());
    return Promise.resolve(entities.map((entity) => AlarmMapper.toDomain(entity)));
  }

  save(alarm: Alarm): Promise<Alarm> {
    const persistenceModel = AlarmMapper.toPersistence(alarm);
    this.alarms.set(persistenceModel.id, persistenceModel);
    return Promise.resolve(alarm);
  }
}
