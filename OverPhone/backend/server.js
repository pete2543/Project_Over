let express = require("express"),
    cors = require('cors'),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

// Connect MongoDB
const DATABASE_URL =
  process.env.DATABASE_URL ||"mongodb://admin:CLEofl53730@node31225-overphone.app.ruk-com.cloud:11333";
 mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
//app.use(express.json());

const studentAPI = require("../backend/routes/student.route");
app.use("/api", studentAPI);

app.listen(5000, () => console.log("Server Started"));
//mongodb://admin:CLEofl53730@node31225-overphone.app.ruk-com.cloud:11333