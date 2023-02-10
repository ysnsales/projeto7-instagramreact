import Story from "./Story"

export default function Stories() {

  let listaStories = [{imagemUsuario:"assets/img/9gag.svg", nomeUsuario:"9gag"},
  {imagemUsuario:"assets/img/meowed.svg", nomeUsuario:"meowed"},
  {imagemUsuario:"assets/img/barked.svg", nomeUsuario:"barked"},
  {imagemUsuario:"assets/img/nathanwpylestrangeplanet.svg", nomeUsuario:"nathanwpylestrangeplanet"},
  {imagemUsuario:"assets/img/wawawicomics.svg", nomeUsuario:"wawawicomics"},
  {imagemUsuario:"assets/img/respondeai.svg", nomeUsuario:"respondeai"},
  {imagemUsuario:"assets/img/filomoderna.svg", nomeUsuario:"filomoderna"},
  {imagemUsuario:"assets/img/memeriagourmet.svg", nomeUsuario:"memeriagourmet"},
]
    return (
        <div className="stories">
          {listaStories.map((s) => <Story imagemUsuario={s.imagemUsuario} nomeUsuario={s.nomeUsuario}/>)}


          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
    </div>
    )
}