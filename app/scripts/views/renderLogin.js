import $ from 'jquery';

const contentBox = $('.main-content');

export default function(user, session) {

  //variable for sign up toggle
  let newUser = true;

  let toggle = $(`<div class="toggle"></div>`);
  let buttonToggle = $(`<div="button-toggle"></div>`);

  let login = $(`<h1 class="login">Login</h1>`);
  let signUp = $(`<h1 class="signUp">Sign Up</h1>`);

  let form = $(`
    <form class="login-signup">
      <input type="text" class="name" name="name" placeholder="Name" value="">
      <input type="text" name="email" placeholder="Email" value="">
      <input type="password" name="password" placeholder="Password" value="">
    </form>`);

  toggle.append(login, signUp, form);

  form.append(buttonToggle.append(`<input type="submit" name="submit" class="submit" value="Register">`));

  //click handling for registering different form options
  login.on('click', () => {
    $('.name').hide();
    buttonToggle.empty();
    buttonToggle.append(`<input type="submit" name="submit" class="submit" value="Log In">`);
    newUser = false;
  });

  signUp.on('click', () => {
    $('.name').show();
    buttonToggle.empty();
    buttonToggle.append(`<input type="submit" name="submit" class="submit" value="Register">`);
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

  // return contentBox.append(form);
  return toggle;

}
