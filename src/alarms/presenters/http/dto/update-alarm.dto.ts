import { PartialType } from '@nestjs/mapped-types';
import { CreateAlarmDto } from '@/alarms/presenters/http/dto/create-alarm.dto';

export class UpdateAlarmDto extends PartialType(CreateAlarmDto) {}
