const Joi = require('joi');

const schemaCreatePlanet = Joi.object({
    clima: Joi.string()
        .min(3)
        .required(),
    diametro: Joi.string()
        .regex(/^\d+$/)
        .required()
});


const validateCreatePlanet = (request) => {
    const result = schemaCreatePlanet.validate(request);
    const { error } = result;
    if (error) {
        throw Error(error);
    }
    return result;
}

module.exports = {
    validateCreatePlanet,
};
