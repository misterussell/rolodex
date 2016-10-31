import $ from 'jquery';

import User from '../models/User';

const contentBox = $('.main-content');

let user = new User();

export default function() {

  let toggle = $(`
    <div class="toggle">
    </div>
    `);

  let login = $(`<h1>Login</h1>`);
  let signUp = $(`<h1>Sign Up</h1>`);

  toggle.append(login, signUp);

  let form = $(`
    <form class="login-signup">
      <input type="text" class="name" placeholder="Name" value="">
      <input type="text" name="email" placeholder="Email" value="">
      <input type="text" name="password" placeholder="Password" value="">
      <input type="submit" name="submit" value="Log In">
    </form>`);

  login.on('click', () => {
    $('.name').hide();
  });

  signUp.on('click', () => {
    $('.name').show();
  });

  form.on('submit', (e) => {
    e.preventDefault();
    let email = $(form).find('input[name="email"]').val();
    let password = $(form).find('input[name="password"]').val();
    user.register(email, password);
    console.log('Form submit');
  });

  return contentBox.append(toggle, form);

}
