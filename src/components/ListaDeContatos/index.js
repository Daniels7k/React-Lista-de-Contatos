import React from "react"


function ListaDeContatos() {
    return (
        <div className="container">
            <div className="box">

                <h3 className="titulo">Lista de contatos</h3>

                <form action="" className="form">
                    {/* <!-- Nome --> */}
                    <div className="inputBox">
                        <input type="text" name="nome" id="nome" placeholder="Nome" className="inputStyle"/>
                    </div>
                    {/* <!-- Numero --> */}
                    <div class="inputBox">
                        <input type="text" name="numero" id="numero" placeholder="Número" className="inputStyle"/>
                    </div>
                    <div className="actions">
                        <button type="submit">Salvar</button>
                    </div>
                </form>

                <form action="" className="form" id="searchBox">
                    <input type="search" placeholder="Procure um contato" id="search"/>
                        <button type="submit">Procurar</button>
                </form>

                <div className="contatos">
                    <div className="contato">
                        <h4>Cleiton Daniel</h4>
                        <h4>-</h4>
                        <h4>99 9999-9999</h4>
                    </div>
                    <div className="contato"></div>
                    <div className="contato"></div>
                    <div className="contato"></div>
                    <div className="contato"></div>
                    <div className="contato"></div>
                </div>

            </div>
        </div>
    )
}

export default ListaDeContatos