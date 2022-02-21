module.exports = (socket, data) => {
  socket.emit('chat', {
    isMe: true,
    name: data.name,
    message: data.message,
  });
  socket.broadcast.emit('chat', {
    name: data.name,
    message: data.message,
  });
}
