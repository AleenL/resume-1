<template>
  <div class="page flexCol articles">
    <h1 class="title">{{ $store.state.data.route[id] }}</h1>
    <div class="pagebody">
      <a
        class="article"
        v-for="(article, i) in $store.state.data.website.art"
        :key="i"
        :href="article.url"
        target="_blank"
      >
        <h2 class="articleTitle">{{ article.title }}</h2>
        <p class="thumb">{{ article.thumb }}</p>
        <div class="showInfo">
          <p class="flexRow allCenter time">
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18">
              <path d="M890.12736 145.672192 846.738432 145.672192l0-12.89216c0-38.643712-31.466496-70.234112-69.922816-70.234112l-1.031168 0c-38.458368 0-69.922816 31.5904-69.922816 70.234112l0 12.89216L319.162368 145.672192l0-12.89216c0-38.643712-31.465472-70.234112-69.922816-70.234112l-1.062912 0c-38.45632 0-69.922816 31.5904-69.922816 70.234112l0 12.89216-43.295744 0c-38.458368 0-69.922816 31.622144-69.922816 70.206464l0 671.446016c0 38.644736 31.465472 70.23616 69.922816 70.23616l755.16928 0c38.458368 0 69.922816-31.591424 69.922816-70.23616L960.050176 215.878656C960.050176 177.294336 928.585728 145.672192 890.12736 145.672192zM733.830144 132.779008c0-23.222272 18.792448-42.138624 41.954304-42.138624l1.031168 0c23.130112 0 41.954304 18.917376 41.954304 42.138624l0 124.926976c0 23.22432-18.824192 42.139648-41.954304 42.139648l-1.031168 0c-23.161856 0-41.954304-18.915328-41.954304-42.139648L733.830144 132.779008zM206.22336 132.779008c0-23.222272 18.792448-42.138624 41.954304-42.138624l1.062912 0c23.098368 0 41.954304 18.917376 41.954304 42.138624l0 124.926976c0 23.22432-18.855936 42.139648-41.954304 42.139648l-1.062912 0c-23.161856 0-41.954304-18.915328-41.954304-42.139648L206.22336 132.779008zM890.12736 901.404672l-755.16928 0c-7.584768 0-13.984768-6.524928-13.984768-14.08L120.973312 393.649152l783.137792 0 0 493.67552C904.111104 894.879744 897.712128 901.404672 890.12736 901.404672z"></path>
              <path d="M223.755264 494.199808l129.024 0 0 63.488-129.024 0 0-63.488Z"></path>
              <path d="M449.035264 494.199808l128 0 0 63.488-128 0 0-63.488Z"></path>
              <path d="M673.291264 494.199808l125.952 0 0 63.488-125.952 0 0-63.488Z"></path>
              <path d="M223.755264 623.223808l129.024 0 0 62.464-129.024 0 0-62.464Z" ></path>
              <path d="M449.035264 623.223808l128 0 0 62.464-128 0 0-62.464Z"></path>
              <path d="M673.291264 623.223808l125.952 0 0 62.464-125.952 0 0-62.464Z"></path>
              <path d="M223.755264 749.175808l129.024 0 0 65.536-129.024 0 0-65.536Z"></path>
              <path d="M449.035264 749.175808l128 0 0 65.536-128 0 0-65.536Z"></path>
              <path d="M673.291264 749.175808l125.952 0 0 65.536-125.952 0 0-65.536Z"></path>
            </svg>
            <span>{{ article.time }}</span>
          </p>
          <p class="flexRoe allCenter view">
            <img src="http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/view.png" alt="">
            <span>{{ article.view }}</span>
          </p>
        </div>

      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'articles',
  props: ['id']
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
