const app = require('../../src/app')

const request = require('supertest')

test('Deve Listar Todos os usuários', () => {
    return request(app).get('/users')
        .then((res) => {
            expect(res.status).toBe(200) //Verificar se o retorno da resposta foi 200 - ok
            expect(res.body.length).toBeGreaterThan(0)
        })
})

test('Deve inserir usuário com sucesso', () => {
    const email = `${Date.now()}@mail.com`
    return request(app).post('/users')
        .send({name: 'Walter Mitty', mail: email, password: '123456'})
        .then((res) => {
            console.log(res.body)
            expect(res.status).toBe(201)
            //expect(res.body.name).toBe('Walter Mitty')
        })
})