<template>
    <!-- 输入评论 -->
    <form action="" class="grid" @submit="handleSubmit">
            <textarea 
                v-model="content"
                name="comment" 
                id="" 
                placeholder="请输入你的评论" 
                class="bg-gray-100 p-2 rounded">
            </textarea>
            <fieldset class="py-4">
                <input 
                type="submit"
                value="评论"
                class="px-4 py-1 bg-blue-600 rounded text-white"
                />
                <input 
                type="reset"
                value="取消"
                class="px-4 py-1 bg-white rounded border ml-3"
                />
            </fieldset>
            </form>
</template>
<script setup>
    import {ref} from "vue";
    const content=ref("");
    // 把表单的数据 传入到父组件中 emit 就是告诉父组件我会触发什么事件
    // defineEmits会返回一个函数 在真正触发事件的地方调用到 
    // 他就会把事件转发到使用这个组件的其他组件中
    const emit=defineEmits(["submit"]);
    const handleSubmit=(e)=>{
        // 阻止表单默认提交事件
        e.preventDefault();
        emit("submit",content.value);
        content.value="";
    };
</script>
<style></style>