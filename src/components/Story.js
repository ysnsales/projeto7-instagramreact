export default function Story(props) {
    return(
        <div className="story">
            <div className="imagem">
              <img src={props.imagemUsuario} alt={props.nomeUsuario}/>
            </div>
            <div className="usuario">
              {props.nomeUsuario}
            </div>
        </div>    
    )
}