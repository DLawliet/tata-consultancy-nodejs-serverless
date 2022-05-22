# Serveless en Nodejs desplegado en AWS
Estes es un proyecto de serverless, donde se realizó un clon de la api [SWAPI](https://swapi.dev/).
Esta api está desplegado en AWS Lambda con un Api Gateway y conectado 
a un base de datos DynamoDB.


# Instalación de dependencias
tener instalado Java SDK para ejecutar DynamoDB y NodeJS v14
```bash
npm install -g serveless
npm install
serverless dynamodb install
serverless dynamodb migrate
```

# Ejecución en local
```bash
npm run start
```

# Generar documentacion de openapi
```bash
npm run openapi
```

# Desplegar en aws
```bash
npm run deploy
```

# Endpoints
- DOCS - https://ykj8fcf93h.execute-api.us-west-2.amazonaws.com/dev/api-docs
- POST - https://ykj8fcf93h.execute-api.us-west-2.amazonaws.com/dev/api/planets
- GET - https://ykj8fcf93h.execute-api.us-west-2.amazonaws.com/dev/api/planets
