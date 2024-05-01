import app from "./app.js";
import { connectDB } from "./db.js";

const port = process.env.port || 8080;


connectDB();
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))