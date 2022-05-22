

const middy = require('@middy/core');
const httpJSONBodyParser = require('@middy/http-json-body-parser');
const { validateCreatePlanet } = require('../../services/planets.validate');
const { createPlanetInDB } = require('../../services/planets.service');

const createPlanet = async (event) => {
    validateCreatePlanet(event.body);
    const data = await createPlanetInDB(event.body);
    
    return {
        statusCode: 201,
        body: JSON.stringify(data),
    };
}

module.exports = {
    createPlanet: middy(createPlanet).use(httpJSONBodyParser()),
};
