import { Column, CreateDateColumn, Entity, ObjectIdColumn } from "typeorm";

@Entity('Animal')
export class Animal{

    @ObjectIdColumn()
    _id:number;

    @Column({type:'varchar', length:255, nullable:false})
    name:string;

    @Column({type:'varchar', length:500, nullable:false})
    description:string;

    @Column({type:'varchar', length:50})
    type:string;

    @Column({type:'varchar', length:50, nullable:false})
    container:string;

    @Column({type:'boolean', nullable:false})
    extinct:boolean;

    @Column({type:'varchar'})
    image:string;

    @CreateDateColumn({type:'timestamp'})
    createdAt:Date;

}