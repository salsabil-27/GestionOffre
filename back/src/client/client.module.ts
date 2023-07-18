import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Client1 } from './client.entity';
import { ClientService } from './client.service';


@Module({
    imports:[
        TypeOrmModule.forFeature([Client1])

    ],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}
