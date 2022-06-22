import React, { useState } from "react";
import ButtonActive from "../../components/ButtonActive";
import Pergunt from "../../components/Pergunt";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinTongueSquint,
  faFaceGrinBeamSweat,
  faFaceGrinWink,
  faFaceSadCry,
  faGrinStars,
  faSmileBeam,
  faFaceGrinTongueWink,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function Jogo() {
  let pontos_atuais = 0;
  let pontos_totais = 1000;

  function Acionar(f, b) {
    const verify = validarResposta(f, b);
    if (verify) {
      Swal.fire(
        "Parabéns!",
        `Você acertou sua pontuação atual é: ${pontos_atuais}`,
        "success"
      );
    } else {
      Swal.fire(
        "Você errou!",
        `Sinto muito, sua pontuação atual: ${pontos_atuais}`,
        "error"
      );
    }
    setTimeout(() => {
      proxFase(f);
    }, 3000);
  }

  function validarResposta(f, b) {
    switch (f) {
      case 1: {
        if (b === 2) {
          pontos_atuais += 250;
          return true;
        } else {
          pontos_atuais += -250;
          return false;
        }
      }
      case 2: {
        if (b === 3) {
          pontos_atuais += 250;
          return true;
        } else {
          pontos_atuais += -250;
          return false;
        }
      }
      case 3: {
        if (b === 2) {
          pontos_atuais += 250;
          return true;
        } else {
          pontos_atuais += -250;
          return false;
        }
      }
      case 4: {
        if (b === 3) {
          pontos_atuais += 250;
          return true;
        } else {
          pontos_atuais += -250;
          return false;
        }
      }
    }
  }

  function proxFase(f) {
    const fase1 = document.getElementById("fase1");
    const fase2 = document.getElementById("fase2");
    const fase3 = document.getElementById("fase3");
    const fase4 = document.getElementById("fase4");
    const resultado = document.getElementById("resultado");

    switch (f) {
      case 1: {
        fase1.style.display = "none";
        fase2.style.display = "block";
        break;
      }
      case 2: {
        fase2.style.display = "none";
        fase3.style.display = "block";
        break;
      }
      case 3: {
        fase3.style.display = "none";
        fase4.style.display = "block";
        break;
      }
      case 4: {
        fase4.style.display = "none";
        resultado.style.display = "block";
        finalizado();
        break;
      }
    }
  }

  function finalizado() {
    const porcentagem_pontos = (pontos_atuais / pontos_totais) * 100;
    const porcentagem = document.getElementById("porcentagem");
    const pontos = document.getElementById("pontuacao");

    pontos.innerHTML = pontos_atuais;
    porcentagem.innerHTML = porcentagem_pontos + "%";
  }

  return (
    <div id="container_jogo">
      <div id="fase1">
        <Pergunt perg="Você recebe uma task em uma linguagem que não está familiarizado, o que você faria nessa situação?" />
        <div className="duo">
          <ButtonActive
            click={() => Acionar(1, 1)}
            class="red"
            perg="Aceitar a tarefa e fazer de qualquer jeito."
            icon={<FontAwesomeIcon icon={faFaceGrinTongueSquint} />}
          />
          <ButtonActive
            click={() => Acionar(1, 2)}
            class="blue"
            perg="Aceitar a tarefa e estar disposto a novos aprendizados."
            icon={<FontAwesomeIcon icon={faFaceGrinBeamSweat} />}
          />
        </div>
        <div className="duo">
          <ButtonActive
            click={() => Acionar(1, 3)}
            class="yellow"
            perg="Sentar e Chorar."
            icon={<FontAwesomeIcon icon={faFaceSadCry} />}
          />
          <ButtonActive
            click={() => Acionar(1, 4)}
            class="green"
            perg="Encontrar motivos para não fazer."
            icon={<FontAwesomeIcon icon={faFaceGrinWink} />}
          />
        </div>
      </div>
      <div id="fase2">
        <Pergunt
          perg="Você está discutindo sobre a implementação de uma nova função junto com outro estagiário e suas opiniões divergem,
          o que fazer?"
        />
        <div className="duo">
          <ButtonActive
            click={() => Acionar(2, 1)}
            class="red"
            perg="Aceitar de imediato e trazer o assunto à tona em outro momento."
            icon={<FontAwesomeIcon icon={faFaceGrinTongueWink} />}
          />
          <ButtonActive
            click={() => Acionar(2, 2)}
            class="blue"
            perg="Impor a superioridade da sua ideia."
            icon={<FontAwesomeIcon icon={faGrinStars} />}
          />
        </div>
        <div className="duo">
          <ButtonActive
            click={() => Acionar(2, 3)}
            class="yellow"
            perg="Analisar a melhor situação que se encaixe no escopo do projeto."
            icon={<FontAwesomeIcon icon={faSmileBeam} />}
          />
          <ButtonActive
            click={() => Acionar(2, 4)}
            class="green"
            perg="Envolver o restante do squad no conflito."
            icon={<FontAwesomeIcon icon={faFaceGrinWink} />}
          />
        </div>
      </div>
      <div id="fase3">
        <Pergunt perg="Você está conversando com seu gestor e ele fala de forma rude com você, como reagir?" />
        <div className="duo">
          <ButtonActive
            click={() => Acionar(3, 1)}
            class="red"
            perg="Responder o gestor no mesmo tom."
            icon={<FontAwesomeIcon icon={faFaceGrinTongueWink} />}
          />
          <ButtonActive
            click={() => Acionar(3, 2)}
            class="blue"
            perg="Tentar entender o motivo e procurar o momento ideal pra questionar."
            icon={<FontAwesomeIcon icon={faGrinStars} />}
          />
        </div>
        <div className="duo">
          <ButtonActive
            click={() => Acionar(3, 3)}
            class="yellow"
            perg="Ignorar e seguir sua vida."
            icon={<FontAwesomeIcon icon={faSmileBeam} />}
          />
          <ButtonActive
            click={() => Acionar(3, 4)}
            class="green"
            perg="Comentar com outras pessoas antes de resolver o conflito."
            icon={<FontAwesomeIcon icon={faFaceGrinWink} />}
          />
        </div>
      </div>
      <div id="fase4">
        <Pergunt perg="Um companheiro de squad foi promovido devido a um trabalho que você ajudou a fazer, o que você faria?" />
        <div className="duo">
          <ButtonActive
            click={() => Acionar(4, 1)}
            class="red"
            perg="Discutir com o gestor o motivo da sua não promoção."
            icon={<FontAwesomeIcon icon={faFaceGrinTongueWink} />}
          />
          <ButtonActive
            click={() => Acionar(4, 2)}
            class="blue"
            perg="Sabotar o projeto."
            icon={<FontAwesomeIcon icon={faGrinStars} />}
          />
        </div>
        <div className="duo">
          <ButtonActive
            click={() => Acionar(4, 3)}
            class="yellow"
            perg="Parabenizar o companheiro e celebrar sua promoção."
            icon={<FontAwesomeIcon icon={faSmileBeam} />}
          />
          <ButtonActive
            click={() => Acionar(4, 4)}
            class="green"
            perg="Criticar negativamente o companheiro que foi promovido."
            icon={<FontAwesomeIcon icon={faFaceGrinWink} />}
          />
        </div>
      </div>
      <div id="resultado">
        <label>
          <u>Jogo Finalizado 🎉</u>
        </label>
        <br />
        <label>
          Pontuação total: <span id="pontuacao"></span> / 1000
        </label>
        <br />
        <label>
          Porcentagem de acertos: <span id="porcentagem"></span>
        </label>
      </div>
    </div>
  );
}
