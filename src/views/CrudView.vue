<template>
    <div class="container_crud">
        <div class="box">
            <div class="box_head">
                <RouterLink :to="add_edit_link">
                    <button>Add</button>
                </RouterLink>
            </div>
            <div v-if="witch === 'products'" class="line">
                <span class="column">Nome</span>
                <span class="column">Preço</span>
                <span class="column">Descrição</span>
                <span class="column">Estoque</span>
            </div>
            <div v-else-if="witch === 'users'" class="line">
                <span class="column">Nome de usuário</span>
                <span class="column">Email</span>
                <span class="column">Telefone</span>
                <span class="column">Endereço</span>
            </div>
            <div v-for="(item, index) in items">
                <div v-if="witch === 'products'" :class="'line ' + (index % 2 == 0 ? 'dark' : 'light')" @click="highlight(item)">
                    <span class="column">{{ item.productName }}</span>
                    <span class="column">{{ item.productPrice }}</span>
                    <span class="column">{{ item.productDescription }}</span>
                    <span class="column">{{ item.productStock }}</span>
                </div>
                <div v-if="witch === 'users'" :class="'line ' + (index % 2 == 0 ? 'dark' : 'light')" @click="highlight(item)">
                    <span class="column">{{ item.username }}</span>
                    <span class="column">{{ item.email }}</span>
                    <span class="column">{{ item.telephone }}</span>
                    <span class="column">{{ item.address }}</span>
                </div>
            </div>
            <div class="box_feet">
                <div class="data">
                    <span>{{ focused.productName }}</span>
                </div>
                <RouterLink :to="add_edit_link">
                    <button>Add</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "crudView",
    data() {
        return {
            focused: {},
            line: true,
            items: [],
            add_edit_link: "/createproduct"
        }
    },
    props: {
        witch: "Default"
    },
    methods: {
        fetchItems() {
            let link = 'http://localhost:3000/' + this.witch
            axios.get(link)
                .then(response => {
                    this.items = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            if (this.witch === "products") {
                this.add_edit_link = "/createproduct"
            }
        },
        highlight(item) {
            console.log(item)
            this.focused = item
        }
    },
    mounted() {
        this.fetchItems()
    },
}
</script>
<style scoped>
.container_crud {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    font-family: 'Courier New', Courier, monospace;
}

.box {
    width: 80vw;
    padding: 0;
}

.box_head {
    height: 8vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 10px;
}

.box_feet {
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
}

button {
    height: 4vh;
    width: 10vw;
}

.column {
    flex: 1;
}

.line {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    width: inherit;
}

.dark {
    background-color: rgb(173, 177, 179);
}

.light {
    background-color: rgb(222, 225, 227);
}

span+span {
    margin-right: 10px;
}
</style>