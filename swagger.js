const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./main.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "API Hamburgueria",
        description: "Documentação gerada automaticamente pela API"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "body"
        },
    },    
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./main.js')
})