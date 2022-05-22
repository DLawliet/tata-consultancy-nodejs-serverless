const AWS = require("aws-sdk");
const { CONSTANTS } = require('../../config/constants');
const { listPlanetsFromDB } = require("../../services/planets.service");

const listPaginate = async () => {
  const planets = await listPlanetsFromDB();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        planets,
      },
      null,
      2
    ),
  };
};

module.exports = {
  listPaginate
};
