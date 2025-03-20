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
    if(!response){
      throw new Error('Network reponse was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error){
    console.log(error);
    throw error;
  }
}