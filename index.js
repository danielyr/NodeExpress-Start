import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/example", exampleRoutes);

app.get("/", (req, res) => {
  res.send("Hello to example");
});

const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`));
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// mongoose.set("useFindAndModify", false);
