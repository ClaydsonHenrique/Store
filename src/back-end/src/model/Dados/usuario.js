export const usuarios = [{email:'cacfu@gmail.com', senha:'22120304', name:'cafu', lasName:'cacfuu'}]

export const cadastro = (param)=>{
const dados = JSON.stringify(param)
localStorage.setItem('dados', dados)

const getdados = localStorage.getItem('dados');
const objeto = JSON.parse(getdados);
usuarios.push(objeto)
}

const getdados = localStorage.getItem('dados');
if(getdados){
const objeto = JSON.parse(getdados);
usuarios.push(objeto)
}
