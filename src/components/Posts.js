import Post from "./Post"
export default function Posts() {

let listaPosts = [{imagemUsuario:"assets/img/meowed.svg", nomeUsuario:"meowed", 
imagemConteudo:"assets/img/gato-telefone.svg", textoConteudo:"gato-telefone",
imagemCurtidas:"assets/img/respondeai.svg", textoCurtidas:"respondeai", numeroCurtidas:101.523 },

{imagemUsuario:"assets/img/barked.svg", nomeUsuario:"barked", 
imagemConteudo:"assets/img/dog.svg", textoConteudo:"dog",
imagemCurtidas:"assets/img/adorable_animals.svg", textoCurtidas:"adorable_animals", numeroCurtidas:99.159 },

{imagemUsuario:"assets/img/meowed.svg", nomeUsuario:"meowed", 
imagemConteudo:"assets/img/gato.jpg", textoConteudo:"gato-cobertor",
imagemCurtidas:"assets/img/9gag.svg", textoCurtidas:"9gag", numeroCurtidas:75.359 }

]

    return (
        <div class="posts">

      {listaPosts.map((p) => <Post imagemUsuario={p.imagemUsuario} nomeUsuario={p.nomeUsuario} 
      imagemConteudo={p.imagemConteudo} imagemCurtidas={p.imagemCurtidas} textoCurtidas={p.textoCurtidas} numeroCurtidas={p.numeroCurtidas} />)}

        </div>
    )
}