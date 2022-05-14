import React, { useState, useEffect } from "react"
import api from "../../services/api"
import "./style.css"


function ListaDeContatos() {

    const [contatos, setContato] = useState()

    useEffect(() => {
        api
            .get("/contatos")
            .then((response) => setContato(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <div className="container">
            <div className="box">

                <h3 className="titulo">Lista de contatos</h3>

                <form action="http://localhost:4000/contatos" method="post" className="form">
                    {/* <!-- Nome --> */}
                    <div className="inputBox">
                        <input type="text" name="nome" id="nome" placeholder="Nome" className="inputStyle" />
                    </div>
                    {/* <!-- Numero --> */}
                    <div className="inputBox">
                        <input type="text" name="numero" id="numero" placeholder="Número" className="inputStyle" />
                    </div>
                    <div className="actions">
                        <button type="submit">Salvar</button>
                    </div>
                </form>

                <form action="" className="form" id="searchBox">
                    <input type="search" placeholder="Procure um contato" id="search" />
                    <button type="submit">Procurar</button>
                </form>

                <div className="contatos">

                    {contatos?.map(contato => (
                        <div className="contato" key={contato.id}>
                        <h4>{contato.nome}</h4>
                        <h4>{contato.numero}</h4>
                        <a href={`http://localhost:4000/contatos/delete/${contato.id}`}> <button className="delete-button">X</button></a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListaDeContatos