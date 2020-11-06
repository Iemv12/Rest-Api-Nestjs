import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animal/animal.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AnimalModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'ivan12',
      password: '',
      database: 'Animals',
      entities: [__dirname+'./**/**/entity{.ts,.js}'],
      autoLoadEntities:true,
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology:true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
