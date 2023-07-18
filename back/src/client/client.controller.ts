import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {

    constructor(private clientService:ClientService){

    }

    @Get()
    async all(){
        return this.clientService.all();
    }
    @Post()
    
   async create(
        
        @Body('NomContact') NomContact:string,
        @Body('telContact') telContact:number,
        @Body('emailContact') emailContact:string,
        @Body('website') website:string,
        @Body('namesociete') namesociete:string,
        @Body('adresseSociete') adresseSociete:string,
        @Body('FaxSociete') FaxSociete:number,
        @Body('TelSociete') TelSociete:string,
        @Body('emailSociete') emailSociete:string,
        ){
        return this.clientService.create({
            NomContact,
            telContact,
            emailContact,
            website,
            namesociete,
            adresseSociete,
            FaxSociete,
            TelSociete,
            emailSociete,

        })
        

    }
    @Get('/:id')
    async getelement(@Param('id') id:number){
        return this.clientService.getelement(id);
    }

    @Put('/:id')
    async update(
        @Param('id') id:number,
        @Body('NomContact') NomContact:string,
        @Body('telContact') telContact:number,
        @Body('emailContact') emailContact:string,
        @Body('website') website:string,
        @Body('namesociete') namesociete:string,
        @Body('adresseSociete') adresseSociete:string,
        @Body('FaxSociete') FaxSociete:number,
        @Body('TelSociete') TelSociete:string,
        @Body('emailSociete') emailSociete:string,

    ){
       return this.clientService.update(
        id,{
            NomContact,
            telContact,
            emailContact,
            website,
            namesociete,
            adresseSociete,
            FaxSociete,
            TelSociete,
            emailSociete
        })

    }

    @Delete('/:id')
    async delete(
        @Param('id') id:number){
            return this.clientService.delete(id)}

   
    
    
}
