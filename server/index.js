require("dotenv").config();
const colors = require("colors");
const cors = require("cors");

const express = require("express");
const app = express();

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const connectDB = require("./config/db");

app.use(cors());

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === "development",
    })
);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
