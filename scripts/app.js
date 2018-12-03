var  swLocation = '/sw.js';


if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register( swLocation );
}
