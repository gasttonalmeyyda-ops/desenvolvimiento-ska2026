import Mago from './Mago';
import Espadachim from './Espadachim';
import { Personagem } from './Personagem';

class Jogo {
  private mago: Mago;
  private espadachim: Espadachim;

  constructor(mago: Mago, espadachim: Espadachim) {
    this.mago = mago;
    this.espadachim = espadachim;
  }

  public iniciar(): void {
    // Lógica de jogo aqui
  }
}

export default Jogo;