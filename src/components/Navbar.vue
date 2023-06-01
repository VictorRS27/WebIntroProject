<template>
    <div v-if="!mobile" class="nav">
        <div class="navWeb">
            <div v-show="!is_home" class="logo">
                <div class="pet">Pet</div>
                <div class="the_shop">the shop</div>
            </div>
            <div class="navbar">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/products">Products</RouterLink>
                <RouterLink to="/events">Events</RouterLink>
                <RouterLink to="/about">About us</RouterLink>
            </div>
        </div>
    </div>
    <div v-else class="nav">
        <div class="navMob">
            <div class="logo">
                <div class="pet">Pet</div>
                <div class="the_shop">the shop</div>
            </div>
            <button @click="switchDropBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" alt="menu">
            </button>
        </div>
        <div v-if="dropBox" class="dropBox">
            <RouterLink to="/">Products</RouterLink>
            <RouterLink to="/events?">Events</RouterLink>
            <RouterLink to="/about">About us</RouterLink>
        </div>
    </div>
</template>


<script>
export default {
    name: "Navbar",
    data() {
        return {
            mobile: false,
            dropBox: false,
        }
    },
    props: {
        is_home:Boolean,
        default:false
    },
    methods: {
        defineWindow() {
            if (window.innerWidth < 700) {
                this.mobile = true
            } else {
                this.mobile = false
            }
        },
        switchDropBox() {
            this.dropBox = !this.dropBox;
        }
    },
    mounted() {
        this.defineWindow()
        window.addEventListener("resize", this.defineWindow)
    },


}
</script>


<style scoped>

.nav{
    font-family: 'Courier New', Courier, monospace;
    color: aliceblue;
    text-decoration: none;
    font-size: 24px;
    z-index: 10;
    position: fixed;
    width: 100vw;
}

.navWeb {
    background-color: #46D115;
    height: 10vh;
    width: 100%;
    display: flex;
    z-index: 3;
    top: 0;
}

.logo {
    height: 120%;
    width: 300px;
    color: #fff;
    background-color: #46D115;
    padding-left: 3vw;
    border-radius: 0 0 1200px 0px;
    font-size: xx-large;
}

.pet {
    font-size: 2.2em;
}

.the_shop {
    font-size: 0.8em;
}

.navbar {
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.navbar a {
    color: aliceblue;
    text-decoration: none;
    font-size: 24px;
}

.navbar a:hover {
    color: #000;
}


.navMob {
    background-color: #46D115;
    height: 10vh;
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: row;
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
    width: 100%;
    padding: 20px 0px;
}

.dropBox a {
    color: aliceblue;
    text-decoration: none;
    font-size: 24px;
}

.dropBox a:hover {
    color: #000;
}

a {
    margin: 20px;
}
</style>