import React, { useState } from 'react';
import { filterGenero, filterByIdOrName } from '../filterProducts/filterProducts.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterProduct } from '../redux/action/index.js';
import { allProdutcts } from '../Dados/dados.js';

const Filteres = () => {
  const [productsfilter, setProductsFilter] = useState([]);
  const [checkFeme, setCheckFeme] = useState(false);
  const [checkMale, setCheckMale] = useState(false);
  const [originalsChecked, setOriginalsChecked] = useState(false);
  const [basqueteChecked, setBasqueteChecked] = useState(false);
  const [sportswearChecked, setSportswearChecked] = useState(false);
  const [runningChecked, setRunningChecked] = useState(false);
  const [chuteirasChecked, setChuteirasChecked] = useState(false);
  const [calcadoChecked, setCalcadoChecked] = useState(false);
  const [roupasChecked, setRoupasChecked] = useState(false);
  const [searchProduct, setSearchProduct] = useState('');
  const [disabled, setDisabled] = useState(true);

  const history = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (target) => {
    setSearchProduct(target);
    if (target.length >= 2) {
      setDisabled(false);
    }
  };

  const handleCheckboxChange = (name, value) => {
    switch (name) {
      case 'calcadoChecked':
        setCalcadoChecked(value);
        break;
      case 'roupasChecked':
        setRoupasChecked(value);
        break;
      case 'generoChecked':
        setCheckFeme(value);
        break;
      case 'checkMale':
        setCheckMale(value);
        break;
      case 'originalsChecked':
        setOriginalsChecked(value);
        break;
      case 'basqueteChecked':
        setBasqueteChecked(value);
        break;
      case 'sportswearChecked':
        setSportswearChecked(value);
        break;
      case 'runningChecked':
        setRunningChecked(value);
        break;
      case 'chuteirasChecked':
        setChuteirasChecked(value);
        break;
      default:
        break;
    }
  };

  const handleChange = ({ target }) => {
    const { name, value, checked } = target;
    const selectFilter = productsfilter.length > 0 ? productsfilter : allProdutcts;

    handleCheckboxChange(name, checked);
    if (checked) {
      const filteredProducts = filterGenero(value, selectFilter);
      setProductsFilter((prevProducts) => [...prevProducts, ...filteredProducts]);
      console.log(filteredProducts)
      dispatch(filterProduct(productsfilter));
    } else {
      const filter = allProdutcts.filter((produto) => produto.genero !== value || produto.categoria !== value || produto.tipo !== value)
      console.log(filter, 'tretsfds', value)
    }
  };

  const handleClick = async () => {
    const filterforName = filterByIdOrName(null, searchProduct);
    setProductsFilter(filterforName);
    dispatch(filterProduct(productsfilter));
    history('/');
    console.log(filterforName)
  };

  return (
    <section>
      <h1>Store Cacfuu</h1>
      <label htmlFor="search">
        <input
          type="text"
          name="searchValue"
          id="search"
          onChange={(event) => handleSearch(event.target.value)}
        />
        <button disabled={disabled} onClick={handleClick}>
          pesquisar
        </button>
      </label>
      <div>
        <p>Mulher</p>
        <p>Homem</p>
        
      </div>

    </section>
  );
};

export default Filteres;
