<!-- 
    COMO USAR:
    <InputText v-model:value="login" label="username" placeHolder="petFriend24"/>
    onde login é uma variavel no data
    label é o nome do campo
    e o placeholder é o placeholder

    se por algum diacho vc quiser letra por letra, faça:
    <InputText  v-model:value="login" @update:value="redirect"/>
    sendo redirect um metodo no pai

    TEORIA:
    O v-model no pai nada mais do que é uma abreviação para a detecção de
    um evento chamado update:variavel
    sendo essa variavel uma do filho, nesse caso value, mas poderiam ser 2
    de uma vez (consultar documentação)
    então o v-model no pai vai ler o valor atribuido àquela variavel e atualizar o valor 
    da variavel do pai que voce passou pra ele, no exemplo login, com o valor que veio
    da variavel do filho, o caso value
 -->


<template>
    <div class="form-group">
        <label for="this">{{ label }}</label>
        <input type="text" :value="value" @input="$emit('update:value', $event.target.value)" :placeholder="placeHolder" />
    </div>
</template>
<script>
export default {
    name: "InputText",
    props: ['value', 'placeHolder', 'label'],
    emits: ['update:value']
}
</script>
<style scoped>

.form-group {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
}

input[type=text] {
    width: 100%;
    background-color: #ffffff00;
    border: none;
    border-bottom: 4px solid #46D115;
    border-top: 0px;
    border-radius: 0px;
}

label {
    margin: 2vh 0 1vh 0;
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