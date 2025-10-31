import { randomUUID } from 'crypto';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmSeverity } from 'src/alarms/domain/value-objects/alarm-severity';

export class AlarmFactory {
  create(name: string, severity: string) {
    const alarmId = randomUUID();
    const alarmSeverity = new AlarmSeverity(severity);

    return new Alarm(alarmId, name, alarmSeverity);
  }
}
