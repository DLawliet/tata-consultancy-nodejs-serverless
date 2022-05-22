const { validateCreatePlanet } = require('../../src/services/planets.validate');

describe('validateCreatePlanet', function() {
    test('request is correct', function() {
        const request = {
            clima: 'seco',
            diametro: '84384389'
        };
        const result = validateCreatePlanet(request);
        expect(result.value).toEqual(request);
        expect(result.error).toBeUndefined();
    })
    test('request with diameter error', function() {
        const request = {
            clima: 'seco',
            diametro: 'abc'
        };
        expect(() => {
            validateCreatePlanet(request)
        }).toThrow(/diametro/);
    })
}); 
