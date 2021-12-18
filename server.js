const express = require('express');
    app = express();
        port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Welcome to the start of Game Masters HUD');
});

app.listen(port, () => {
    console.log('server started on: ' + port);
})

