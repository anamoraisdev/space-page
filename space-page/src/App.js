import Navbar from "./components/navbar";
import "./app.css"
import Lista from "./components/lista";
import Banner from "./components/banner";
import Conteudo from "./components/conteudo";
import Fotos from "./components/fotos";
import Favoritas from "./components/favoritas";

function App() {
  const fotos = [
    {
      nome:"foto1",
      categoria:"Galaxias",
      src:"./imagens/assets/imagens/galeria/foto-1.png",
      favorito:false
    },
    {
      nome:"foto2",
      categoria:"Galaxias",
      src:"./imagens/assets/imagens/galeria/foto-2.png",
      favorito:false
    },
    {
      nome:"foto3",
      categoria:"Lua",
      src:"./imagens/assets/imagens/galeria/foto-3.png",
      favorito:false
    },
    {
      nome:"foto4",
      categoria:"Planeta",
      src:"./imagens/assets/imagens/galeria/foto-4.png",
      favorito:false
    },
    {
      nome:"foto5",
      categoria:"Galaxias",
      src:"./imagens/assets/imagens/galeria/foto-5.png",
      favorito:false
    },
    {
      nome:"foto6",
      categoria:"Estrelas",
      src:"./imagens/assets/imagens/galeria/foto-6.png",
      favorito:false
    },
    {
      nome:"foto7",
      categoria:"Planeta",
      src:"./imagens/assets/imagens/galeria/foto-7.png",
      favorito:false
    },
    {
      nome:"foto8",
      categoria:"Galaxias",
      src:"./imagens/assets/imagens/galeria/foto-8.png",
      favorito:false
    },
    {
      nome:"foto9",
      categoria:"Estrelas",
      src:"./imagens/assets/imagens/galeria/foto-9.png",
      favorito:false
    },
    {
      nome:"foto10",
      categoria:"Estrelas",
      src:"./imagens/assets/imagens/galeria/foto-10.png",
      favorito:false
    },
    {
      nome:"favorita-1",
      categoria:"Estrelas",
      src:"./imagens/assets/imagens/populares/foto-1.png",
      favorito:true
    },
    {
      nome:"favorita-2",
      categoria:"Estrelas",
      src:"./imagens/assets/imagens/populares/foto-2.png",
      favorito:true
    },
    {
      nome:"favorita-3",
      categoria:"Estrelas",
      src:"./imagens/assets/imagens/populares/foto-3.png",
      favorito:true
    },
    {
      nome:"favorita-4",
      categoria:"Estrelas",
      src:"./imagens/assets/imagens/populares/foto-4.png",
      favorito:true
    },
    {
      nome:"favorita-5",
      categoria:"Estrelas",
      src:"./imagens/assets/imagens/populares/foto-5.png",
      favorito:true
    },
  ]

  return (
    <div className="App back ">
      <Navbar/>
      <div className="flex">
        <Lista/>
        <Banner/>
      </div>
      <Conteudo/>
      <div className="flex pl-[13rem] ">
        <div className="flex flex-wrap w-[80%]">
          {fotos.map((foto) => foto.favorito === false && <Fotos
            fotos={foto}
            nome={foto.nome}
            src={foto.src}
            key={foto.nome}
          />)}
        </div>
        <div className="flex flex-col m-5 gap-4">
          {fotos.map((foto) => foto.favorito === true && <Favoritas 
            fotos={foto}
            nome={foto.nome}
            src={foto.src}
            key={foto.nome}
          />)}
          <button className="border text-white rounded-lg p-2">Ver mais</button>
        </div>
      </div>
    </div>
  );
}

export default App;
