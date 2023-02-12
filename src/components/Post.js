import { useState } from "react"

export default function Post(props) {

  const [bookmark, setbookmark] = useState("bookmark-outline");
  const [heart, setheart] = useState("heart-outline");
  const [cor, setcor] = useState("#000000")
  const [likes, setlikes] = useState(props.numeroCurtidas)

  function salvar() {
    if (bookmark === "bookmark-outline"){
      setbookmark("bookmark")
      
    }else {
      setbookmark("bookmark-outline")
    }
  }

  function curtir() {
    if (heart === "heart-outline"){
      setheart("heart")
      setcor("#CF0E0E")
      setlikes(Number(likes)+1)
      
    }else {
      setheart("heart-outline")
      setcor("#000000")
      setlikes(Number(likes)-1)
    }

  }

  function curtirPelaFoto() {
    if (heart === "heart-outline"){
      setheart("heart")
      setcor("#CF0E0E")
      setlikes(Number(likes)+1)
      
    }

  }
    return(
        <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.imagemUsuario} alt={props.nomeUsuario}/>
                meowed
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img onDoubleClick={curtirPelaFoto} src={props.imagemConteudo} alt={props.textoConteudo}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name={heart} style={{color:cor}} onClick={curtir}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={bookmark} onClick={salvar}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imagemCurtidas} alt={props.textoCurtidas}/>
                <div class="texto">
                  Curtido por <strong>{props.textoCurtidas}</strong> e <strong>outras {likes} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}