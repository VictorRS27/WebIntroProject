<template>
    <button @click="$emit('submit2')" >Enviar</button>
</template>
<script>
export default {
    name: "InputSubmit"
}
</script>
<style>
    button {
        margin: 20px;
        background-color: #46D115;
        border-radius: 30px;
        height: 4vh;
        width: 30%;
        border:0cm;
        font-family: 'Courier New', Courier, monospace;
        color: aliceblue;
        font-size: 18px;
    }
</style>