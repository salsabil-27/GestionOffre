import {Entity,PrimaryGeneratedColumn,Column} from "typeorm"
import { IsEmail, IsNotEmpty} from "class-validator";

@Entity()
export class Client1 {
    
    @PrimaryGeneratedColumn()
    id:number ;

    resetId(): void {
        this.id = null; // or assign a new value, e.g., this.id = 0;
      }
    
    @IsNotEmpty()
    @Column()
    NomContact :string;

    @IsNotEmpty()

    @Column()
    telContact:number;
    @Column({ unique: true })
    @IsEmail()
    emailContact: string;

    @Column()
    website:string;

    @Column()
    namesociete:string;

    @Column()
    adresseSociete:string;

    @IsNotEmpty()
    @Column()
    FaxSociete:number;

    @Column()
    TelSociete:number

    @IsNotEmpty()
    @Column()
    @IsEmail()
    emailSociete: string;



}