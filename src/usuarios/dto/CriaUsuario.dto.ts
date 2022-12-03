import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  @EmailUnico({message: 'Already exists an user with this email.'})
  email: string;

  @MinLength(6)
  senha: string;
}
