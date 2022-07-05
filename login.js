const express = require('express');
const router = require('express').Router();


module.exports = () => {
  router.post('/signup', ExpressRouterAdapter.adapt(router));
};

class ExpressRouterAdapter {
  static adapt (router) {
    return async (req, res) => {
      const httpResquest = {
        body: req.body,
      }
      const httpResponse = await router.route(httpResquest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    }
  }
}

// SignUpRouter
// Presentation: SignUpRouter


class SignUpRouter {
  async route(httpRequest) { 
    const { emai, password, repeatPassword } = req.body;
    const user = new SignUpUseCase().signUp(email, password, repeatPassword);
    return {
      statusCode: 200,
      body: JSON.stringify(user)
    }
  }
};

// SignUpUseCase
// Domain: SignUpUseCase
class SignUpUseCase {
  async signUp(emai, password, repeatPassword) { 
    if (password === repeatPassword) { 
      new AddAccountRepository().add(emai, password);
    }      
  }
}; 

//addAccountRepo
// Infrastructure: addAccountRepo
const mongoose = require('mongoose');
const AccountModel = mongoose.model('Account');

class AddAccountRepository{
  async add (emai, password, repeatPassword) {
    const user = await AccountModel.creat({ emai, password });
    return user;
  }
}