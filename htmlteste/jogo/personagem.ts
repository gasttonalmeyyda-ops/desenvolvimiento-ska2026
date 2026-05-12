abstract class Personagem {
  protected nome: string;
  protected vida: number;
  protected ataque: number;

  constructor(nome: string, vida: number, ataque: number) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
  }

  public getNome(): string {
    return this.nome;
  }

  public getVida(): number {
    return this.vida;
  }

  public getAtaque(): number {
    return this.ataque;
  }

  public receberDano(dano: number): void {
    this.vida -= dano;
  }

  public abstract atacar(oponente: Personagem): void;
}