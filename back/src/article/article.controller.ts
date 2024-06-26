import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('create-article')
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get('list-article')
  findAll() {
    return this.articleService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.articleService.findOne(id);
  }

  @Patch('/:id')
  update(@Param('id') id:number, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(id, updateArticleDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.articleService.delete(id);
  }
}
