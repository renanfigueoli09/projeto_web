import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as env from 'dotenv';
import { Item, Itemchema } from './Schema/item.schema';
env.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.URL_MONG),
    MongooseModule.forFeature([{ name: Item.name, schema: Itemchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
