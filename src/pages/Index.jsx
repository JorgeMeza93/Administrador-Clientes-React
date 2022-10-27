import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Cliente from '../components/Cliente';

export function loader(){
  const clientes = [
    {
        id: 1,
        nombre: 'Jorge',
        telefono: 102013313,
        email: "juan@gmail.com",
        empresa: 'Codigo Con Jorge'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@gmail.com",
        empresa: 'Codigo Con Jorge'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@gmail.com",
        empresa: 'Codigo Con Jorge'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@gmail.com",
        empresa: 'Codigo Con Jorge'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@gmail.com",
        empresa: 'Codigo Con Jorge'
    },
  ];
  return clientes;
}

const Index = () => {
  const datos = useLoaderData();
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-3'>Administra tus clientes</p>
      { datos.length ? (
          <table className='w-full bg-white shadow mt-5 table-auto'>
            <thead className='bg-blue-800 text-white'>
              <tr>
                <th className='p-2'>Cliente</th>
                <th className='p-2'>Contacto</th>
                <th className='p-2'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {datos.map( cliente => (
                  <Cliente
                    cliente={cliente}
                    key={cliente.id}
                  />
                ))}
            </tbody>
          </table>
        ) : (
            <p className='text-center mt-10'>No hay clientes aún</p>
          )
      }
    </>
  )
}

export default Index