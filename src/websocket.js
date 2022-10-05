import { io } from "./server.js";
import { newMessage } from "./services/messageServices/messageServices.js";

io.on("connection", (socket) => {
  socket.on("channelConnect", async (data) => {
    if (data.profile.length !== 0) {
      for (let i = 1; i <= 6; i++) {
        socket.leave(i);
      }
      socket.join(data.channel);
      let message = `${data.profile.name} se conectou ao canal ${data.channel}`;
      await newMessage(data.profile.id, message);
      io.to(data.channel).emit("channelConnect", data);
    }
  });
  socket.on("newMessage", async (data) => {
    await newMessage(data.profile.id, data.message);
    io.to(data.channel).emit("newMessage", data.message);
  });
});
