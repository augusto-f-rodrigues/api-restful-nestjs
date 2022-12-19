import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];

  private async buscaPorId(id){
    const possivelUsuario = this.usuarios.find(
      usuarioSalvo => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      throw new Error("This user doesn't exist");
    }

    return possivelUsuario;
  }

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
    const usuario = await this.buscaPorId(id);

    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      return (usuario[chave] = valor);
    });

    return usuario;
  }

  async remove(id: string){
    const usuario = await this.buscaPorId(id);

    this.usuarios = this.usuarios.filter(
      usuarioSalvo => usuarioSalvo.id !== id
    )

    return usuario;
  }
}
