import { IsNotEmpty } from 'class-validator';

export class CaracteristicasProdutoDTO {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  descricao: string;
}
