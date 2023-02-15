import React from "react";

const Lista = () => {
    return(
        <section className="mx-5 my-4">
            <ul className="text-white w-[10rem] flex flex-col gap-5">
                <li className="flex gap-4"><img src="./imagens/assets/icones/home-ativo.png"/> Inicio</li>
                <li className="flex gap-4"><img src="./imagens/assets/icones/mais-vistas-inativo.png"/> Mais vistas</li>
                <li className="flex gap-4"><img src="./imagens/assets/icones/mais-curtidas-inativo.png"/> Mais favoritas</li>
                <li className="flex gap-4"><img src="./imagens/assets/icones/novas-inativo.png"/> Novas</li>
                <li className="flex gap-4"><img src="./imagens/assets/icones/surpreenda-me-inativo.png"/> Surpreenda-me</li>
            </ul>
        </section>
       
    )
}
export default Lista;