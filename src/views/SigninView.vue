<script setup>

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../lib/firebase';
import useSessionStore from '../stores/session';
import { ref } from 'vue';

const auth = getAuth(app);

const store = useSessionStore();

const email = ref('');
const password = ref('');

function login() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
      store.login(res.user);
      console.log(res);
      window.location.href = '/edit_js';
      alert(res);
    })
    .catch((e) => {
      alert('error');
      console.log('error', e);
    });
}

</script>

<template>

    <div>
      <h1>SIGN IN</h1>
      <v-container>
        <div>
          <h2>E-mail</h2>
          <v-text-field label="*****@mail.com" v-model="email" />
        </div>
        <div>
          <h2>Password</h2>
          <v-text-field
          v-model="password"/>
        </div>
        <v-btn @click="login"
        block
        color="red"
        elevation="9"
        x-large >
        SIGN IN!!
        </v-btn>
      </v-container>
    </div>
</template>