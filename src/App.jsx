import React from 'react'
import ProductList from './components/productList'


function App() {
  

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-red-400 italic text-center mb-6 border-b-4 pb-4">
        Product List
      </h1>

      <ProductList/>
    </div>
    </>
  )
}

export default App
