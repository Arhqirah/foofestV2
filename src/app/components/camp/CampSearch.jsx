import React, {useState} from 'react'

export default function CampSearch({bandsList}) {
    const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className='w-full my-4'>
        <input className="w-64 h-12 text-center" placeholder="Søg dit band!" type="text" onChange={(e) => {e.preventDefault; e.currentTarget.value}}/>
    </div>
  )
}