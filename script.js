console.log("Blue Icee Loaded ✨");

/* THEMES */

function setTheme(theme) {

  const body = document.body;

  if (theme === 'dark') {

    body.style.background =
      'linear-gradient(to bottom, #07131f, #0b1f2f, #10354d, #155170)';

  }

  if (theme === 'frost') {

    body.style.background =
      'linear-gradient(to bottom, #122638, #1f4561, #35779c, #6dcfff)';

  }

  if (theme === 'aurora') {

    body.style.background =
      'linear-gradient(to bottom, #120b25, #1d3b52, #27696f, #55d6c2)';

  }

  if (theme === 'pink') {

    body.style.background =
      'linear-gradient(to bottom, #2a1630, #52305d, #9158a1, #ff9ed6)';

  }

}

/* MODAL */

function openLogin() {

  document
    .getElementById('loginModal')
    .style.display = 'flex';

}

function closeLogin() {

  document
    .getElementById('loginModal')
    .style.display = 'none';

}

/* CLOSE IF CLICK OUTSIDE */

window.onclick = function(event) {

  const modal =
    document.getElementById('loginModal');

  if (event.target === modal) {

    closeLogin();

  }

}

/* SIGN UP */

async function signup() {

  const email =
    document.getElementById('email').value;

  const password =
    document.getElementById('password').value;

  const { data, error } =
    await supabaseClient.auth.signUp({

      email: email,
      password: password

    });

  if (error) {

    alert(error.message);

  } else {

    alert('Account created successfully ✨');

    closeLogin();

  }

}

/* LOGIN */

async function login() {

  const email =
    document.getElementById('email').value;

  const password =
    document.getElementById('password').value;

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({

      email: email,
      password: password

    });

  if (error) {

    alert(error.message);

  } else {

    alert('Logged in successfully ❄️');

    closeLogin();

  }

}
