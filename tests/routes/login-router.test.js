const sinon = require('sinon');
const { expect } = require('chai');

class LoginRouter{
  route (httpRequest) {
    if(!httpRequest.body.email || !httpRequest.body.password){
      return {
        statusCode: 400,
        body: 'Dados inválidos'
      }
    }
    
  }
}


describe('Login Router', () => {
  it('Se não enviar email retorna 400', () => {
    const sut = new LoginRouter();
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest);
    expect(httpResponse.statusCode).to.be.equal(400);
  })
    it('Se não enviar password retorna 400', () => {
    const sut = new LoginRouter();
    const httpRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = sut.route(httpRequest);
    expect(httpResponse.statusCode).to.be.equal(400);
  })
})
