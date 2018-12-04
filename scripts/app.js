var  swLocation = '/sw.js';


if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register( swLocation );
}
// Detectar cambios de conexión
function isOnline() {

    if ( navigator.onLine ) {
        alert("online");
    } else{
        alert("offline");        
    }

}

window.addEventListener('online', isOnline );
window.addEventListener('offline', isOnline );