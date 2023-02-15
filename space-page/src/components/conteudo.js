import React from "react";

const Conteudo = () => {
    return (
        <section className="pl-[13rem] text-white">
            <h1 className="text-[#7B78E5] font-medium text-md text-3xl py-5">Navegue pela galeria</h1>

            <div className="flex justify-between items-center">
                <h4>busque por tags:</h4>

                <div className="flex gap-[6rem] pr-[4rem]">
                    <div className="flex gap-5">
                        <button className="bg-[#D9D9D94D] p-3 rounded-md">Estrelas</button>
                        <button className="bg-[#D9D9D94D] p-3 rounded-md ">Galáxias</button>
                        <button className="bg-[#D9D9D94D] p-3 rounded-md ">Planetas</button>
                        <button className="bg-[#D9D9D94D] p-3 rounded-md ">Lua</button>
                    </div>
                    <h1 className="text-[#7B78E5] font-medium text-2xl">Favoritos</h1>
                </div>
            </div>
        </section>
    )
}
export default Conteudo;