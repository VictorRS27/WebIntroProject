<template>
    <div class="footer">
        <div>
            <h3>Pet the Shop</h3>
            <p>A trocentos anos sendo sua loja de animais preferida</p>
            <p>Av. Allan Turing, 69, São Carlos-SP, Brasil</p>
        </div>
        <div class="allIcons">
            <div class="icons">
                <Icon socialMedia="instagram"/>
                <Icon socialMedia="facebook"/>
            </div>
            <div class="icons">
                <Icon socialMedia="pinterest"/>
                <Icon socialMedia="twitter"/>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from './Icon.vue';
export default {
    name: "Footer",
    components: {
        Icon
    }
}
</script>
<style scoped>
.footer {
    width: 100%;
    background-color: #26272b;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: Helvetica;
}

.icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

p {
    color: aliceblue;
}

h3{
    color: aliceblue;
}

@media screen and (max-width: 700px) {
    .footer {
        flex-direction: column;
    }
    .allIcons {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
    .icons {
        width: 100%;
        justify-content: space-around;
    }
}
</style>