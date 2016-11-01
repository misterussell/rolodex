import Backbone from 'backbone';

import contact from '../models/Contact';

export default Backbone.Collection.extend({
  model: contact,
  url: 'https://api.backendless.com/v1/data/Contacts',
  parse(data) {
    console.log(data.data);
    return data.data;
  }
});
