<script setup>
import {
  getFirestore, collection, query, where, getDocs,
} from 'firebase/firestore';
import app from '../lib/firebase';
import EditJs from './EditjsView.vue';
import useSessionStore from '../stores/session';
import {ref, onMounted} from 'vue';
import MathJax from'../components/MathJax.vue';

const db = getFirestore(app);

const docs = ref([])

  async function getdocuments() {
    const store = useSessionStore();
    const q = query(collection(db, 'documents'), where('uid', '==', JSON.parse(localStorage.getItem('user')).uid));
    const querySnapshot = await getDocs(q);
   console.log(querySnapshot);
   console.log(JSON.parse(localStorage.getItem('user')));
    querySnapshot.forEach((doc) => {
      docs.value.push(doc.data());
    });
  }
  function loadDocument(index) {
    document.getElementById("formula").value = docs.value[index].body;
  }
onMounted(() => {
  getdocuments();
})


</script>

<template>
  <div class="text">
    <v-app>
      <div>
        <ul>
          <li
          v-for= "(i,index) in docs"
          :key = index >
            <v-btn @click = "loadDocument(index)">
              {{ i.body.slice(0, 5) }}
            </v-btn>
          </li>
        </ul>
      </div>
      
      <MathJax></MathJax>
    </v-app>
  </div>
</template>