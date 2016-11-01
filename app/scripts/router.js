import $ from 'jquery';
import Backbone from 'backbone';

// import viewName from './views/name';
import renderLogin from './views/renderLogin';
import renderRolodex from './views/renderRolodex';
import renderAddContact from './views/renderAddContact';

// import CollectionName from './collections/name';

// import ModelName from './models/name';
import Session from './models/Session';
import Contacts from './collections/Contacts';

let session = new Session();
let contacts = new Contacts();

const contentBox = $('.main-content');

const Router = Backbone.Router.extend({
  routes: {
    ''        : 'home',
    'rolodex' : 'rolodex'
  },
  home() {
    // console.log('hello mother');
    if (session.get('user-token')) {
      this.navigate('rolodex', {trigger: true});
    } else {
      contentBox.empty();
      contentBox.append(renderLogin(session));
    }
  },
  rolodex() {
    // console.log('hello father');
    if (session.get('user-token')) {
      contentBox.empty();
      contentBox.append(renderRolodex());
      contentBox.append(renderAddContact(contacts, session));
    } else {
      this.navigate('', {trigger: true});
    }
  }
});

var router = new Router();

export default router;
