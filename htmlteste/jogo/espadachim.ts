import { Personagem } from './Personagem';

class Espadachim extends Personagem {
  private forca: number;

  constructor(nome: string, vida: number, ataque: number, forca: number) {
    super(nome, vida, ataque);
    this.forca = forca;
  }

  public atacar(oponente: Personagem): void {
    const dano = this.ataque + this.forca;
    oponente.receberDano(dano);
    console.log(${this.nome} atacou ${oponente.getNome()} com a espada por ${dano} de dano!);
  }
}

export default Espadachim;