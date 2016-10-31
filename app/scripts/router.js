import $ from 'jquery';
import Backbone from 'backbone';

// import viewName from './views/name';
import renderLogin from './views/renderLogin';
// import CollectionName from './collections/name';

// import ModelName from './models/name';
import User from './models/User';

let user = new User();

const Router = Backbone.Router.extend({
  routes: {
    ''        : 'home',
    'rolodex' : 'rolodex'
  },
  home() {
    console.log('hello mother');
    renderLogin(user);
  },
  rolodex() {
    console.log('hello father');
  }
});

var router = new Router();

export default router;
