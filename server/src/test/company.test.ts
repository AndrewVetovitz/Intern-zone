import request from 'supertest';
import { app } from '../app';

describe('GET /api/company/all', () => {
    it('should return 200 OK', () => {
        return request(app).get('/api/company/all')
            .expect(200);
    });
});
