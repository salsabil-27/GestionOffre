import { Injectable } from '@nestjs/common';
import { Client1 } from './client.entity';
import {InjectRepository} from '@nestjs/typeorm'
import { Repository } from 'typeorm';
@Injectable()
export class ClientService {
    constructor(

        @InjectRepository(Client1) private readonly ClientRepository : Repository<Client1>

    )
        {
           
        }
        async all():Promise<Client1[]>{
            return this.ClientRepository.find()
        }
        async create(data):Promise<Client1>{
              
            return this.ClientRepository.save(data);

            

        }
        async getelement(id: number): Promise<Client1> {
            return this.ClientRepository.findOneBy({id});
          }
          async update(id:number,data):Promise<any>{
            return this.ClientRepository.update(id,data)
          }
          async delete(id:number):Promise<any>{
            return this.ClientRepository.delete(id)
          }
    
}
