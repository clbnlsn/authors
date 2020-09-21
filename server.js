const express = require('express'),
    app = express(),
    port = 8000,
    cors = require('cors'),
    server = app.listen(port, () => console.log(`listening on port ${port}`));

app.use(cors());
app.use(express.json());

require('./server/config/config.database');
require('./server/routes/author.routes')(app);