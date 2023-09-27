import { Controller, Get, Param, Post, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { Item } from './Schema/item.schema';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render('index.hbs', {}, (err, html) => {
      res.send(html);
    });
  }

  @Post('/cadastrar')
  async cadastrar(@Res() res: Response, @Req() req: Request) {
    const body: Item = req.body as any;
    await this.appService.casdastrarItem(body);
    return res.render('index.hbs', {}, () => {
      res.redirect('/consulta');
    });
  }

  @Get('/consulta')
  @Render('consultar')
  async consultar() {
    const post = await this.appService.consultar();
    return { post };
  }
  @Get('/excluir/:id')
  @Render('consultar')
  async excluir(@Param() id: { id: string }, @Res() res: Response) {
    await this.appService.excluir(id.id);
    return res.render('consultar.hbs', {}, () => {
      res.redirect('/consulta');
    });
  }
}
