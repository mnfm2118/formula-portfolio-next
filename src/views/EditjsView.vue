<script setup>
import {
  getFirestore, collection, addDoc, updateDoc, doc,
} from 'firebase/firestore';
import PdfExport from './PdfexportView.vue';
import MathJax from '../components/MathJax.vue';
import app from '../lib/firebase';
import doEditor from '../plugins/editor';
import useSessionStore from '../stores/session';
import { ref, defineProps, onMounted } from 'vue';

  const db = getFirestore(app);

  const store = useSessionStore();

  const props = defineProps({
    document:  {
      type: Object
    }
  })

  const editor = ref(null);

  async function saveDocument() {
    const outputData = document.getElementById("formula").value;
    ['time', 'version'].forEach((e) => delete outputData[e]);
    console.log(store.user.value);
    const docRef = await addDoc(collection(db, 'documents'), {
      body: outputData,
      uid: JSON.parse(localStorage.getItem('user')).uid
    });
    alert(docRef.id);

    const washingtonRef = doc(db, 'documents', 'DC');

    await updateDoc(washingtonRef, {
      capital: true,
    });
  }

  function sync() {
    editor.value = doEditor(props.document);
  }
  defineExpose({
    sync,
  })

  onMounted(() => {editor.value = doEditor(props.document)});

</script>

<template>
    <div>
      <div style=
      "padding: 10px;
      marigin-bottom: 10px;
      border: 1px solid #333333;"
      >
        <div id="editor"></div>
      </div>

     {{ props.document }}
     <MathJax></MathJax>
     {{ props.document }}
      <PdfExport></PdfExport>
  
      <button class="btn btn-primary pl-5 pr-5" @click="saveDocument">SAVE</button>
    </div>
  
  </template>