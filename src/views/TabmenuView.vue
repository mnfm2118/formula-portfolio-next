<script setup>

const items = [
  { title: 'トップ', path: '/' },
  { title: 'テキスト', path: '/edit_Js' },
  { title: 'データ', path: '/save_data' },
  { title: 'Pdf化', path: '/pdf_export' },
  { title: 'ログイン', path: '/sign_in' },
  { title: 'ログアウト', path: '/sign_out' },
  { title: '登録', path: '/sign_up' },
  { title: 'ヘルプ', path: '/help_page' },
]
</script>

<template>
    <div>
      <ol>
        <li v-for="(item, index) in items" :key=index>
           <router-link v-bind:to=item.path>
              {{ item.title }}
           </router-link>
        </li>
      </ol>
    </div>
</template>

<style scoped>

ol {
  margin-left: auto;
  width: 800px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 80px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 14px;
  background-color: skyblue;
  border-radius: 8px;
  position: relative;
  white-space: nowrap;
}

li:hover {
  opacity: 0.4;
}

a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}

</style>