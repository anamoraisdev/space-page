import React from "react";

const Conteudo = ({categorias, filtrarTags}) => {
    console.log(categorias)
    return (
        <section className="pl-[13rem] text-white">
            <h1 className="text-[#7B78E5] font-medium text-md text-3xl py-5">Navegue pela galeria</h1>

            <div className="flex justify-between items-center">
                <h4>busque por tags:</h4>

                <div className="flex gap-[6rem] pr-[4rem]">
                    <div className="flex gap-5">
                        {categorias && categorias.map((categoria) => (
                            <button onClick={() => filtrarTags(categoria)} className="bg-[#D9D9D94D] p-3 rounded-md">{categoria}</button>
                        ))}
                    </div>
                    <h1 className="text-[#7B78E5] font-medium text-2xl">Favoritos</h1>
                </div>
            </div>
        </section>
    )
}
export default Conteudo;