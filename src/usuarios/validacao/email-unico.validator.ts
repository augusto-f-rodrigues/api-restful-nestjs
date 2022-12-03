import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';


@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const usuarioComEmailExiste = await this.usuarioRepository.existeComEmail(value)

    /* 
    Na função validate se for retornado o valor FALSE significa que queremos disparar um erro, como a função acima retorna TRUE caso o usuario com email já exista, então retornaremos a negação do valor retornado acima
    */

    return !usuarioComEmailExiste
  }
}

export const EmailUnico = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: Object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: EmailUnicoValidator
    })
  }
}
