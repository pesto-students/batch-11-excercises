const request = require('supertest');
const app = require('./index');



describe('Test the / path', () => {
    test('It should response the GET method', (done) => {
        request(app)
        .get('/')
        .then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('should return message', function() {
        return request(app)
            .get('/')
            .then(function(response){
                expect(response.text).toBe('Hey, I am server response');
            })
    });
});