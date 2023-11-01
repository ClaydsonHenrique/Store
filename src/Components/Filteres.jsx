import React, { useState } from 'react';
import { filterGenero, filterByIdOrName } from '../filterProducts/filterProducts.js';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterProduct } from '../redux/action/index.js';
import { allProdutcts } from '../Dados/dados.js';
import './filteres.css';

const Filteres = () => {
  const [productsfilter, setProductsFilter] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [subFilter, setsubFilter] = useState([])
  const [bgColor, setBgColor] = useState(false)

  const history = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (target) => {
    setSearchProduct(target);
    if (target.length >= 2) {
      setDisabled(false);
    }
  };

  const handleSlideMouseEnter = (param) => {
    setHoveredCategory(param);
    const filterHomem = filterGenero(param, allProdutcts);
    setProductsFilter(filterHomem);
    setBgColor(true)
  };

  const handleSlideMouseLeave = () => {
    setHoveredCategory(null);
    setProductsFilter([]);
    setBgColor(false)
  };

  const handleClick = async () => {
    const filterforName = filterByIdOrName(null, searchProduct);
    setProductsFilter(filterforName);
    dispatch(filterProduct(filterforName));
    history('/');
  };

  const handleclikFilter = (param) => {
    const filter = filterGenero(param, productsfilter)
    setsubFilter(filter)
  }

  console.log(subFilter)
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
      <nav>
        <ul style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <li value='Homem'>
            <div
              onMouseEnter={() => handleSlideMouseEnter("Homem")}
              onMouseLeave={handleSlideMouseLeave}
              style={{ position: 'relative', width: '300px', display: 'flex', justifyContent: 'center', flexDirection: 'column', }}
            >
              <button className='filterButton'>Homens</button>
            </div>
          </li>
          <li value='Mulher'>
            <div
              onMouseEnter={() => handleSlideMouseEnter('Mulher')}
              onMouseLeave={handleSlideMouseLeave}
              style={{ position: 'relative', width: '300px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
              className='filterButton'
            >
              <button className='filterButton'>Mulher</button>
            </div>
          </li>
          <li value='Infantil'>
            <div onMouseEnter={() => handleSlideMouseEnter('Infantil')} onMouseLeave={handleSlideMouseLeave}
              style={{ position: 'relative', width: '300px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
            >
              <button className='filterButton'>Crianças</button>
            </div>
          </li>
          <li value='calçados'>
            <div onMouseEnter={() => handleSlideMouseEnter('calçados')} onMouseLeave={handleSlideMouseLeave}
              style={{ position: 'relative', width: '300px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
            >
              <button className='filterButton'>calçados</button>
            </div>
          </li>
          <li value='Roupas'>
            <div onMouseEnter={() => handleSlideMouseEnter('Roupas')} onMouseLeave={handleSlideMouseLeave}
              style={{ position: 'relative', width: '300px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
            >
              <button className='filterButton'>Roupas</button>
            </div>
          </li>
        </ul>
      </nav>
      <div>
        {hoveredCategory === 'Roupas' && (
          <div
            className='hidenFIlter table-transition visible table-entrance'
            onMouseEnter={() => handleSlideMouseEnter('Roupas')} onMouseLeave={handleSlideMouseLeave}
          >
            <table className="">
              <tbody>
                <tr>
                  <td>Calçados</td>
                </tr>
                <tr>
                  <td><button>Chuteira</button></td>
                </tr>
                <tr>
                  <td><button>Clássicos</button></td>
                </tr>
                <tr>
                  <td><button>Corrida</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {hoveredCategory === 'calçados' && (
          <div onMouseEnter={() => handleSlideMouseEnter('calçados')} onMouseLeave={handleSlideMouseLeave} >
            <table className="table-transition visible table-entrance">
              <tbody>
                <tr>
                  <td>Calçados</td>
                </tr>
                <tr>
                  <td><button>Chuteira</button></td>
                </tr>
                <tr>
                  <td><button>Clássicos</button></td>
                </tr>
                <tr>
                  <td><button>Corrida</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {hoveredCategory === 'Infantil' && (
          <div onMouseEnter={() => handleSlideMouseEnter('Infantil')} onMouseLeave={handleSlideMouseLeave}
          >
            <table className="table-transition visible table-entrance">
              <tbody>
                <tr>
                  <td>Calçados</td>
                </tr>
                <tr>
                  <td><button>Chuteira</button></td>
                </tr>
                <tr>
                  <td><button>Clássicos</button></td>
                </tr>
                <tr>
                  <td><button>Corrida</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {hoveredCategory === 'Mulher' && (
          <div onMouseEnter={() => handleSlideMouseEnter('Mulher')}
            onMouseLeave={handleSlideMouseLeave}
          >
            <table className="table-transition visible table-entrance">
              <tbody>
                <tr>
                  <td>Calçados</td>
                </tr>
                <tr>
                  <td><button>Chuteira</button></td>
                </tr>
                <tr>
                  <td><button>Clássicos</button></td>
                </tr>
                <tr>
                  <td><button>Corrida</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {hoveredCategory === 'Homem' && (
          <div className='hidenFIlter table-transition visible table-entrance'
            onMouseEnter={() => handleSlideMouseEnter("Homem")}
            onMouseLeave={handleSlideMouseLeave}
          >
            <div >
              <h2>Calçados</h2>
              <div className='containerLInks'>
                <Link className='links' onClick={() => handleclikFilter("Futebol")}>Chuteira</Link>
                <Link className='links' onClick={() => handleclikFilter("Originals")}>Clássicos</Link>
                <Link className='links' onClick={() => handleclikFilter("Sportswear")}>Sportswear</Link>
                <Link className='links' onClick={() => handleclikFilter("Running")}>Corrida</Link>
                <Link className='links' onClick={() => handleclikFilter("Basquete")}>Basquete</Link>
              </div>
            </div>
            <div>
              <h2>Calçados</h2>
              <div className='containerLInks'>
                <Link className='links' onClick={() => handleclikFilter("Camiseta")}>Camiseta</Link>
                <Link className='links' onClick={() => handleclikFilter("Moletom")}>Moletom</Link>
                <Link className='links' onClick={() => handleclikFilter("Jaqueta")}>Jaqueta</Link>
                <Link className='links' onClick={() => handleclikFilter("Short")}>Short</Link>
                <Link className='links' onClick={() => handleclikFilter("Calça")}>Calça</Link>
              </div>
            </div>
            <div>
              <h2>Marca</h2>
              <div >
                <Link className='links' onClick={() => handleclikFilter("Camiseta")}>Camiseta</Link>
                <Link className='links' onClick={() => handleclikFilter("Moletom")}>Moletom</Link>
                <Link className='links' onClick={() => handleclikFilter("Jaqueta")}>Jaqueta</Link>
                <Link className='links' onClick={() => handleclikFilter("Short")}>Short</Link>
                <Link className='links' onClick={() => handleclikFilter("Calça")}>Calça</Link>
              </div>
            </div>
          </div >
        )
        }
      </div >
    </section >
  );
};

export default Filteres;
