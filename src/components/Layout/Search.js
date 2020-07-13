import React from 'react'
import { SearchOutlined } from '@ant-design/icons'

const Search = () => {
    return (
        <div className='Search-Box'>
            <SearchOutlined />
            <input type='text' placeholder='Buscar' className='Input-Search'></input>
        </div>
    )
}

export default Search
