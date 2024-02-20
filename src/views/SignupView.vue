<script setup>
  
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  import app from '../lib/firebase'
  import { ref } from 'vue' 
  import emailjs from '@emailjs/browser'
  
  const auth = getAuth(app)
  const email = ref('')
  const password = ref('')

  const emailRules = [
    value => {
      if (value) return true;

      return 'Email is required.'
    },
    value => {
      if (/.+@.+\..+/.test(value)) return true;

      return 'E-mail must be valid'
    },
  ]

  const passwordRules = [
    value => {
      if (value) return true
      return 'password is required.'
    },
    value => {
      if (value?.length >= 10) return true

      return 'password must be more than 10 characters.'
    }
  ]

  const form = ref(null);

  async function registerUser() {
    const validation = await form.value.validate();
    if(validation.valid) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((res) => {
        sendEmail();
        window.location.href = '';
        alert('success', res);
      })
      .catch(() => {
        alert('error');
      });
    } else {
      alert('invalid')
    }
  }
 async function sendEmail() {
  const result = await emailjs
        .sendForm('service_dom8so7', 'template_9z9zoko', {email: email.value}, {
          publicKey: 'x8RPL9Ywhkedasal-',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        )
  }
  
</script>

<template>
    <v-app>
      <h1>SIGN UP</h1>
      <v-form ref="form">
        <v-container>
          <h2>E-mail</h2>
          <v-row> 
            <v-col>
              <v-text-field 
                type="email" 
                label="*****@mail.com" 
                v-model="email" 
                :rules="emailRules"
                hide-details= "auto"
                required
              />
            </v-col>
          </v-row>
          <h2>Password</h2>
          <v-row>
            <v-col>
              <v-text-field
                type="password"
                label="(10文字以上)"
                v-model="password"
                :counter="10"
                :rules="passwordRules"
                hide-details="auto"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-btn 
              class="mr-auto" 
              id="btn_passiview" 
            >
              表示
            </v-btn>
          </v-row>
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
      </v-form>
    </v-app>
    </template>
  
  