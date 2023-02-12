import { useState } from "react"

export default function Usuario() {
    let dadosUsuario = [{imagem:"assets/img/catanacomics.svg", nome: "catanacomics"}] 

    return (
      <>
          {dadosUsuario.map((d) =>
              <PersonalizarUsuario imagem={d.imagem} nome={d.nome} />
          )}
      </> 
  )
    
}

function PersonalizarUsuario(props) {

  const [nomeDoUsuario, setNomeDoUsuario] = useState(props.nome)
  const [foto, setFoto] = useState(props.imagem)

  function mudarNome() {
    let novoNome = prompt("Qual é o seu nome?")
    setNomeDoUsuario((`${novoNome ? novoNome : props.nome}`))
  }

  function mudarFoto() {
    let novaFoto = prompt("Insira o link da sua nova foto")
    setFoto((`${novaFoto ? novaFoto : props.imagem}`))

  }
  return (
    <div class="usuario">
      <img onClick={mudarFoto} src={foto} alt="imagem de perfil"/>
      <div class="texto">
        <span>
          <strong>{nomeDoUsuario}</strong>
          <ion-icon onClick={mudarNome} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
)
} 