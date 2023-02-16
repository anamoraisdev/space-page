import React from "react";

const Fotos = ({foto, favoritar}) => {
    return(
        <div className="h-[10%] w-auto">
            <img src={foto.src} className="w-full object-contain rounded-r-lg"/>
            <div className="bg-[#04244F] w-full rounded-b-lg text-gray-200 p-4">
                <p className="font-medium">{foto.nome}</p>
                <div className="flex justify-between">
                    <p className="text-sm">fonte/fotografo/satelite</p> 
                    <div className="flex gap-2">
                        <button onClick={() => favoritar(foto.nome)}><img src="./imagens/assets/favorito.png"/></button>
                        <img src="./imagens/assets/open.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fotos;