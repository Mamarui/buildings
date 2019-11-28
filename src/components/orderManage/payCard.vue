<template>
    <div>
        <p>{{msg==0?'未支付':'已支付'}}</p>
    </div>
</template>


<script>
export default {
    props:['msg'],
    data() {
        return {
            
        }
    },
}
</script>