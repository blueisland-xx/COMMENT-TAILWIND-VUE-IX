<template>
    <main class="p-4 bg-gray-50 min-h-screen">
        <div class="max-w-screen-xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
            <h2 class="text-3xl my-6">评论</h2>
            <!-- 输入评论 -->
            <CommentBox @submit="addNewComment"/>
            <!-- 分割线 -->
            <DividerHorizontal/>
            <!-- 留言列表 -->
            <div v-for="comment in comments" :key="comment.id">
                <!-- 单个留言 -->
                <CommentItem
                    :user="comment.user"
                    :avatar="comment.avatar"
                    :time="comment.time"
                    :content="comment.content"
                />
                <!-- 回复列表 根据是否有replies属性来加载-->
                <ReplyContainer v-if="comment.replies">
                    <!-- ReplyBox预制了slot插槽 在这里放入 CommentItem-->
                    <CommentItem
                        v-for="reply in comment.replies" 
                        :key="reply.id"
                        :user="reply.user"
                        :avatar="reply.avatar"
                        :time="reply.time"
                        :content="reply.content"
                    />
                </ReplyContainer>
                <!-- 回复按钮  $event是ReplyBox里传递过来的内容 comment.id上级评论的id-->
                <ReplyBox @submit="addNewComment($event,comment.id)"/>
            </div>
        </div>
    </main>
</template>
<script setup>
    import CommentBox from './components/CommentBox.vue';
    import DividerHorizontal from './components/DividerHorizontal.vue'
    import CommentItem from './components/CommentItem.vue';
    import ReplyBox from './components/ReplyBox.vue';
    import ReplyContainer from './components/ReplyContainer.vue';

    import face1 from "./assets/face1.jpg";
    import face2 from "./assets/face2.jpg";
    import face3 from "./assets/face3.jpg";
    import face4 from "./assets/face4.jpg";
    import {ref,onMounted} from "vue";
    
    let rid=ref(4);
    const comments=ref([]);
    async function getAllComments() {
        const res = await fetch("/api/comments");
        comments.value = await res.json();
    }
    onMounted(()=>{
        getAllComments();
    })
    const addNewComment=async(content,replyTo)=>{
        //使用fetch发送一个post请求
        await fetch(`/api/comments`,{
            method:"POST",
            headers:{
                //设置application/json 
                // 这样express才能把请求的body转换为json格式
                "Content-Type":"application/json",
            },
            //通过JSON.stringify把body里的字符串转换为json格式
            body:JSON.stringify({
                content,
                //通过replyTo是否有值来决定是否添加replyTo属性
                ...(replyTo && {replyTo}),
            }),
        });
        //新增完评论后，自动获取新的评论列表
        //notionAPI有延迟 在添加完page后需要一会才能获取到相信的评论列表
        setTimeout(async() => {
            await getAllComments();
            
        }, 1000);
    };
    // const comments=ref([
    //     {
    //         id:1,
    //         user:"梦",
    //         avatar:face1,
    //         timer:"2小时前",
    //         content:"评论1",
    //         replies:[
    //             {
    //                 id:2,
    //                 user:"梦嗯嗯",
    //                 avatar:face2,
    //                 timer:"2小时前",
    //                 content:"评论2"
    //             },
    //             {
    //                 id:3,
    //                 user:"梦嗯嗯",
    //                 avatar:face3,
    //                 timer:"2小时前",
    //                 content:"评论3"
    //             }
    //         ]
    //     }
    // ]);
    
    // const constructNewComment=(content)=>{
    //     return {
    //         id:rid.value++,
    //         user:"当前用户",
    //         avatar:face4,
    //         content,
    //         time:"1秒前"
    //     }
    // };
    // const addNewComment=(content)=>{
    //     const newComment=constructNewComment(content);
    //     comments.value.push(newComment);
    // };



    // const addReply=(content,id)=>{
    //     //先组装一个新的留言对象
    //     const reply=constructNewComment(content);
    //     let comment=comments.value.find((comment)=>comment.id===id);
    //     //如果这个回复层有回复数组 则追加一条新回复 没有则创建一个新的回复数组
    //     if(comment.replies){
    //         comment.replies.push(reply);
    //     }else{
    //         comment.replies=[reply];
    //     }
        
    // };
</script>
<style></style>