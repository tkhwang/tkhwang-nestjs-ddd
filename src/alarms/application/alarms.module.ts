import { DynamicModule, Module, Type } from '@nestjs/common';
import { AlarmsService } from '@/alarms/application/alarms.service';
import { AlarmsController } from '@/alarms/presenters/http/alarms.controller';
import { AlarmFactory } from '@/alarms/domain/factories/alarm.factory';

@Module({
  controllers: [AlarmsController],
  providers: [AlarmsService, AlarmFactory],
})
export class AlarmsModule {
  static withInfrastructure(infrastructureModule: Type | DynamicModule) {
    return {
      module: AlarmsModule,
      imports: [infrastructureModule],
    };
  }
}
