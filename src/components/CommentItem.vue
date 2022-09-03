<template>
    <!-- 用户信息 -->
    <div class="flex">
        <!-- vite2.0 要求使用绝对路径 /可表示public目录-->
        <!-- 用户头像 -->
        <img :src="avatar" alt=""
        class="w-12 h-12 mr-4 rounded-full"
        />
        <!-- 发布时间 -->
        <div>
        <p>{{user}}</p>
        <p class="text-gray-600 text-sm">{{timer}}</p>
        </div>
        <!-- 菜单ml-auto在flex布局下可实现右对齐 -->
        <span class="ml-auto">
        <svg t="1662101231992" class="icon h-5 w-5 text-gray-500" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2371">
            <path d="M512 0a113.778 113.778 0 0 0-113.778 113.778A113.778 113.778 0 0 0 512 227.556a113.778 113.778 0 0 0 113.778-113.778A113.778 113.778 0 0 0 512 0zM398.222 910.222A113.778 113.778 0 0 0 512 1024a113.778 113.778 0 0 0 113.778-113.778A113.778 113.778 0 0 0 512 796.444a113.778 113.778 0 0 0-113.778 113.778z m0-398.222A113.778 113.778 0 0 0 512 625.778 113.778 113.778 0 0 0 625.778 512 113.778 113.778 0 0 0 512 398.222 113.778 113.778 0 0 0 398.222 512z" p-id="2372">
            </path>
        </svg>
        </span>
    </div>
    <p class="text-gray-600 py-4">
        {{content}}
    </p>
</template>
<script setup>
    defineProps(["user","avatar","time","content"]);
</script>
<style></style>