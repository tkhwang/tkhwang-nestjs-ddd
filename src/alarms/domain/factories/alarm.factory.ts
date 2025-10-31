import { randomUUID } from 'crypto';
import { Alarm } from '@/alarms/domain/alarm';
import { AlarmSeverity } from '@/alarms/domain/value-objects/alarm-severity';

export class AlarmFactory {
  create(name: string, severity: string) {
    const alarmId = randomUUID();
    const alarmSeverity = new AlarmSeverity(severity);

    return new Alarm(alarmId, name, alarmSeverity);
  }
}
