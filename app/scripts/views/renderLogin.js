import $ from 'jquery';

const contentBox = $('.main-content');

export default function(user) {

  let newUser = true;

  let toggle = $(`
    <div class="toggle">
    </div>
    `);

  let login = $(`<h1>Login</h1>`);
  let signUp = $(`<h1>Sign Up</h1>`);

  toggle.append(login, signUp);

  let form = $(`
    <form class="login-signup">
      <input type="text" class="name" name="name" placeholder="Name" value="">
      <input type="text" name="email" placeholder="Email" value="">
      <input type="text" name="password" placeholder="Password" value="">
      <input type="submit" name="submit" value="Log In">
    </form>`);

  login.on('click', () => {
    $('.name').hide();
    newUser = false;
  });

  signUp.on('click', () => {
    $('.name').show();
    newUser = true;
  });

  form.on('submit', (e) => {
    e.preventDefault();
    let email = $(form).find('input[name="email"]').val();
    let password = $(form).find('input[name="password"]').val();
    let name = $(form).find('input[name="name"]').val();
    if (newUser){
      user.register(email, password, name);
    } else {
      user.login(email, password);
    }
  });

  return contentBox.append(toggle, form);

}
