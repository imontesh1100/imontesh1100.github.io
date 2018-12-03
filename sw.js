// imports

const CACHE    = 'static-v1';


const APP_SHELL = [
    // '/',
    'index.html',
    'css/aos.css',
    'css/bootstrap.min.css',
    'js/core/bootstrap.min.js',
    'js/core/jquery.3.2.1.min.js',
    'js/core/pooper.min.js',
    'js/plugins/bootstrap-datepicker.js',
    'js/plugins/bootstrap-switch.js',
    'js/plugins/jquery-share.js',
    'js/plugins/nouislider.min.js',
    'js/aos.js',
    'js/now-ui-kit.js',
    'favicon.ico',
    'manifest.json',
    'images/cc-bg-1.jpg',
    'images/perfil.jpg',
    'images/project-1.jpg',
    'images/project-2.jpg',
    'images/project-3.jpg',
    'images/project-4.jpg',
    'styles/main.css',
    'scripts/app.js',
    'scripts/main.js',
];



self.addEventListener('install', e => {


    const cacheStatic = caches.open(CACHE).then(cache => 
        cache.addAll( APP_SHELL ));

    e.waitUntil( Promise.all([cacheStatic]));

});


self.addEventListener('activate', e => {

    const respuesta = caches.keys().then( keys => {

        keys.forEach( key => {

            if (  key !== CACHE && key.includes('static') ) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil( respuesta );

});




self.addEventListener( 'fetch', e => {


    const respuesta = caches.match( e.request ).then( res => {

        if ( res ) {
            return res;
        } else {
            return fetch( e.request );
        }
    });
    e.respondWith( respuesta );
});


