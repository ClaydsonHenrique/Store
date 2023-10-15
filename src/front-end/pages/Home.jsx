import React from "react";
import Filteres from "../Componentes/Filteres";
import dados from '../../back-end/src/model/Dados/dados'
import './Home.css'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      produtos: [dados[1], dados[14], dados[33], dados[22], dados[10], dados[5], dados[9],]
    }
  }

  render() {
    const { produtos } = this.state
    return (
      <section className="section-home">
        <h1>Store Cacfuu</h1>
        <div className="flex">
          <div><Filteres /></div>
          {produtos.map(({ title, tipo, tamanho, price, imagens, genero, cores, }, index) => (
            <section key={index} >
              {index > 0 && (
                <>
                  <p className="tipo">{tipo}</p>
                  <h1 className="titulo">
                    {' '}
                    {title} {genero}
                    {' '}
                  </h1>
                  <img src={imagens[0]} alt="" className="imagem-home" />
                  <p className="cores">{cores}</p>
                  <p className="preco">{price}</p>
                  <h3 className="tamanho">tamanhos:</h3>
                  <div className="container-tamanho">
                    {tamanho.map((numero, index) => (
                      <p key={index} className="numero">{numero}</p>
                    ))}
                  </div>
                  <button>mais detalhes</button>
                  <button>comprar</button>
                </>
              )}
            </section>
          ))}
        </div>
      </section>
    )
  }
}
export default Home