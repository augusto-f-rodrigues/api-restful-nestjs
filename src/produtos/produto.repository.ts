import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  private produtos = [];

  listar() {
    return this.produtos;
  }

  criar(produto) {
    this.produtos.push(produto);
    return produto;
  }
}
