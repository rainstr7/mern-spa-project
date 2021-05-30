const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');
// const https = require('https');
// const fs = require('fs');

const app = express();

app.use(express.json({extended: true}));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/link.routes'));
app.use('/t', require('./routes/redirect.routes'));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = config.get('port') || 5000;
// const privateKey = fs.readFileSync( 'ssl/privatekey.pem' );
// const certificate = fs.readFileSync( 'ssl/certificate.pem' );

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        // https.createServer({
        //     key: privateKey,
        //     cert: certificate
        // }, app).listen(PORT, () => (console.log(`App has been started on port ${PORT}...`)));
        app.listen(PORT, () => (console.log(`App has been started on port ${PORT}...`)))
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();
