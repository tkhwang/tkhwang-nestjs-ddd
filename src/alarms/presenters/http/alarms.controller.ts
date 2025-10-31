import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlarmsService } from '@/alarms/application/alarms.service';
import { CreateAlarmDto } from '@/alarms/presenters/http/dto/create-alarm.dto';
import { CreateAlarmCommand } from '@/alarms/application/commands/create-alarm.command';

@Controller('alarms')
export class AlarmsController {
  constructor(private readonly alarmsService: AlarmsService) {}

  @Post()
  create(@Body() createAlarmDto: CreateAlarmDto) {
    return this.alarmsService.create(
      new CreateAlarmCommand(createAlarmDto.name, createAlarmDto.severity),
    );
  }

  @Get()
  findAll() {
    return this.alarmsService.findAll();
  }
}
