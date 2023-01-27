import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { RegisterModule } from './register/register.module';
import { EmployeeModule } from './employee/employee.module';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    MongooseModule.forRoot ('mongodb+srv://user_bhagitha:Bhagitha9072%40@mycluster.74kgk.azure.mongodb.net/TestEmployee?retryWrites=true&w=majority'),
    RegisterModule,
    EmployeeModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 100,
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
