import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Get()
  async listaProdutos() {
    return this.produtoRepository.listar();
  }

  @Post()
  async criarProduto(@Body() dadosDoProduto) {
    this.produtoRepository.criar(dadosDoProduto);
    return dadosDoProduto;
  }
}
