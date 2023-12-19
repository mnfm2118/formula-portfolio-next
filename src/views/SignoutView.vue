<script setup>
import { getAuth, signOut } from 'firebase/auth';
import app from '../lib/firebase';

const auth = getAuth(app);

function logout() {
  signOut(auth).then(() => {
    // SIGNIN画面に遷移
    window.location.href = '/sign_in';
  })
    .catch(() => {
      alert('ログアウトerror');
    });
}
</script>

<template>
    <div>
      <h1>SIGN OUT</h1>
      <v-container>
        <div>
          <v-btn
            block
            color="white"
            elevation="9"
            x-large
            @click="$router.go(-1)">
            戻る
          </v-btn>
        </div>
        <br>
        <div>
          <v-btn
            block
            color="red"
            elevation="9"
            x-large
            @click="logout()">
            SIGN OUT!!
          </v-btn>
        </div>
      </v-container>
    </div>
  </template>