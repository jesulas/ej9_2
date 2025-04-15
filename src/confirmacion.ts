
export interface ValidacionClave {
    esValida: boolean;
    error?: string;
  }


export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    if (clave!= clave.toUpperCase() && clave != clave.toLowerCase())
        return{ 
        esValida: true

        }
    return {
        esValida: false,
        error: "Ha de incluir mayuscula y minusculas."
    }
  };

  const numeral = /\d/; // La expresion regular /\d/ busca la clave por cualquier numero
  export const tieneNumeros = (clave: string): ValidacionClave => {
    if (numeral.exec(clave) != null){
      return{ 
        esValida: true

        }
    }
    return {
      esValida: false,
      error: "Ha de incluir numeros."
  }
  };

const caracteresEspeciales = /[^a-zA-z0-9" "]/g; // La expresion regular /[^a-zA-z0-9" "]/g busca la clave por cualqier cosa que NO sea una letra/numero/espacio aka caracterEspeciales
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    if (caracteresEspeciales.exec(clave)){
      return {
        esValida: true
      }
    }
    return{
      esValida: false,
      error: "Ha de incluir caracteres especiales."
    }

  };

  export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length < 8) {
    return{
      esValida: false,
      error: "Ha de tener una longitud de 8 o mas caracteres."
    }
  }
  return {
    esValida: true
  }
};

export const tieneNombreUsuario = (nombreUsuario: string, clave: string,): ValidacionClave => {
if (clave.includes(nombreUsuario)){
  return{
    esValida: false,
    error: "Contraseña no puede incluir el usuario."
  }
}
return {
  esValida: true
}
};
// x es puesto como true, si cualquiera de las commonPasswords  es igual que la clave, este se cambia a false, dando el error.
//No puede mirar la palabra como tal, solo mira si es "igual". ej => (password1 === password1) sale mal pero no (password11 === password1)
export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
  let x = true

  commonPasswords.forEach(contraseña => {
  if (contraseña === clave){
    x = false
  }
  return
  })

if (x != true){
  return{
    esValida: false,
    error: "Contraseña no puede incluir palabras comunes."
  }
 }
  return {
    esValida: true
  }

};