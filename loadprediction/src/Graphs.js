import React, { useEffect, useState } from 'react'

function Graphs() {

    const [records,setRecords] = useState([])

    useEffect(()=>{
        fetch("coinranking5f81b65530054033d305e3e93c6b1abfb7a142eb5928a78f")
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <ul>
            {records.map((list, index)=>(
                <li key={index}>{list.id} | {list.name} </li>
            ))}
        </ul>
    </div>
  )
}

export default Graphs