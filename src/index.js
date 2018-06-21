const express = require ('express');
const app = express();

/* SETTINGS */
app.set('port', process.env.PORT || 3000);


/* MIDDLEWARS */
app.use(express.json()); //SI SE RECIBE UN JSON ESTO LO INTERPRETA 

/* ROUTES */
app.use(require('./routes/employees'));

/* SERVER INIT */
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    
});