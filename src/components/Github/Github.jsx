import React, { useState, useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
          fetch('https://api.github.com/users/NoensLeftToe')
          .then(response => response.json())
          .then(data =>{
            console.log(data);
            setData(data);
          })
    },[])
  return (
    <div className='text-center m-4 bg-green-800 text-3xl text-white p-4 '>Github Followers:{data.followers}
    <img src={data.avatar_url} width={300} />
     </div>
  )
}

export default Github