// Generated by Scott.Lan 2015-07-10 12:40
'use strict';


// default .htaccess
module.exports = {
    rewrite: [
        // '^/shared/(.*)$ http://cdn.sencha.com/ext/gpl/4.2.1/examples/shared/$1 [P,L]',
        '^/api/(.*)$ http://java.dev.gslssd.com/api/$1 [P,L]',
        '^/taisysdev/(.*)$ http://s3-ap-southeast-1.amazonaws.com/taisysdev/$1 [P,L]',
        '!\\.js|\\.html|\\.css|\\.png|\\.jpg|\\.gif|\\.svg|\\.ttf|\\.woff|\\.ico$ /index.html [L]'
    ],
    port: 4444
};


// override .htaccess
try{
    console.info('Try to load ".htaccess.override.js" file.');
    exports = require('./.htaccess.override.js');
    module.exports = exports;
    console.info('Setup .htaccess.override.js file successfully.');
}
catch(e){
    console.info('Due to no ".htaccess.override.js" file, using default .htaccess configuration.');
}
finally{
    console.info(JSON.stringify(module.exports));
}
