import React from 'react'
import { useNavigate, Form, useActionData, redirect} from 'react-router-dom';
import Formulario from '../components/Formulario';
import Error from '../components/Error';
import { agregarCliente } from '../data/Clientes';

export async function action({request}){
  const formData = await request.formData();
  const datosDelFormData = Object.fromEntries(formData);
  const email = formData.get("email");
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  const errores = [];
  if(Object.values(datosDelFormData).includes("")){
    errores.push("Todos los campos son obligatorios");
  }
  if(!regex.test(email)){

  }
  if(Object.keys(errores).length){
    return errores;
  }
  await agregarCliente(datosDelFormData);
  return redirect("/")
}

const NuevoCliente = () => {
  const errores = useActionData();
  const navigate = useNavigate();
  console.log(errores)
  return (
    <div>
       <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
       <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente</p>
      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={ () => navigate("/")}
        >
          Volver
        </button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        {errores?.length && errores.map( (error, i) => {
          return <Error key={i}>{error}</Error>
        })}
        <Form
          method='post'
          noValidate
        >
          <Formulario/>
          <input type="submit"
            className='mt-5 w-full bg-blue-700 p-3 uppercase font-bold text-white text-lg'
            value="Registar Cliente"
          />
        </Form>
      </div>

    </div>
  )
}

export default NuevoCliente