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
p このアプリはdict.digtal テンプレートの使い方を示したものです．
p 左の検索ボックスに何か入力してみてください．
</template>
