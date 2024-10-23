import React from 'react'
import Input from './Input'

export default function CreatUser() {
  
  return (
    <section>
      <h1>Criar Usuário</h1>
      <Input label="nome" />
      <Input label="sobrenome" />
      <Input label="email" type="email"/>
      <Input label="senha" type="password"  />
      <Input label="confirmar senha" type="password"  /> 
      <Input label="endereço"  />
      <Input label="cep" type="number" />
      <Input label="cidade" />
      <Input label="estado" />
      <Input label="telefone" type="number" />
      <button>Criar Usuário</button>
    </section>
  )
}
