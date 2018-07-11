//const keys = require('./keys');

//global.SALT_KEY = process.env.SECRETKEY || keys.secretKey;
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong> seja bem vindo ao Node Storage';


module.exports = {
    connectionString: 'mongodb://admin:admin@ds012678.mlab.com:12678/testemongodb',
    //sendgridKey: process.env.SENDGRIDKEY || keys.sendgridKey,
    containerConnectionString: 'TDB',
    // configFirebase: {
    //     apiKey: keys.keysFirebase.apiKey,
    //     authDomain: keys.keysFirebase.authDomain,
    //     databaseURL: keys.keysFirebase.databaseURL,
    //     projectId: keys.keysFirebase.projectId,
    //     storageBucket: keys.keysFirebase.projectId,
    //     messagingSenderId: keys.keysFirebase.messagingSenderId
    // }
}


