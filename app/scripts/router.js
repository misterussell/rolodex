import $ from 'jquery';
import Backbone from 'backbone';

// import viewName from './views/name';
import renderLogin from './views/renderLogin';
import renderRolodex from './views/renderRolodex';
import renderAddContact from './views/renderAddContact';

// import CollectionName from './collections/name';

// import ModelName from './models/name';
import User from './models/User';

let user = new User();

const contentBox = $('.main-content');

const Router = Backbone.Router.extend({
  routes: {
    ''        : 'home',
    'rolodex' : 'rolodex'
  },
  home() {
    console.log('hello mother');
    contentBox.empty();
    renderLogin(user);
  },
  rolodex() {
    console.log('hello father');
    contentBox.empty();
    renderRolodex();
    renderAddContact(user);
  }
});

var router = new Router();

export default router;
