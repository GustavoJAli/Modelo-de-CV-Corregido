/* Calculando la edad actual*/
    var hoy = new Date();
    var cumpleanos = new Date(1961,02,15);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--}
        console.log(edad);

