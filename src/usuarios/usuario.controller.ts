import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.id = uuid();
    usuarioEntity.nome = dadosUsuario.nome;
    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.senha = dadosUsuario.senha;

    this.usuarioRepository.salvar(usuarioEntity);
    return { id: usuarioEntity.id, message: 'User created successfully' };
  }

  @Get()
  async listaUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.listar();
    const usuariosLista = usuariosSalvos.map(
      usuario => new ListaUsuarioDTO(usuario.id, usuario.nome),
    );

    return usuariosLista;
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtualizaUsuarioDTO,
  ) {
    const possivelUsuario = await this.usuarioRepository.atualiza(
      id,
      novosDados,
    );

    return {
      user: possivelUsuario,
      message: 'User updated successfully',
    };
  }

  @Delete('/:id')
  async deletaUsuario(@Param('id') id: string){
    const usuarioRemovido = await this.usuarioRepository.remove(id);

    return {
      user: usuarioRemovido,
      message: "User deleted successfully"
    }
  }
}
