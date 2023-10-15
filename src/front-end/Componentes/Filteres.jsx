import React from "react";

class Filteres extends React.Component {

  render() {
    return (
      <section>
        <div>
<label htmlFor="search">
<input type="text" name="search" id="search" />
<button>pesquisar</button>
</label>
          <p>genero</p>
          <label htmlFor="Inputs">
            {''}
            feminino<input type="checkbox" />
          </label>
          <label htmlFor="Inputs">
            {''}
            Masculino<input type="checkbox" />
          </label>
        </div>
        <div>
          <p>Categorias</p>
          <label htmlFor="Inputs">
            {''}
            Casual<input type="checkbox" />
          </label>
          <label htmlFor="Inputs">
            {''}
            Basquete<input type="checkbox" />
          </label>
          <label htmlFor="Inputs">
            {''}
            Skateboading<input type="checkbox" />
          </label>
          <label htmlFor="Inputs">
            {''}
            Chuteiras<input type="checkbox" />
          </label>
        </div>
      </section>
    )
  }

}

export default Filteres