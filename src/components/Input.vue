<template>
    <input type="text" />
</template>
<script>
export default {
    name: "Input"
}
</script>
<style>
input[type=text] {
    background-color: #ffffff00;
    border: none;
    border-bottom: 4px solid #46D115;
    border-top: 0px;
    border-radius: 0px;
    font-family: 'Courier New', Courier, monospace, 20px;
    margin: 2vh 10px 0 10px;
}

input[type=text]:focus {
    outline: none;
    background-color: #fafafa;
    border: none;
    border-bottom: 4px solid #46D115;
    border-top: 0px;
    border-radius: 0px;
}
</style>