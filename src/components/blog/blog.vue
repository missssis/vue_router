<template>
    <div>
        <h1>{{msg}}</h1><br>
        <router-link :to="{name:'blogView',params:{id:'lw'} }">lw的博客</router-link>
        <br>
        <br>
        <router-link :to="{name:'blogView',params:{id:'C.C'} }">C.C的博客</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'blogList',
    props:['id'],
    data:function(){
        return {msg:'我是博客'}
    },
    computed:{
        routerInfo(){
            const { fullPath,path,title,params,query,meta}=this.$route;
            return {
                 fullPath,path,title,params,query,meta
                };
        }
    }
}
</script>