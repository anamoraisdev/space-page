import React from "react";

const Fotos = ({fotos}) => {
    return(
        <section className="py-5 flex flex-col">
            <img src={fotos.src} className="w-[17rem] rounded-r-lg"/>
            <div className="bg-#04244F] bg-[#04244F] w-[17rem] p-4 rounded-b-lg gap-2 text-gray-200">
                <p className="font-medium">{fotos.nome}</p>
                <div className="flex justify-between">
                    <p className="text-sm">fonte/fotografo/satelite</p> 
                    <div className="flex gap-2">
                        <button><img src="./imagens/assets/favorito.png"/></button>
                        <img src="./imagens/assets/open.png"/>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default Fotos;