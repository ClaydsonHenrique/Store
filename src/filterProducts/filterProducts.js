import { allProdutcts } from "../Dados/dados.js";

function removeAcentos(string) {
  if (typeof string !== "string") {
    return string;
  }
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const filterByIdOrName = (id, name) => {
  if (id) {
    const filterId = allProdutcts.filter((produto) => produto.id === id);
    return filterId;
  }

  if (name) {
    const termoPesquisa = removeAcentos(name.toLowerCase());
    const filterName = allProdutcts.filter((produto) =>
      removeAcentos(produto.name.toLowerCase()).includes(termoPesquisa)
    );

    return filterName;
  }
};

export const searchProduct = (idOrName) => {
  const texttoLowerCase = idOrName.toLowerCase();
  const filter = allProdutcts.filter((produto) => produto.id.toString().includes(texttoLowerCase) ||
    produto.name.toLowerCase().includes(texttoLowerCase)
  )
  return filter
};

export const filterGenero = (genero, allProdutct) => {
  console.log(genero)
  const filter = allProdutct.filter((produto) => produto.categoria.includes(genero) ||
    produto.genero.includes(genero) || produto.tipo.includes(genero)
  )
  return filter
}
