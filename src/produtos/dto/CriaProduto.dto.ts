import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { CaracteristicasProdutoDTO } from './CaracteristicasProduto.dto';
import { ImagemProdutoDTO } from './ImagemProduto.dto';

export class CriaProdutoDTO {
  @IsUUID(undefined, { message: 'User ID invalid.' })
  usuarioId: string;

  @IsNotEmpty()
  nome: string;

  @IsNumber()
  valor: number;

  @IsNumber()
  quantidadeDisponivel: number;

  @IsNotEmpty()
  descricao: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CaracteristicasProdutoDTO)
  caracteristicas: CaracteristicasProdutoDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];

  @IsNotEmpty()
  categoria: string;

  @IsNotEmpty()
  dataCriacao: string;

  @IsNotEmpty()
  dataAtualizacao: string;
}
