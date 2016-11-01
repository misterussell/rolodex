import Backbone from 'backbone';

import contact from '../models/Contact';

export default Backbone.Collection.extend({
  model: contact,
  url: 'https://api.backendless.com/v1/data/Contacts',
  parse(data) {
    return data.data;
  }
});
