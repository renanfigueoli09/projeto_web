import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';
export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
  @Prop({ required: true })
  @IsString({ message: 'Temperatura deve ser uma string' })
  @IsNotEmpty({ message: 'campo temperatura vazio' })
  Temperatura: string;

  @Prop({ required: true })
  @IsString({ message: 'Temperatura deve ser uma string' })
  @IsNotEmpty({ message: 'campo temperatura vazio' })
  Humidade: string;
}
export const Itemchema = SchemaFactory.createForClass(Item);
