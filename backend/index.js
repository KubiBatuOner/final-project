const server = require("./server");
const { PORT } = require("./config/index");

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
