import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addDataUser } from '../Redux/actions';
import { getMethodIfToken } from '../FetchApi/ApiProducts';

function Headers({ dataUser }) {
  const dispatch = useDispatch();
  
  
  const logout = () => {
    localStorage.removeItem('token');
    dispatch(addDataUser(''));
  }
  
  const getLocalUser = React.useCallback( async() => {
    const token = window.localStorage.getItem('token');
    if(!token) return false;
    const getusuario = await getMethodIfToken(token, 'login');
    dispatch(addDataUser(getusuario));
    return getusuario;
  },[dispatch]);
  
  useEffect(() => {
    getLocalUser();
  }, [getLocalUser]);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/carrinho'>Carrinho</Link>
          </li>
          <li>
            {
              Object.keys(dataUser).length === 0 ?
                <Link to='/login'>Login</Link>
                :
                <div>
                  <Link to='/conta'>{dataUser.username}</Link>
                  <button onClick={logout}>sair</button>
                </div>
            }
          </li>
        </ul>
      </nav>
    </header>
  )
}

const mapStateToProps = (state) => ({
  dataUser: state.dataUser.dataUser,
});

export default connect(mapStateToProps)(Headers);