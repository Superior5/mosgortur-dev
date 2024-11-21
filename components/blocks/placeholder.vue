<template>
  <div class="base-animate-placeholder"></div>
</template>
<style>
.base-animate-placeholder {
  display: inline-block;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
  top: 0;
  left: 0;
  cursor: progress;
  background-color: #59585978;
}

.base-animate-placeholder::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));
  animation: shimmer 2s infinite;
  content: '';
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
