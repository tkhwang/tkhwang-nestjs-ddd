import { Injectable } from '@nestjs/common';
import { CreateAlarmCommand } from '@/alarms/application/commands/create-alarm.command';
import { AlarmRepository } from '@/alarms/application/ports/alarm.repository';
import { AlarmFactory } from '@/alarms/domain/factories/alarm.factory';

@Injectable()
export class AlarmsService {
  constructor(
    private readonly alarmRepository: AlarmRepository,
    private readonly alarmFactory: AlarmFactory,
  ) {}

  create(createAlarmCommand: CreateAlarmCommand) {
    const alarm = this.alarmFactory.create(createAlarmCommand.name, createAlarmCommand.severity);
    return this.alarmRepository.save(alarm);
  }

  findAll() {
    return this.alarmRepository.findAll();
  }
}
