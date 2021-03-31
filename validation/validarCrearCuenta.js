export default function validarCrearCuenta (values) {
  let errores = {};

  if(!values.nombre){
    errores.nombre = "El Nombre es obligatorio";
  }

  if(!values.email){
    errores.email = "El Email es obligatorio";
  }else{
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
      errores.email = "Email no valido";
    }
  }

  if(!values.password){
    errores.password = "El Password es obligatorio";
  }else{
    if(values.password.length < 6){
      errores.password = "El Password debe tener minimo 6 caracteres"
    }
  }

  return errores;
}