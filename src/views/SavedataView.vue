<script setup>
import {
  getFirestore, collection, query, where, getDocs,
} from 'firebase/firestore';
import app from '../lib/firebase';
import EditJs from './EditjsView.vue';
import useSessionStore from '../stores/session';
import {ref, onMounted} from 'vue';

const db = getFirestore(app);

const docs = ref([])
const document = ref({})

  async function getdocuments() {
    console.log(JSON.parse(localStorage.getItem('user')).uid);
    const store = useSessionStore();
    const q = query(collection(db, 'documents'), where('uid', '==', JSON.parse(localStorage.getItem('user')).uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.value.push(doc.data());
      console.log(doc);
    });
  }
  function loadDocument(index) {
    document.value = docs.value[index].body;
    EditJs.sync();
  }
onMounted(() => {
  getdocuments();
})


</script>

<template>
  <div class="text">
    <div>
      <ul>
        <li
        v-for= "(i,index) in this.docs"
        :key = index >
          <v-btn @click = "loadDocument(index)">
            {{ i.body.blocks[0].id }}
          </v-btn>
        </li>
      </ul>
    </div>

    <EditJs ref="EditJs" :document = document></EditJs>

  </div>
</template>