<script setup lang="ts">
const appConfig = useAppConfig();

definePageMeta({
  hideSidebar: false,
  sidebarContent: 'search',
  contentMain: false,
  menuTitle: 'Welcome!',
  returnTo: '/'
});

useSeoMeta({
  title: appConfig.siteName
});
</script>

<template lang="pug">
h1 ようこそ
p このアプリは物理基礎・物理の内容を辞書にまとめたものです．
p 左の検索ボックスに何か入力してみてください．
</template>
