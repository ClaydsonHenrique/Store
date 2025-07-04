export const GetAllProducts = async () => {
  try {
    const response = await fetch('http://localhost:3003/product');
    if (!response) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const getProductById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3003/product/${id}`);
    if (!response) {
      throw new Error('Network reponse was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export const postLogin = async (user) => {
  try {
    const api = await fetch('http://localhost:3003/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    })
    const response = await api.json()
    return response
  } catch (e) {
    console.log(e)
  }
}


export const getuser = async () => {
  const token = localStorage.getItem('token')

  if (typeof token !== 'string') {
    console.log("Token not found")
  }

  try {
    const api = await fetch('http://localhost:3003/login', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log(api)
    if (!api.ok) {
      console.log('User notfound');
    }

    const userData = await api.json();
    return userData;

  } catch (e) {
    console.log(e)
  }
}