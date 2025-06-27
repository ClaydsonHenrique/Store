import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 " >
      <div className='max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md' >
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Entrar na sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ou{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              criar uma nova conta
            </Link>
          </p>
        </div>
        <form className='mt-8 space-y-6'>
          <label htmlFor="email" className="space-y-4 block text-sm font-medium text-gray-700" >
            email:
            <input id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
          <label htmlFor="password">
            senha:
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </label>
          <div>
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Lembrar-me
              </label>
            </div>
            <div className="text-sm">
              <Link to="#" className="font-medium text-blue-600 hover:text-blue-500">
                Esqueceu sua senha?
              </Link>
            </div>

          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  )
}
