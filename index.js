const express = require('express');
let bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = 3001;

app.get('/hello', (req, res) => {
    res.status(getResponseCode(req.url));
    res.send('Hello Amazing Human !!!!');
})

app.post('/user', (req, res) => {
    const body = req.body;
    const username = body.username;
    const password = body.password;
    res.status(getResponseCode(req.url));
    res.send('Username : ' + username + '\npassword : ' + password);
})

app.use((req, res) => {
    res.status(getResponseCode(req.url));
    res.send('Error!!!!!!!');
});

app.listen(port, () => {
    console.log("Server started listening on port : ", port);
})


//Set response codes based on the path

const getResponseCode = (url) => {
    let statusCode;
    switch (url) {
        case '/hello':
            statusCode = 200;
            break;
        case '/user':
            statusCode = 200;
            break;
        default:
            statusCode = 404;
    }

    return statusCode;
}
