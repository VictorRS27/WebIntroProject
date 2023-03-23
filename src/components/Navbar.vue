<template>
    <div v-if="!mobile" class="nav">
        <div class="logo"></div>
        <div class="navbar">
            <RouterLink id="iscrito" to="/">Shop</RouterLink>
            <RouterLink id="iscrito" to="/about">Services</RouterLink>
        </div>
    </div>
    <div v-else>
        <div class="navMob">
            <button @click="switchDropBox">
                <img src="https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png" alt="menu">
            </button>
        </div>
        <div v-if="dropBox" class="dropBox">
            <RouterLink id="iscrito" to="/">Shop</RouterLink>
            <RouterLink id="iscrito" to="/about">Services</RouterLink>

        </div>
    </div>
</template>


<script>
export default {
    name: "Navbar",
    data() {
        return {
            mobile: false,
            dropBox: false
        }
    },
    methods: {
        defineWindow() {
            var wWindow = window.innerWidth;
            if (wWindow < 700) {
                this.mobile = true
            }
            console.log(this.mobile)
        },
        switchDropBox() {
            this.dropBox = !this.dropBox;
            console.log(this.dropBox)
        }
    },
    created() {
        this.defineWindow()
    }
}
</script>


<style scoped>
.nav {
    background-color: #46D115;
    height: 10vh;
    width: 100%;
    display: flex;
}

.navbar {
    padding-left: 2vw;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.logo {
    height: 120%;
    background: url("/cart.png");
    width: 200px;
}

#iscrito {
    font-family: 'Courier New', Courier, monospace;
    color: aliceblue;
    text-decoration: none;
    font-size: 24px;
    margin: 5px 30px;
}

#iscrito:hover {
    color: #000;
}



.navMob {
    background-color: #46D115;
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
}

button {
    box-sizing: border-box;
    margin-right: 20px;
    background-color: rgba(0, 0, 0, 0);
    border-width: 0;
}

img {
    width: 10vw;
    height: auto;
}

.dropBox {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: #46D115;
    height: 10vh;
    width: 100%;
    padding: 20px 0px;
}
</style>