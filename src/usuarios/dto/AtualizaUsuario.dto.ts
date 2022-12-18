import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty()
  @IsOptional()
  nome: string;

  @IsEmail()
  @IsOptional()
  @EmailUnico({ message: 'Already exists an user with this email.' })
  email: string;

  @MinLength(6)
  @IsOptional()
  senha: string;
}
