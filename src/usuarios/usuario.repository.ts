import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];

  async salvar(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
    return;
  }

  async listar() {
    return this.usuarios;
  }

  async existeComEmail(email) {
    const emailJaCadastrado = this.usuarios.find(
      usuario => usuario.email === email,
    );

    return emailJaCadastrado != undefined;
  }

  async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    const possivelUsuario = this.usuarios.find(
      usuarioSalvo => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      throw new Error("This user doesn't exist");
    }

    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      return (possivelUsuario[chave] = valor);
    });

    return possivelUsuario;
  }
}
