import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import {InjectRepository} from '@nestjs/typeorm'
import { Repository } from 'typeorm';
@Injectable()
export class ServiceService {
  constructor(

    @InjectRepository(User) private readonly UserRepository : Repository<User>

)
    {
       
    }
    async all():Promise<User[]>{
        return this. UserRepository.find()
    }
    async create(data):Promise<User>{
          
        return this. UserRepository.save(data);

        

    }
    async getelement(id: number): Promise<User> {
        return this. UserRepository.findOneBy({id});
      }
      async update(id:number,data):Promise<any>{
        return this. UserRepository.update(id,data)
      }
      async delete(id:number):Promise<any>{
        return this. UserRepository.delete(id)
      }
}
