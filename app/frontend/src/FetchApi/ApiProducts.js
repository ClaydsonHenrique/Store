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