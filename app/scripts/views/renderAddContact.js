import $ from 'jquery';

import config from '../config';

export default function(contacts, session) {

  const form = $(`
    <form class="" action="index.html" method="post">
      <input type="text" name="firstName" placeholder="First Name" value="">
      <input type="text" name="lastName" placeholder="Last Name" value="">
      <input type="text" name="nickName" placeholder="Nickname" value="">
      <input type="email" name="email" placeholder="Email" value="">
      <input type="telephone" name="telephone" placeholder="Phone Number" value="">
      <input type="text" name="address" placeholder="Address" value="">
      <input type="submit" name="name" value="Add Contact">
    </form>
    `);

  form.on('submit', (e) => {
    e.preventDefault();
    let firstName = $(form).find('input[name="firstName"]').val();
    let lastName = $(form).find('input[name="lastName"]').val();
    let nickName = $(form).find('input[name="nickName"]').val();
    let email = $(form).find('input[name="email"]').val();
    let phoneNumber = $(form).find('input[name="telephone"]').val();
    let address = $(form).find('input[name="address"]').val();
    let Owner = session.get('ownerId');

    contacts.create(
      {
        firstName,
        lastName,
        nickName,
        email,
        phoneNumber,
        address,
      },
      {
        headers: {
          'application-id': config.appId,
          'secret-key': config.secret,
          'application-type': 'REST',
          'Content-Type': 'application/json',
          'user-token': session.get('user-token')
        },
        success() {
          alert('congrats. contact added!');
        }
      }
    );
  });

  return form;

}
