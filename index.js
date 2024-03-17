//1 import json server
const jsonServer = require('json-server')

//2 import cors
const cors = require('cors');

//3 create a server application using jsonserver
const restServer = jsonServer.create()

//4 setup path for db.json
const router = jsonServer.router('db.json')

//5 return middleware used by json server
const middleware = jsonServer.defaults()

//6 setup a port number
const port = 3001

//7 use cors middleware
restServer.use(cors());

//8 use middleware returned by json-server
restServer.use(middleware)

//9 use router
restServer.use(router)

//10 to run server
restServer.listen(port, () => {
    console.log("Hospital doctor view on port" + port);
})
