import { Injectable, NotFoundException } from '@nestjs/common';
import { Item, ItemDocument } from './Schema/item.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Item.name) private readonly ItemModel: Model<ItemDocument>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async casdastrarItem(item: Item) {
    const cadastrar = await this.ItemModel.create(item);
    if (!cadastrar) new NotFoundException();
    else return cadastrar;
  }

  async consultar() {
    return await this.ItemModel.find().exec();
  }

  async excluir(id: string) {
    return await this.ItemModel.findByIdAndDelete({ _id: id }).exec();
  }
}
