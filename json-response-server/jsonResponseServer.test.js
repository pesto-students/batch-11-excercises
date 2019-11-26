import http from 'http';
import { jsonResponseServer } from './jsonResponseServer';


describe('jsonResponseServer', () => {
  beforeAll(() => {
    jsonResponseServer.listen(3001);
  });

  afterAll(() => {
    jsonResponseServer.close();
  });

  describe('/', () => {
    test('should return 200', (done) => {
      http.get('http://localhost:3001', (res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    it('should respond with json', (done) => {
      http.get('http://localhost:3001', (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          expect({ data: 'Pesto Bootcamp!' }).toEqual(JSON.parse(data));
          done();
        });
      });
    });
  });
});
