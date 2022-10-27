import React from 'react'

function Cliente (cliente) {
    const {nombre, empresa, telefono, email, id} = cliente.cliente;
  return (
    <tr>
        <td className='p-6'>{nombre}</td>
        <td className='p-6'>{"Sam Bigotes"}</td>
    </tr>
  )
}

export default Cliente