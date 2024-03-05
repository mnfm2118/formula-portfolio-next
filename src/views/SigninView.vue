<script setup>

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../lib/firebase';
import useSessionStore from '../stores/session';
import { ref } from 'vue';

const auth = getAuth(app);

const store = useSessionStore();

const email = ref('');
const password = ref('');

// const state = Vue.reactive({
  

// const requiredValidation = (value) => !!value || '必ず入力してください'

// const submit = () => {
//   state.success = true;
// }
//  return {
//   requiredValidation,
//   submit,
//  }


function login() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
      store.login(res.user);
      alert('success',res);
    })
    .catch((e) => {
      let message = "";
      switch(e.code) {
        case "auth/missing-password":
          message = "パスワードを入力してください";
          break;
        case "auth/invalid-credential":
          message = "メールアドレスまたはパスワードが違います";
          break;
        case "auth/invalid-email":
          message = "メールアドレスが無効です";
          break;
        default:
          message = "エラーが発生しました";
      }
      alert(message);
      console.log(e);
    });
}

</script>

<template>
  <v-app>
    <div>
      <h1>SIGN IN</h1>
      <v-container>
        <div>
          <h2>E-mail</h2>
          <v-text-field 
            label="*****@mail.com" 
            v-model="email" 
            :rules="[requiredValidation]"
          />
        </div>
        <div>
          <h2>Password</h2>
          <v-text-field 
            v-model="password" 
            :rules="[requiredValidation]"
          />
        </div>
        <v-btn @click="login"
          block
          color="red"
          elevation="9"
        x-large 
        >
          SIGN IN!!
        </v-btn>
      </v-container>
    </div>
  </v-app>
</template>