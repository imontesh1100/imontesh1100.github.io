const CACHE    = 'static-v1';

const APP_SHELL = [
    '/',
    'index.html',
    'css/aos.css',
    'css/bootstrap.min.css',
    "js/core/jquery.3.2.1.min.js",
    "js/core/popper.min.js",
    "js/core/bootstrap.min.js",
    "js/now-ui-kit.js",
    "js/aos.js",
    "scripts/main.js",
    "scripts/app.js",
    'favicon.ico',
    'images/cc-bg-1.jpg',
    'images/perfil.jpg',
    'images/project-1.jpg',
    'images/project-2.jpg',
    'images/project-3.jpg',
    'images/project-4.jpg',
    'styles/main.css',
    'https://fonts.googleapis.com/css?family=Montserrat:400,700,200',
    'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css'
];


self.addEventListener('install', e => {
    const cacheStatic = caches.open(CACHE).then(cache => 
    cache.addAll( APP_SHELL ));
    e.waitUntil(cacheStatic);
    
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
