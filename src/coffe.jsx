import React from 'react'

export default function Coffe() {
    const products = [
        {
            id : 1,
            name : "house blend",
            description : "Smooth medium roast coffee beans.",
            price : "$12",
            image : "https://images.unsplash.com/photo-1609595781571-eaf55401969c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335",
            link : "https://buy.stripe.com/test_00w14na9nfPSgEp9j553O02",
        },

        {
            id : 2,
            name : "Dark Roast",
            description : "Bold and rich flavor",
            price : "$13",
            image : "https://plus.unsplash.com/premium_photo-1733317435318-531c85f0f00a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340",
            link : "https://buy.stripe.com/test_eVqeVd95jgTW5ZL66T53O03",
        },

        {
            id : 3,
            name : "Espresso Blend",
            description : "Strong and aromatic mix for espresso lovers.",
            price : "$14",
            image : "https://images.unsplash.com/photo-1648867135478-fc38910d3453?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
            link : "https://buy.stripe.com/test_00w4gz4P38nqewh66T53O04",
        },
        {
            id : 4,
            name : "Decaf Coffee",
            description : "Decaf Coffee Full taste, no caffeine.",
            price : "$15",
            image : "https://images.unsplash.com/photo-1597511325194-f5d8389f8a5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1333",
            link : "https://buy.stripe.com/test_6oU3cva9navyag152P53O05",
        },

    ]
  return (
    <div className='bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen py-12 px-6'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {products.map((p) => (
            <div key={p.id} className='group bg-white rounded-2xl shadow-sm ring-1 ring-amber-100 hover:ring-amber-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col'>
              <div className='overflow-hidden'>
                <img src={p.image} alt={p.name} className='w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105' />
              </div>
              <div className='p-5 flex flex-col flex-1'>
                <h2 className='text-xl font-semibold text-amber-900 tracking-tight'>{p.name}</h2>
                <p className='text-gray-600 mt-2'>{p.description}</p>
                <div className='mt-4 flex items-center justify-between'>
                  <p className='font-bold text-lg text-amber-700'>{p.price}</p>
                </div>
                <a href={p.link} className='mt-5 inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors'>
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
