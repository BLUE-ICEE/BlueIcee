let currentRealm = 'general';

/* LOAD */

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

  if (data) {

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

}

/* SEND */

async function sendMessage() {

  const input =
    document.getElementById('messageInput');

  const text = input.value;

  if (!text) return;

  const {
    data: { user }
  } =
    await supabaseClient.auth.getUser();

  await supabaseClient
    .from('messages')
    .insert([{

      text: text,

      username:
        user.email,

      realm:
        currentRealm

    }]);

  input.value = '';

  loadMessages();

}

/* REALM SWITCH */

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

    payload => {

      loadMessages();

    }
  )

  .subscribe();

loadMessages();
