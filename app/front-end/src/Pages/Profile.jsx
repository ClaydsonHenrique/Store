import React from "react";

function Profile () {
    const [profile, setProfile] = React.useState([])

    return (
        <main>
            {
                profile.length > 0 && 
                profile.map((data) => (
                    <section key={data.id}>
                        <h2>Dados Pessoais</h2>
                        <div>
                            <p>{data.name}</p>
                            <p>{data.email}</p>
                        </div>

                        <h2>Endereço</h2>
                        <div>
                            <p>{data.endereco}</p>
                            <p>{data.cidade}</p>
                            <p>{data.cep}</p>
                        </div>

                        <h2>Metodo de pagamentos</h2>
                        <div>
                            <div>
                                <h2>Cartoes</h2>
                                {
                                    data.cartoes.map((cartao) => (
                                        <div key={cartao.id}>
                                            <h1>{cartao.nome}</h1>
                                            <p>{cartao.numero}</p>
                                            <p>{cartao.validade}</p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                    </section>
                ))
            }
        </main>
    ) 
}