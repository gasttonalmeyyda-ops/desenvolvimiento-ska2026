import Mago from './Mago';
import Espadachim from './Espadachim';
import Jogo from './Jogo';

const mago = new Mago('Mago', 100, 20, 30);
const espadachim = new Espadachim('Espadachim', 120, 25, 20);
const jogo = new Jogo(mago, espadachim);

// Lógica de interação com o HTML aqui
document.getElementById('nome-mago').innerText = mago.getNome();
document.getElementById('vida-mago').innerText = mago.getVida().toString();
document.getElementById('nome-espadachim').innerText = espadachim.getNome();
document.getElementById('vida-espadachim').innerText = espadachim.getVida().toString();

document.getElementById('atacar-mago').addEventListener('click', () => {
  mago.atacar(espadachim);
  document.getElementById('vida-espadachim').innerText = espadachim.getVida().toString();
  if (espadachim.getVida() <= 0) {
    document.getElementById('mensagem').innerText = ${mago.getNome()} venceu!;
    document.getElementById('atacar-mago').disabled = true;
    document.getElementById('atacar-espadachim').disabled = true;
  }
});

document.getElementById('atacar-espadachim').addEventListener('click', () => {
  espadachim.atacar(mago);
  document.getElementById('vida-mago').innerText = mago.getVida().toString();
  if (mago.getVida() <= 0) {
    document.getElementById('mensagem').innerText = ${espadachim.getNome()} venceu!;
    document.getElementById('atacar-mago').disabled = true;
    document.getElementById('atacar-espadachim').disabled = true;
  }
});