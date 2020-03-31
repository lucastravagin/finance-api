const app = require('../../src/app')

const request = require('supertest')

const email = `${Date.now()}@mail.com`

test('Deve Listar Todos os usuários', () => {
    return request(app).get('/users')
        .then((res) => {
            expect(res.status).toBe(200) //Verificar se o retorno da resposta foi 200 - ok
            expect(res.body.length).toBeGreaterThan(0)
        })
})

test('Deve inserir usuário com sucesso', () => {
    return request(app).post('/users')
        .send({ name: 'Walter Mitty', mail: email, password: '123456' })
        .then((res) => {
            console.log(res.body)
            expect(res.status).toBe(201)
            //expect(res.body.name).toBe('Walter Mitty')
        })
})

test('Não deve inserir usuário sem nome', () => {
    return request(app).post('/users')
        .send({ mail: 'lucas@email.com', password: '123456' })
        .then((res) => {
            expect(res.status).toBe(400)
            expect(res.body.error).toBe('Nome é um atriburo obrigatório')
        })
})

test('Não deve inserir usuário sem e-mail', async () => {
    const result = await request(app).post('/users')
        .send({ name: 'Walter Mitty', password: '123456' })
    expect(result.status).toBe(400)
    expect(result.body.error).toBe('Email é um atriburo obrigatório')
})

test('Não deve inserir um usuário sem senha', (done) => {
    request(app).post('/users')
        .send({ name: 'Walter Mitty', mail: 'email@email.com' })
        .then(res => {
            expect(res.status).toBe(400)
            expect(res.body.error).toBe('Senha é um atriburo obrigatório')
            done()
        })
        .catch(err => done.fail(err))
})

test('Não deve inserir usuário com e-mail já existente', () => {
    return request(app).post('/users')
        .send({ name: 'Walter Mitty', mail: email, password: '123456' })
        .then((res) => {
            expect(res.status).toBe(400)
            expect(res.body.error).toBe('Já existe um usuário com esse e-mail')
        })
})