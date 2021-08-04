const Koa = require("koa");
const router = require("./src/router");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const mongoose = require('mongoose');
const config = require("config");

mongoose.connect(config.mongo, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

mongoose.connection.on('connected', () => {
	console.log(`Mongoose default connection to: ${config.mongo}`);
});

app.listen(9007, () => {
  console.log(`http server listen on port 9007`);
});
