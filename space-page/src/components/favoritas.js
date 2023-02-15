import React from "react";

const Favoritas = (fotos) => {
    return(
        <section className="">
            <img src={fotos.src} className="w-[10rem]"/>
        </section>
    )

}
export default Favoritas;