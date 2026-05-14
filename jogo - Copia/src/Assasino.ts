import { Personagem } from "./Personagem.ts";

export class Assasino extends Personagem {
  veneno: number = 0;
  constructor(
    nome: string,
    vida: number,
    dano: number,
    regen: number,
    veneno: number,
  ) {
    super(nome, vida, dano, regen, "data:image/webp;base64,UklGRrAOAABXRUJQVlA4IKQOAABwQACdASpzALQAPp1Cm0olo6IwKreL4gATiUAY5QorMZaPJfmYCtrb6mf8r09fTfzo+nhSsPUXYnW8u2v9x8QJ7uXF/Ic9ng10BP0h6yfe2/cPUK8uH2Qehz+vR53/Y8yooMWwLqZy42ZR8FlvN+9HXyuSqxY07YrNldoUrURfaz0Ztwl4s+UiF9uEzwPONFeKxnTBz4fh+LEiah4gohYWJRJrIWIGJzJWBTxrNpEb1Lk3GXj1ULDEhYLYqZB0V+5lcSeKHJ26KvND9Mt+u5IPcdbytHEITAI/t8cMHdmlV/rSZazBXWrR0wvk+hnyqc+U/LabK9Yknt4K0rUPZf7NV7sxviGRiiLGRPa3kMJy/Ve31lEIG0f9/l5zNbghMngrUuiWQUBu7dMGC69itJDndTdCEDz4FnOCogRCikYRp+ulLlE0TI4LWVnfL5PQmx6PnYKMQJN0Ys3x7SGzcw1HoKR8K9IrfhCljmDn9QwvWtW1yTTczSiiDas/Y2965c2c7X13IcksWNbnzJk4oAxE2FNzhUUDYw3f8sk0YwpDXk6J4FWWRnDA7X2CCmO81rHXcZg3h4d0hjCdoGQ+DYRn+FSFniZVdtr/Dora62K5X7OCupa3OPDKbIUWJKzOHOFUl8Y4WyCPW372hjiT3ypIAmsyQk/TxJtY2lcQ1H8ZMnl+akXk85OnBGb4YAD++RM3xv8UrQrYhBr7X/0eKLRfsdkEogz/iK1aXTzyB/jP882nCTXQtSxm3fsR4gRfTXtUqCblzZvq8OffzUCYF2gNVlOhFDEW/jDkF/m3VAP2ES7+urJ62fxNMsxoPzXpCNHRtk9oizpHpP8xzeancrM8/2Sw80KLns20Xp52iV99q0DK98E2Y+1tKuhBqfX6vz/fIZKi95StYSIdWuM8ydebtY4D4g3LqoCD7mgbjEKo+LQCK9sHALqjCnrIZJzkbSQeCM04hRCC+5VwIgbR2L4WCoNpiPOaPeDyzDydII2qSN+PFpEiBsaz60jsF36K4pYov753Hf7W/QxaJfZQoeLnUYGDiwU9pUJvioVSrQtOQX+Dc9GMbU1WAWP8nrCPAWfN9NLloHRniNjCJb+cCjUvZktK2nzf0A5BSfpaBfR+C2jKrVRpH82wOcIveVaQeYjlHvz07bvAqs4T6zoR5WrtsanW4fK+ToIutasA9NWkOP5WU/j8DelNGUBlCcDsy6HigQ0wipWfIHN4Qwvz8gUG4kjpZt8EhknSnED4p3KF9R+68iHKe4svwBIE3BGZTBhH4CXArITXAZgQv5dX7bcvW59FoKGOsQl9QRYpscGdTmvhYBnu9i73zbjxfwCdZ4U2DTEN/24RS60KaDvU1L+0bmP/fcChDGudzTshD9V3rbBJ9oaDnHAAHMdldfDSpgUTI3BvFjeuigZ5wTHpPcR5vL0pes1CD489zNRgaH1ktbSjxITCXg8TTRF09afsSAEaajkSK1HQ1xl3+wSZsvkyw99o8fl1ja2lSaXvEgvA0Ked/+WN4zPqUYhjTzEMRdxTtT74ZA8E2FeqQpPoh/BbYlLJi1FzyCqup6uqWE1Or9xQQmeFsGCH4DdVM4LXTHg88rCQ3TrzGTXyPV7pzsMrrt3sMqDiQDdkWGM+XTko2B8vZbz0z951wK46EVrWA1Fdci4L8bX80rTpf2odDYFvOyy/79dHWk2YhG6K9yh6Nt91BkqvuiEW8PyoHJ5WHfgV8ViqFxK2y1aRal6p+7U4+8C9mHEmglKH9SqxAEJp83ljLIbOlcJWav0dbbgpt5PEGgZCoWNbUY7IrN3HSpHv6QuOPv7C9PFDkWbxj1ZKaWjTT6VVPykbw2Io2jhf1e6v7urxr4tsmgAEgwlwGPZs+sHZePxbAhnGtGL19Yhf75m92wERiOCxoa+kAOQvnA3y20cE9OASkXOa0DCdCcPFsLJnd94IpqG+GO/FldPndOZ1GKZ4poGZlsGvdirvrlcsjUC6K+EXlAYTsx9pKI8v7T06bE7Rgdww9X4i4YOGciZrUzdapkt5zDmvZGsWMrc8jWq+M9JnP8GUxDNXU6s+z50wzMJg2SoHH9EKBdABI28rKP5GGUX7izdB/pkCBaaeroS1uCuFpFvJaeiA+YZ6eEqIGXbWhrJEelJqdpKw10FG9hufO0SJjjoXKg3K0bokffhhfmN3klJ+C+FXhbkQ3f0Hd3YXgtYWkpmb4defTJr8q2oxDqccNtyIgoZq6jc22g92cINI6uY+WCfonkTnAA9bsMKreerWan0+m8MpwPaZ/k/6u9Ij+cZUplKswZY9lPJHbdmvodZnDRsXS3QACQCXhiSavpzvlM3wrKa2TCo60e/sXaxiDOsnL/z7FsepGa7bjexWv76Uk4kQuUeKmXXbClpgW3CRhckafYrlgtbhP3OR4ukj3dX983U5PggJ8gDXT3AK5tHSsmAjmLIrrM/bS00ubw3WpIVUuSKSWQl4IIwjNL/r+pxJEl7qvtX+Fnzkj1bW1bz/ripTG121TuG6NjLcsCW0VAzRHWWZckBNEM9cHJvNSI9mkCOytb/H+xpa62iUtC1T0xHqeqfPQPW3KD2LApwL7FLDeFs/Qvex2y76+TenBZXf1XwffT91DsyCsyuAQsK74JmB1lmNBahYF62RWts/c+DjEaIUo2E11B6UIQ2vnqwZlBZCEbDesofbg1gynaOoXDQnYiLW5wdoQBo+Zo/loJOlcJOCagfbkI19ICjap6+xQauWtgXZjacLmuFJcNRUyIGLsP/+UnjYGMAb59Re+QXDzEbcCzOfM19v1kunx98TJkaltIjGn74f3t7QdddmHSVtDAzFLeXuK4T8lBWpuxeulSzIPLd1nbw0FUXQVm7/qN8zIHfJoyTD8CYK1Yv3VDiiLzuQw7OW5Y/w8S17CJcxH+2SP54DYMTSFLey2I+HM7wIuLTxH+cGwHIpwZ77SUXj1gd9195V4NzEhHR0NPhxPc/bQGljXCDHoi4ks96dkCnPHc2GLwgOYbh9Say0c+0XeHOnNYgVeF0YH61fgvc9DCxJP1zCoxfYouYnVueoLyOF7o481qkUUGgHMxUjdpb1ZTRXOzOv0yojOZ8CoLDP/IsYdtRX/jbWjIIrvdduQEBs+tttQOXieHISK1BaMzbB8J9SuE451aBSA8aC4p2Nq187piYruB7yETrYQdBd7F7ducRQytr5wdHlYgoabhEw5puye9/7YQhW0wdKU0UD63/Nvkk9zLITMrxuzcI/diLiMbxeOaBXWZdA4TyL8kLqMLCLwIKKeLRXJkamttlEq0KBrGJd0/45SAAE53sSCTHG2taT6gGz5/O2iQV1eKv6KUtgPCWJ1bPMVbhJo/ALzWbX0raUlnsNNheFmHCJrydond6CcMAtIQBFO4moZze9mq4XDetuyi1X+bbj+waYFxyIYY7bOHDW1Wr3dwF3NZVQXeo7uBzxEF4RRzBypWY239ib6mB6LtqLEINZuThT5sOHZrsLIM4R9ax8X6KoSb+HPfS5yjgF2Uen1E4M/Mhmd9f/8XrZ8rdBgCNxp5B+SRLLqUGzsdcemvKSsW6YuNBOU+85vZu8oPJ+EtGlDYWcXMGSVOiNYJE0phQCLC+hAtdCk2+NMITqzV3VuzIcb+6W1M5BsMbV51LFgn6WbdhqPrraQY2GFPT/tEfN1l+j7eMg5mkLb04WCg9DG3i238loHTcxHrv2WNY1j7nl0VH8GmLztpO5AAONJByFdCOZq5Wp6ycVUi2YqkMZ1SOrVVN0cvk1YBNOLwt/qCZUskMfxPXjHwTnraxNsdyp9cHL2ytCmZroDsXj5vi2qeUOsHeddH25959uriDpxGKIiUXrN6JTBpozUemRed1YCH0BuaBk2BhBXLF8mHEzN3M/aYCJOnJoNVNml7Age5ifUF2VToeLnA7lLFnB+yO6odim9tTNWaj7EhpgQVwjvR1kRmB9/+TjVjwYiyEVAkp9KabIeAMcLlMunAGLrUvaJFdhVL90O7MBgM1BSiHHegpV4cXQeWlHFdCtjwx+enE1tA8ldFhY8JUtM0+q/bmlcQjGGdhVagBA6V6uSL3VcyPd+eyQ446z67k6B8eM2mY9UFQvEjrd5V4m5CTB2QuvGbO3edntmhq0z1DtPk+HQbJBAgpG6X8l4SWkMG6cxFtKF0pmi++wV+6TVuOyIBAd7JQrydAhITmQHIyLCyoDmblI4AaQr5SRkwJZQZYpz/FU5trNTkHwpLplruvByfMhWOaRbhDFsg2fcSfXpskpCMX+3ntpGT+6bjK9b/FZ2zvAGo29TFg1QHDqJYQR3mw5yhIhCn7TP1iy3wF//bWf27LP842Zl8/X/wU1b7S2AQLm4LYqCUSkntmPialqrYjteSXGJbKekjuOiOMz4uxgP7S4+RuKXRMPbCDgMe2lXkwDQAprKJdZkrJ02lr9Rw1WYjuefak+P8UKbAU32rmmMq+iOFNJWIKPCQInQ4rLH/zEERpax5m141P7lOrJ4ng0+ek0Wue0AuYa+znp8AhWB7Xz4XTPaN5mPjhgYRNzVRX/6lQpRO1ov84txSpK9dzMaqlZpx2Mj1paOI5f+W5WyRRwBgcn1BmMAEhABlg92NcNjA12wuKSfyuJ1kjhCrM0e+286925Mv52Tjn+UVohATRrT+ezkdRnsZcGTw3DrtLGgtgHQO0QV2NaxUdxTaMt6CPuiN+L+f4Xuv6Dih46YsJqyfcaiZmWmKARqmW3RjUVm9MKlX4+ANY1n6mA7IwfE4FjGefwcQJdi9qan/7U3AjwqUIOI6kDij9yg0iFxoI6WtH4/ysd587/9TpP9ltinGGBPUINj/Y+cApTL9cG22yuArcKb7wnHKfW6lNdM/1N6aDB/nNv1cUpbXs2+nkFkYReHJG13Pi/5ToErarmkuBkRRv3I1MRlt4G/kZfjzhl+Un4gfHmus90fyMQfH1J8avqW6gUwFsrepiLNFBAf/erS9+l47ffAAAA">
);
    this.veneno = veneno;
  }
  /*public atacar(persona: Personagem): void {
        this.dano = this.verificarAtaque(this.gerarAtaque());
        console.log("O " + this.nome + " atacou o "+ persona.nome + " e causou "+(this.dano + this.veneno) + " de dano\nVida ");
        persona.sofrerAtaque(this.dano + this.veneno);
        console.log(persona.nome +" = " + persona.getVida());
    }*/

  public atacar(persona: Personagem): void {
    let ataque_base = this.dano;
    let dado = this.gerarAtaque();
    let msg: string = "feitiço base";

    switch (dado) {
      case 1:
        ataque_base += 50;
        msg = "Machado";
        break;

      case 2:
        ataque_base += 40;
        msg = "Maça";
        break;

      case 3:
        ataque_base += 50;
        msg = "Bazuca";
        break;

      default:
        break;
    }

    console.log(
      "O " +
        this.nome +
        " atacou o " +
        persona.nome +
        " com " +
        msg +
        " e causou " +
        (ataque_base + this.veneno) +
        " de dano\n ",
    );
    persona.sofrerAtaque(ataque_base + this.veneno);
    console.log("Vida " + persona.nome + " = " + persona.getVida());
  }

  public defesa(dano: number): number {
    return (dano * 90) / 100;
  }

  override sofrerAtaque(dano: number): void {
    this.vida = this.vida - this.defesa(dano);
  }
}
