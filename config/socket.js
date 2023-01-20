var io = require('socket.io')(server,
    {
      cors: {
        origin: "*",
        credentials: true
      }
    }
);

//Socket Server
io.on('connection', (socket) => {

    console.log('A user connected');
  
    socket.emit("message", "hello world");
  
    socket.on('monzoyetu', (data) => {
      console.log(data);
    })
  
    socket.on('disconnect', function () {
      console.log('A user disconnected');
    });
  
});

module.exports = io;