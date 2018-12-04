var  swLocation = '/sw.js';


if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register( swLocation );
}
if (navigator.onLine) {
    alert("Tienes conexion a internet :)");
}else{
    alert("No tienes conexion a internet :(");
}