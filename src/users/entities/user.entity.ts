import { Entity, Column, PrimaryGeneratedColumn,Unique, BeforeInsert, BeforeUpdate, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import * as bcryptjs from 'bcryptjs';
import { Role } from 'src/roles/entities/role.entity';
import { isEmail } from 'class-validator';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  
  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  password: string;
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    const salt = await bcryptjs.genSaltSync(10);
    if (!/^\$2[abxy]?\$\d+\$/.test(this.password)) {
      this.password = await bcryptjs.hash(this.password, salt);
    }
  }



  @ManyToOne(() => Role, (role) => role.users)
  role: Role

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}