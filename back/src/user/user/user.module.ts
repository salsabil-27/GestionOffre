import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule} from '@nestjs/typeorm';
import { User } from './user.entity';
import { ServiceService } from './service.service';



@Module({
    imports:[
        TypeOrmModule.forFeature([User])

    ],
  controllers: [UserController],
  providers: [ServiceService]
})
export class UserModule {

}
