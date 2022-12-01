const express = require("express");
const app = express();
const product = require("./api/product");
const cors=require("cors")
app.use(cors())
app.use(express.json({ extended: false }));

app.use("/", product);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));