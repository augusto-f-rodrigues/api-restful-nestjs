import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoRepository } from './produto.repository';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Get()
  async listaProdutos() {
    return this.produtoRepository.listar();
  }

  @Post()
  async criarProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
    this.produtoRepository.criar(dadosDoProduto);
    return dadosDoProduto;
  }
}
