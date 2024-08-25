import React, { ChangeEvent, useState } from 'react'

const SearchForm = () => {
    const [query, setQuery] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(query);i 
    // }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const response = await fetch('/api/example', {
            method: 'POST', // Adjust the method if needed
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          console.log(data); // Handle the response data as needed
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };

  return (
    <div className="grid justify-items-center gap-5">
      <h1 className="text-3xl">Welcome to medbank</h1>
      
      <form className="space-y-3" onSubmit={handleSubmit}>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Drug Name</span>
          
          <input value={query} onChange={handleChange} type="text" placeholder="drug name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "/>
        </label>
        <button type="submit" className="btn btn-primary">Search</button>

      </form>
    </div>
    
  )
}

export default SearchForm