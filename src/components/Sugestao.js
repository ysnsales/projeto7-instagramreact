export default function Sugestao(props) {
    return (
        <div class="sugestao">
        <div class="usuario">
          <img src={props.imagemUsuario} alt={props.nomeUsuario}/>
          <div class="texto">
            <div class="nome">{props.nomeUsuario}</div>
            <div class="razao">{props.texto}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

    )
}