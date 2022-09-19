import { io } from "./server.js";

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("channelConnect", (data) => {
    socket.join(data.channel);
    io.to(data.channel).emit("channelConnect", data);
  });
});
/* import { io } from "./server.js";
import { getAll } from "./repositories/channelRepository/channelRepository.js";

io.on("connection", async (socket) => {
  const channels = await getAll();
  for (const channel of channels) {
    socket.on(channel.id.toString(), (data) => {
      console.log({ data });
      socket.emit(channel.id, { message: "pong", channel: channel.id });
    });
  }
}); */
/* useEffect(() => {
  socket.removeAllListeners();
  socket.on(channel, (data) => {
    console.log(data);
  });
  socket.emit(channel, { message: "ping" });
}, [channel]); */
