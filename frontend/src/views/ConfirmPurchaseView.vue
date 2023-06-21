<template>
    <Navbar />
    <div class="box">
        <p> Seu pedido foi registrado {{ nome_usuario }} !</p>
        <div class="codigo">
            <p> Seu código pix é </p>
            <strong>
                <p id="pix"> {{ codigo_pix }} </p>
            </strong>
            <button class="button" @click="copiarCodigo"> {{ texto_botao }} </button>
        </div>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
    name: "ConfirmPurchase",
    data() {
        return {
            nome_usuario: "usuario",
            codigo_pix: "codigopix",
            foi_copiado: false,
            texto_botao: "Copiar"
        }
    },
    methods: {
        copiarCodigo() {
            this.foi_copiado = true
            this.texto_botao = "Código copiado !"
        }
    },
    components: {
        Navbar,
        Footer
    }
}
</script >
<style scoped>

.box {
    margin-top: 20vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.codigo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.pix {
    font-family: 'Courier New', Courier, monospace;

}

.button {
    background-color: #46D115;
    border-radius: 30px;
    height: 4vh;
    width: 100%;
    border: 0cm;
    font-family: 'Courier New', Courier, monospace;
    color: aliceblue;
    font-size: 18px;
}

.button:hover {
    background: linear-gradient(to bottom, #5cbf2a 5%, #46D115 100%);
    background-color: #46D115;
}

.button:active {
    position: relative;
    top: 1px;
}
</style>