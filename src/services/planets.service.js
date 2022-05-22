const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const { CONSTANTS } = require('../config/constants');

const createPlanetInDB = async (data) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();
    const id = v4();

    const planet = {
        id,
        ...data,
        createdAt,
        updatedAt,
    }

    await dynamodb
        .put({
            TableName: CONSTANTS.PLANET_TABLE,
            Item: planet,
        })
        .promise();
    return planet;
}

const listPlanetsFromDB = async () => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const result = await dynamodb.scan({ TableName: CONSTANTS.PLANET_TABLE }).promise();
    const planets = result.Items;
    return planets;
}

module.exports = {
    createPlanetInDB,
    listPlanetsFromDB
}
