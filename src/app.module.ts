import { Module } from '@nestjs/common';
import { ProdutoModule } from './produtos/produto.module';
import { UsuarioModule } from './usuarios/usuarios.module';

@Module({
  imports: [UsuarioModule, ProdutoModule],
})
export class AppModule {}
