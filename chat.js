let currentRealm = 'general';

/* LOAD MESSAGES */

async function loadMessages() {

  const chat =
    document.getElementById(
      'chatMessages'
    );

  chat.innerHTML = '';

  const { data } =
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
    document.getElementById(
      'messageInput'
    );

  const text = input.value;

  if (!text) return;

  const {
    data: { user }
  } =
    await supabaseClient.auth.getUser();

  const username =
    user?.email || 'Guest';

  await supabaseClient
    .from('messages')
    .insert([{

      text: text,

      username: username,

      realm: currentRealm

    }]);

  input.value = '';

}

/* SWITCH REALM */

function switchRealm(realm) {

  currentRealm = realm;

  document.getElementById(
    'realmName'
  ).textContent = realm;

  loadMessages();

}

/* ONLINE USERS */

async function updateOnlineUser() {

  const {
    data: { user }
  } =
    await supabaseClient.auth.getUser();

  if (!user) return;

  await supabaseClient
    .from('online_users')
    .upsert([{

      email: user.email

    }]);

}

/* LOAD ONLINE USERS */

async function loadOnlineUsers() {

  const panel =
    document.querySelector(
      '.members-panel'
    );

  panel.innerHTML = `
    <div class="members-title">
      ONLINE
    </div>
  `;

  const { data } =
    await supabaseClient
      .from('online_users')
      .select('*');

  if (data) {

    data.forEach(user => {

      const div =
        document.createElement('div');

      div.className =
        'member-item';

      div.innerHTML = `
        <div class="member-avatar"></div>
        <span>${user.email}</span>
      `;

      panel.appendChild(div);

    });

  }

}

/* REALTIME */

supabaseClient
  .channel('messages-live')

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

supabaseClient
  .channel('online-live')

  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'online_users'
    },

    () => {

      loadOnlineUsers();

    }
  )

  .subscribe();

/* START */

updateOnlineUser();

loadMessages();

loadOnlineUsers();
