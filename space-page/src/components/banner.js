import React from "react";

const Banner = () => {
    return (
        <section>
            <img src="./imagens/assets/banner.png" alt="Banner" className="pr-4"/>
            <div className="relative text-white w-[20rem]">
                <p className="absolute top-[-14rem] left-10 text-[2rem]">A galeria mais completa de fotos do espaço!</p>
            </div>
        </section>
    )
}
export default Banner;