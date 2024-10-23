export const getUser = async (token) => {
  try {
    const response = await fetch(`http://localhost:3003/login`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
    const data = await response.json();
    return data;
    
  }catch (error) {
    throw error;
  }
}



export const MethodGet = async () => {
  try {
    const response = await fetch('http://localhost:3003/product')
    if (!response) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const getById = async (router, id) => {
  try {
    const response = await fetch(`http://localhost:3003/${router}/${id}`)
    if (!response) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const MethodPost = async (values, router) => {
  try {
    const response = await fetch(`http://localhost:3003/${router}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    if (!response) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const MethodPut = async (id, values, router) => {
  try {
    const response = await fetch(`http://localhost:3003/${router}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    if (!response) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }

}

export const add_Produc_ShoppingCart = async (token, product, quantity) => {
  try {
    const response = await fetch('http://localhost:3003/carrinho', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ productId: product, quantidade: quantity })
    });
    if (!response.ok) { 
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export const validateToken = async (token) => {
  try {
    const response = await fetch(`http://localhost:3003/verifyToken`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
    const data = await response.json();
    console.log(data)
    return data;

  } catch (error) {
    throw error;
  }
}