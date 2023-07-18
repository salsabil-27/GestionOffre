import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import{ ServiceService }from './service.service';
enum Poste {
    DEVELOPPEUR = 'Développeur',
    RESSOURCE_HUMAINE = 'Ressource Humaine',
    MANAGER = 'Manager',
    AUTRE = 'Autre',
  }
@Controller('user')
export class UserController {
  constructor(private userService:ServiceService){

  }

  @Get()
  async all(){
      return this.userService.all();
  }
  @Post()
  
 async create(
      
      @Body('name') name:string,
      @Body('emailt') email:string,
      @Body('password') password:string,
      @Body('tel') tel:number,
      @Body('poste') poste:Poste,
      ){
      return this. userService.create({
        name,
        email,
        password,
        tel,
       poste,

      })
      

  }
  @Get('/:id')
  async getelement(@Param('id') id:number){
      return this.userService.getelement(id);
  }

  @Put('/:id')
  async update(
      @Param('id') id:number,
      @Body('name') name:string,
      @Body('emailt') email:string,
      @Body('password') password:string,
      @Body('tel') tel:number,
      @Body('poste') poste:Poste,

  ){
     return this.userService.update(
      id,{
        name,
        email,
        password,
        tel,
       poste,
      })

  }

  @Delete('/:id')
  async delete(
      @Param('id') id:number){
          return this.userService.delete(id)}
}
