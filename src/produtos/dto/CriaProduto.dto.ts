import { IsNotEmpty, IsNumber } from 'class-validator';
import { CaracteristicasProdutoDTO } from './CaracteristicasProduto.dto';
import { ImagemProdutoDTO } from './ImagemProduto.dto';

export class CriaProdutoDTO {
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  valor: number;

  @IsNumber()
  quantidadeDisponivel: number;

  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  caracteristicas: CaracteristicasProdutoDTO[];

  @IsNotEmpty()
  imagens: ImagemProdutoDTO[];

  @IsNotEmpty()
  categoria: string;

  @IsNotEmpty()
  dataCriacao: string;

  @IsNotEmpty()
  dataAtualizacao: string;
}
