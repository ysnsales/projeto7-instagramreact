import Sugestao from "./Sugestao"

export default function Sugestoes() {

let listSugestoes = [{imagemUsuario:"assets/img/bad.vibes.memes.svg" , nomeUsuario:"bad.vibes.memes", texto:"Segue você"},
    {imagemUsuario:"assets/img/chibirdart.svg" , nomeUsuario:"chibirdart", texto:"Segue você"},
    {imagemUsuario:"assets/img/razoesparaacreditar.svg" , nomeUsuario:"razoesparaacreditar", texto:"Novo no Instagram"},
    {imagemUsuario:"assets/img/adorable_animals.svg" , nomeUsuario:"adorable_animals", texto:"Segue você"},
    {imagemUsuario:"assets/img/smallcutecats.svg" , nomeUsuario:"smallcutecats", texto:"Segue você"}]
    
    return (
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {listSugestoes.map((s) => <Sugestao imagemUsuario={s.imagemUsuario} nomeUsuario={s.nomeUsuario} texto={s.texto} />)}

        </div>
    )
}