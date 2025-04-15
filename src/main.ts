import { tieneMayusculasYMinusculas, tieneCaracteresEspeciales, tieneLongitudMinima, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes, ValidacionClave} from "./confirmacion";
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

  console.log("Contraseña completamente correcta:")
  const ej = validarClave("paco", "Contraseñ1a!",commonPasswords);
  console.log(ej);

  console.log("Contraseña incorrecta debido a el nombre de usuario:")
  const ej2 = validarClave("paco", "contApacose1!",commonPasswords);
  console.log(ej2);
