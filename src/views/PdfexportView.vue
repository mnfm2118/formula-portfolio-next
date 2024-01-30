<script setup>
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

  function createPDF() {
    const source = document.getElementById('capture')
    html2canvas(source).then(capture => {
      const imgData = capture.toDataURL('image/png')
      const doc = new jsPDF()
      const width = doc.internal.pageSize.width
      doc.addImage(imgData, 'PNG', 10, 10, width * 0.9, 0)
      doc.save("sample.pdf")
    })
  }
</script>

<template>

    <button class="btn btn-primary pl-5 pr-5" @click="createPDF">Download PDF</button>
  
  </template>

  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>