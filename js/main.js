// Generar contraseña

const password = () => {

    let contraseña = prompt("Indicame tu contraseña: ");
    let nuevacontraseña = "";

    for (let i = 0; i < contraseña.length; i++) {

        let letra = contraseña[i];
        
        letra = letra.toLowerCase();
        letra = letra.replace(/ /g, "");
        letra = letra.replace(/a/g, "4");
        letra = letra.replace(/e/g, "3");
        letra = letra.replace(/i/g, "1");
        letra = letra.replace(/o/g, "0");

        nuevacontraseña += letra;
    }
    
    console.log(nuevacontraseña);
}

password()