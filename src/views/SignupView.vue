<script setup>
  
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  import app from '../lib/firebase'
  import { ref } from 'vue' 
  
  const auth = getAuth(app)
  const email = ref('')
  const password = ref('')

  // function activateSubmit() {
  //   if (password.value.length >= 10) {
  //     return false;
  //   }
  //   return true;
  // }

function registerUser() {
createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
    window.location.href = '';
    alert('success', res);
    })
    .catch(() => {
    alert('error');
    });
}
  
  </script>

<template>
    <v-app>
      <h1>SIGN UP</h1>
      <v-container>
        <v-row>
          <v-row>
            <h2>E-mail</h2>
          </v-row>
          <v-row>
          <v-text-field type="email" label="*****@mail.com" v-model="email" />
          </v-row>
        </v-row>
        <div>
          <h2>Password</h2>
          <v-row>
            <v-col cols="1" md="12">
              <v-form>
                <v-text-field
                  type="password"
                  label="(10文字以上)"
                  v-model="password"
                  :counter="10"
                  
                />
              </v-form>
            </v-col>
          </v-row>
          <v-row>
            <v-btn class="mr-auto" id="btn_passiview" >表示</v-btn>
          </v-row>
        </div>
        <br>
        <v-row>
          <v-btn
            @click="registerUser"
            color="red"
            elevation="9"
            block
            x-large
           
          > Sign UP!!  </v-btn>
        </v-row>
      </v-container>
    </v-app>
    </template>
  
  