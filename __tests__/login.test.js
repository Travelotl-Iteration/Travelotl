/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
const request = require('supertest');
const server = 'http://localhost:3000'

/*
res.locals.user = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    };
*/

describe('/api/users', () => {
  describe('POST /login', () =>{
    it('responds with status code 200 and user object', async () => {
      const response = await request(server)
        .post('/api/users/login')
        .send({ email: 'will.suto@gmail.com', password: '123'})
        .expect(200)
        .expect('Content-Type', /application\/json/);
        expect(response.body).toHaveProperty('email');
    });
  });

  describe('GET /logout', () => {
    it('responds with 200', () => {
      return request(server)
        .get('/api/users/logout')
        .expect(200);
    })
  })
});