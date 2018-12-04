var  swLocation = '/sw.js';


if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register( swLocation );
}
if (navigator.onLine) {
    console.log("Tienes conexion a internet :)");
}else{
    console.log("No tienes conexion a internet :(");
}