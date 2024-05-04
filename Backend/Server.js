const express = require("express")
const connectDb = require("./Config/database.js");
const cors = ('cors');
const bodyParser = ('body-parser');
const DemoRoutes = ('./routes/DemoRoutes.js');
const app = express();
const PORT = 80;


// call the database connection function
connectDb();

// app.use(cors());
// app.use(bodyParser.json());

app.use('/api/user', DemoRoutes)




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
