import $ from 'jquery';

const contentBox = $('.main-content');

export default function(user) {

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
    let phoneNumber = $(form).find('input[name="phoneNumber"]').val();
    let address = $(form).find('input[name="address"]').val();

    user.addContact(firstName, lastName, nickName, email, phoneNumber, address);

  });

  return contentBox.append(form);

}
