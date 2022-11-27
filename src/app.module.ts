import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuarios/usuarios.module';


@Module({
  imports: [UsuarioModule]
})
export class AppModule {}
