import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario) {
    this.usuarios.push(usuario);
    return;
  }

  async listar() {
    return this.usuarios;
  }
}