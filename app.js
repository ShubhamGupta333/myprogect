const express = require("express");
const res = require("express/lib/response");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const PORT = process.env.PORT || 4000;

const swaggerOptions ={
    swaggerDefinition:{
        info: {
            title: "Project API",
            description: "Project API Integretion in Swagger UI",
            contact: {
                name: "Shubham Gupta",
                email: "sg945133@gmail.com"
            },
            servers: ["https://localhost:4000"]
        }
    },
    apis: ["app.js"]
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Routes
/**
 * @swagger
 * /users:
 *  get:
 *    description: Use to request all users
 *    responses:
 *      '200':
 *       description: A Succesxful Response
 */
app.get('/users', (req, res)=>{
    res.send('Hii Shubham')
});

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
})


