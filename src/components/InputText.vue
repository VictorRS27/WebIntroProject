<template>
    <p>{{ InputName}}</p>
    <input @input="$emit('update:modelValue', $event.target.value)" 
    type="text" 
    v-model="login" />
</template>
<script>
export default {
    name: "InputText",
    props: {
        InputName: String
    },
    inheritAttrs: false
}
</script>
<style>
input[type=text] {
    background-color: #ffffff00;
    border: none;
    border-bottom: 4px solid #46D115;
    border-top: 0px;
    border-radius: 0px;
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