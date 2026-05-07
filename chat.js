let currentRealm = 'general';

/* LOAD MESSAGES */

async function loadMessages() {

  const chat =
    document.getElementById('chatMessages');

  chat.innerHTML = '';

  const { data, error } =
    await supabaseClient
      .from('messages')
      .select('*')
      .eq('realm', currentRealm)
      .order('created_at', {
        ascending: true
      });

  if (error) {

    console.error(error);

    return;

  }

  data.forEach(msg => {

    const div =
      document.createElement('div');

    div.className = 'message';

    div.innerHTML = `
      <strong>${msg.username}</strong>
      <p>${msg.text}</p>
    `;

    chat.appendChild(div);

  });

}

/* SEND MESSAGE */

async function sendMessage() {

  const input =
    document.getElementById('messageInput');

  const text =
    input.value.trim();

  if (!text) return;

  /* CHECK USER */

  const {
    data: { user },
    error: userError
  } =
    await supabaseClient.auth.getUser();

  if (!user) {

    alert(
      'You must login first ❄️'
    );

    return;

  }

  /* INSERT MESSAGE */

  const { error } =
    await supabaseClient
      .from('messages')
      .insert([{

        text: text,

        username:
          user.email,

        realm:
          currentRealm

      }]);

  if (error) {

    console.error(error);

    alert(
      'Message failed to send'
    );

    return;

  }

  input.value = '';

  loadMessages();

}

/* SWITCH REALM */

function switchRealm(realm) {

  currentRealm = realm;

  loadMessages();

}

/* REALTIME */

supabaseClient
  .channel('messages-channel')

  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'messages'
    },

    () => {

      loadMessages();

    }
  )

  .subscribe();

/* INITIAL LOAD */

loadMessages();
