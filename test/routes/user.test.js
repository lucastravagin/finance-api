const app = require('../../src/app')

const request = require('supertest')

test('Deve Listar Todos os usuários', () => {
    return request(app).get('/users')
        .then((res) => {
            expect(res.status).toBe(200) //Verificar se o retorno da resposta foi 200 - ok
            expect(res.body).toHaveLength(1) //Verificar se o retorna da resposta veio com o tamanho do body > 1
            expect(res.body[0]).toHaveProperty('name', 'Jhon Doe') //Verificar 
        })
})

test('Deve inserir usuário com sucesso', () => {
    return request(app).post('/users')
        .send({name: 'Walter Mitty', mail: 'walter@admi.com.br'})
        .then((res) => {
            expect(res.status).toBe(201)
            expect(res.body.name).toBe('Walter Mitty')
        })
})