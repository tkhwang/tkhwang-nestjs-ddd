import { AlarmRepository } from '@/alarms/application/ports/alarm.repository';
import { Alarm } from '@/alarms/domain/alarm';
import { AlarmEntity } from '@/alarms/infrastructure/persistence/orm/entities/alarm.entity';
import { AlarmMapper } from '@/alarms/infrastructure/persistence/orm/mappers/alarm.mappter';

export class InMemoryAlarmRepository implements AlarmRepository {
  private readonly alarms = new Map<string, AlarmEntity>();

  findAll(): Promise<Alarm[]> {
    const entities = Array.from(this.alarms.values());
    return Promise.resolve(entities.map((entity) => AlarmMapper.toDomain(entity)));
  }

  save(alarm: Alarm): Promise<Alarm> {
    const persistenceModel = AlarmMapper.toPersistence(alarm);
    this.alarms.set(persistenceModel.id, persistenceModel);

    const newEntity = this.alarms.get(persistenceModel.id);
    if (!newEntity) throw new Error('Alarm not found');

    return Promise.resolve(AlarmMapper.toDomain(newEntity));
  }
}
