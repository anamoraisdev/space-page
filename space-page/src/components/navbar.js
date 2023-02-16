import React, { useState } from "react";
import Lista from "./lista";


const Navbar = () => {
    const [valorInput, setValorInput]= useState("");
    console.log(valorInput)

    const pegarValor = (event) =>{
        setValorInput(event.target.value)
    }
    
    return(
        <section className="py-10 px-4">
            <header className="flex justify-between">
                <img src="../imagens/assets/logo.png" alt="logo" className="w-[160px]"></img> 
                <input value={valorInput} onChange={pegarValor} type="text" placeholder="digite sua busca" className="bg-transparent border rounded-lg w-[30rem] h-10"></input>
            </header>
        </section>
    )
}
export default Navbar;