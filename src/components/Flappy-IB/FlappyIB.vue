<script setup>
import { ref, onMounted } from 'vue';

const iframeRef = ref(null);

onMounted(() => {
    // 确保 iframe 占满整个屏幕
    if (iframeRef.value) {
        iframeRef.value.focus();
    }
});
</script>

<template>
    <div class="iframe-container">
        <iframe
            ref="iframeRef"
            src="/flappy-ib.html"
            frameborder="0"
            allowfullscreen
        ></iframe>
    </div>
</template>

<style scoped>
.iframe-container {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
}

iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
}
</style>
