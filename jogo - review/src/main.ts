import { Esparto } from "./Esparto.ts";
import { Jogo } from "./Jogo.ts";
import { Mago } from "./Mago.ts";

let mago: Mago = new Mago("Mago", 100, 20, 30);
let assasino: Esparto = new Esparto("Esparto",100,10,15,15);

let jogo:Jogo = new Jogo();
jogo.inicia(mago,esparto);