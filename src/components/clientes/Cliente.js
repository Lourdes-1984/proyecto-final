import React from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import clienteAxios from '../config/axios';


function Cliente({cliente}) {
    //extraer los valores
    const {_id , nombre, apellido, empresa, email, telefono} = cliente;
   //eliminar un cliente
   const eliminarCliente = idCliente =>{
    Swal.fire({
        title: '¿Estás Seguro?',
        text: "Un cliente eliminado ya no se puede recuperar!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar !',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.value) {
            //llamado a axios
            clienteAxios.delete(`/clientes/${idCliente}`)
            .then(res =>{
                Swal.fire(
                    'Eliminado!',
                    res.data.mensaje,
                    'success'
                  )
            })
        }
      });
   } 
  return (
    <div className="card">
    <div className="">
        <p className="nombre">Nombre: {nombre} {apellido}</p>
        <p className="empresa">Empresa: {empresa}</p>
        <p>Email: {email}</p>
        <p>Tel: {telefono}</p>
    </div>
    <div className="acciones">
        <Link to={`/clientes/editar/${_id}`} className="btn btn-azul">
            <i className="fas fa-pen-alt"></i>
            Editar Cliente
        </Link>
        <Link to={`/pedidos/nuevo/${_id}`} className="btn btn-amarillo">
            <i className="fas fa-plus"></i>
          Nuevo Pedido
        </Link>
        <button type="button" className="btn btn-rojo btn-eliminar" onClick={() => eliminarCliente(_id)}>
            <i className="fas fa-times"></i>
            Eliminar Cliente
        </button>
    </div>
</div>

  )
}

export default Cliente