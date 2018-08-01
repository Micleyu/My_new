<template>
    <div class="container">
        <commonheader title="Movie"></commonheader>
        <commonfooter></commonfooter>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
</template>

<script>
    import commonheader from '@/components/common/Header'
    import commonfooter from '@/components/common/Footer'
    export default {
        components: {
            commonheader,
            commonfooter
        }
    }
</script>

<style scoped>
    .container{
        position: relative;
    }
    ul{
        margin-top:1rem;
    }
</style>