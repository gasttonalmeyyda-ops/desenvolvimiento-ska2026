import { Esparto } from "./Esparto.ts";
import { Mago } from "./Mago.ts";
import { Personagem } from "./Personagem.ts";

export class Jogo {
  public async inicia(player1: Personagem, player2: Personagem) {
    let turno = 1;

    this.atualizarinterface(player1, player2);

    while (player1.isVivo() && player2.isVivo()) {
      player1.log("\nTurno : " + turno);

      player1.atacar(player2);
      this.atualizarinterface(player1, player2);
      await this.esperaTempo();

      if (!player2.isVivo()) {
        break;
      }
      player2.atacar(player1);
      this.atualizarinterface(player1, player2);
      await this.esperaTempo();
      turno++;
    }

    if (player1.isVivo()) {
      player1.log(player1.nome + " Ganhou a luta");
    }

    if (player2.isVivo()) {
      player1.log(player2.nome + " Ganhou a luta");
    }
  }

  public atualizarinterface(jogadorUm: Personagem, jogadorDois: Personagem) {
    document.getElementById("jogadorUmVida")!.textContent =
      "HP: " + jogadorUm.getVida();
    document.getElementById("jogadorDoisVida")!.textContent =
      "HP: " + jogadorDois.getVida();
  }

  pegaComponenteHtml() {}
  public esperaTempo() {
    const milesegundos = 800;
    return new Promise((x) => setTimeout(x, milesegundos));
  }
}

function construirJogo() {
  let mago: Mago = new Mago("Mago", 400, 100, 5);
  let guerreiro: Esparto = new Esparto("Espartos", 500, 150, 5, 5);

  let jogo: Jogo = new Jogo();
  jogo.inicia(mago, guerreiro);
}

document.getElementById("btnIniciar")!.addEventListener("click", construirJogo);
