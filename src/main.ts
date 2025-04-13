const commonPasswords: string[] = [
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein",
    "welcome",
    "monkey",
    "sunshine",
    "password1",
    "123456789",
    "football",
    "iloveyou",
    "1234567",
    "123123",
    "12345678",
    "abc123",
    "qwerty123",
    "1q2w3e4r",
    "baseball",
    "password123",
    "superman",
    "987654321",
    "mypass",
    "trustno1",
    "hello123",
    "dragon",
    "1234",
    "555555",
    "loveme",
    "hello",
    "hockey",
    "letmein123",
    "welcome123",
    "mustang",
    "shadow",
    "12345",
    "passw0rd",
    "abcdef",
    "123abc",
    "football123",
    "master",
    "jordan23",
    "access",
    "flower",
    "qwertyuiop",
    "admin123",
    "iloveyou123",
    "welcome1",
    "monkey123",
    "sunshine1",
    "password12",
    "1234567890",
  ];

  interface ValidacionClave {
    esValida: boolean;
    error?: string;
  }

  const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
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
  const tieneNumeros = (clave: string): ValidacionClave => {
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
  const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
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

const tieneLongitudMinima = (clave: string): ValidacionClave => {
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

const tieneNombreUsuario = (nombreUsuario: string, clave: string,): ValidacionClave => {
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
const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
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

/*
const ej1 = tieneMayusculasYMinusculas("Yadada");
console.log(ej1);

const ej2 = tieneNumeros("asds2");
console.log(ej2);

const ej3 = tieneCaracteresEspeciales("contraseña!!");
console.log(ej3);

const ej4 = tieneLongitudMinima("12345678");
console.log(ej4);

const ej5 = tieneNombreUsuario("paco","contrapaco");
console.log(ej5);

const ej6 = tienePalabrasComunes("password11", commonPasswords);
console.log(ej6);
*/

//Esto se puede mejorar, pero no estoy seguro de como sin hacerle todos los "if"...
  const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
    let ValidacionFinal: ValidacionClave;
    ValidacionFinal = tieneMayusculasYMinusculas(clave);
    if (ValidacionFinal.esValida === false){return ValidacionFinal}
    ValidacionFinal = tieneNumeros(clave);
    if (ValidacionFinal.esValida === false){return ValidacionFinal}
    ValidacionFinal = tieneCaracteresEspeciales(clave);
    if (ValidacionFinal.esValida === false){return ValidacionFinal}
    ValidacionFinal = tieneLongitudMinima(clave);
    if (ValidacionFinal.esValida === false){return ValidacionFinal}
    ValidacionFinal = tieneNombreUsuario(nombreUsuario, clave);
    if (ValidacionFinal.esValida === false){return ValidacionFinal}
    ValidacionFinal = tienePalabrasComunes(clave, commonPasswords);
    if (ValidacionFinal.esValida === false){return ValidacionFinal}
    return ValidacionFinal;
  }

  const ej = validarClave("paco", "Contraseñ1a!",commonPasswords);
  console.log(ej);
