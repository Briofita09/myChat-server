import { io } from "./server.js";

io.on("connection", (socket) => {
  socket.on("channelConnect", (data) => {
    for (let i = 1; i <= 6; i++) {
      socket.leave(i);
    }
    socket.join(data.channel);
    io.to(data.channel).emit("channelConnect", data.channel);
    console.log(data);
  });
});
