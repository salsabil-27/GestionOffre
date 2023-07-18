import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IsEmail, IsNotEmpty, Matches, Length} from "class-validator";
enum Poste {
  DEVELOPPEUR = 'Développeur',
  RESSOURCE_HUMAINE = 'Ressource Humaine',
  MANAGER = 'Manager',
  AUTRE = 'Autre',
}
@Entity({name:"users"})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;


  @IsNotEmpty()
  @Column()
 name: string;

 @IsNotEmpty()
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Column()
  @Length(6, 20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  password: string;

  @Column()
  tel:number;
  
  @IsNotEmpty()
 
  @Column({ type: 'enum', enum: Poste, default: Poste.DEVELOPPEUR })
  poste: Poste;


 

}