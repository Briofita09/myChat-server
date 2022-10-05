import { io } from "./server.js";
import { newMessage } from "./services/messageServices/messageServices.js";

io.on("connection", (socket) => {
  socket.on("channelConnect", async (data) => {
    for (let i = 1; i <= 6; i++) {
      socket.leave(i);
    }
    socket.join(data.channel);
    console.log(data);
    let message = `${data.profile.name} se conectou ao canal ${data.channel}`;
    console.log(message);
    await newMessage(data.profile.id, message);
    io.to(data.channel).emit("channelConnect", data);
  });
});
