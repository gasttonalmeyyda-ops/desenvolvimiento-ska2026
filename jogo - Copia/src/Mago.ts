import { Personagem } from "./Personagem.ts";

export class Mago extends Personagem{

    constructor(nome:string,vida:number,dano:number,regen:number){
        super(nome,vida,dano,regen, "data:image/webp;base64,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"
        );
    }
   /* public atacar(persona: Personagem): void {
        this.dano = this.verificarAtaque(this.gerarAtaque());
       console.log("O " + this.nome + " atacou o "+persona.nome + " e causou "+this.dano+ " de dano\nVida ");
        persona.sofrerAtaque(this.dano);
        console.log(persona.nome +" = " + persona.getVida());
    }*/

    public atacar(persona: Personagem){
        let ataque_base = this.dano;
        let dado = this.gerarAtaque();
        let msg:string = "feitiço base";

        switch (dado) {
            case 1:
                ataque_base += 20;
                msg = "bola de fogo";
                break;

             case 2:
                ataque_base += 30;
                msg = "ralampago";
                break;

             case 3:
                  ataque_base += 50;
                msg = "Decaimento";
             break;

            default:
                break;
        }

         console.log("O " + this.nome + " atacou o "+persona.nome +" com o feitiço: "+msg + " e causou "+ataque_base +" de dano");
        persona.sofrerAtaque(ataque_base);
         console.log("Vida" + persona.nome +" = " + persona.getVida());

         
    }
} 