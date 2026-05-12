import { Personagem } from './Personagem';

class Mago extends Personagem {
  private magia: number;

  constructor(nome: string, vida: number, ataque: number, magia: number) {
    super(nome, vida, ataque);
    this.magia = magia;
  }

  public atacar(oponente: Personagem): void {
    const dano = this.ataque + this.magia;
    oponente.receberDano(dano);
    console.log(${this.nome} lançou um feitiço em ${oponente.getNome()} por ${dano} de dano!);
  }
}

export default Mago;
