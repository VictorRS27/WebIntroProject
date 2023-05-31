<template>
    <div class="container_crud">
        <div class="box">
            <div class="box_head">
                <h1 v-if="which_table === 'products'"> Produtos </h1>
                <h1 v-if="which_table === 'users'"> Usuários </h1>
                <h1 v-if="which_table === 'admin'"> Administradores </h1>
                <h1 v-if="which_table === 'events'"> Eventos </h1>
            </div>
            <div v-if="which_table === 'products'" class="line">
                <span class="column">Nome</span>
                <span class="column">Preço</span>
                <span class="column">Descrição</span>
                <span class="column">Estoque</span>
            </div>
            <div v-else-if="which_table === 'users'" class="line">
                <span class="column">Nome de usuário</span>
                <span class="column">Email</span>
                <span class="column">Telefone</span>
                <span class="column">Endereço</span>
            </div>
            <div v-else-if="which_table === 'admin'" class="line">
                <span class="column">Nome de usuário</span>
                <span class="column">Senha</span>
                <span class="column">Email</span>
                <span class="column">Telefone</span>
            </div>
            <div v-for="(item, index) in items">
                <div v-if="which_table === 'products'" :class="'line ' + (index % 2 == 0 ? 'dark' : 'light')"
                    @click="highlight(item)">
                    <span class="column">{{ item.productName }}</span>
                    <span class="column">{{ item.productPrice }}</span>
                    <span class="column">{{ item.quantityInStock }}</span>
                    <span class="column">{{ item.productShortDescription }}</span>
                </div>
                <div v-if="which_table === 'users'" :class="'line ' + (index % 2 == 0 ? 'dark' : 'light')"
                    @click="highlight(item)">
                    <span class="column">{{ item.username }}</span>
                    <span class="column">{{ item.email }}</span>
                    <span class="column">{{ item.telephone }}</span>
                    <span class="column">{{ item.address }}</span>
                </div>
                <div v-if="which_table === 'admin'" :class="'line ' + (index % 2 == 0 ? 'dark' : 'light')"
                    @click="highlight(item)">
                    <span class="column">{{ item.username }}</span>
                    <span class="column">{{ item.password }}</span>
                    <span class="column">{{ item.telephone }}</span>
                    <span class="column">{{ item.email }}</span>
                </div>
                <div v-if="which_table === 'events'" :class="'line ' + (index % 2 == 0 ? 'dark' : 'light')"
                    @click="highlight(item)">
                    <span class="column">{{ item.eventName }}</span>
                    <span class="column">{{ item.eventType }}</span>
                    <span class="column">{{ item.eventDate }}</span>
                    <span class="column">{{ item.eventAddress }}</span>
                    <span class="column">{{ item.eventDescription }}</span>
                </div>
            </div>
            <div class="box_feet">
                <div v-if="which_table === 'products'" class="data">
                    <div class="line">
                        <span>Nome: {{ focused.productName }}</span>
                        <span>Preço: {{ focused.productPrice }}</span>
                        <span>Quantidade em estoque: {{ focused.quantityInStock }}</span>
                    </div>
                    <p>Descrição curta: {{ focused.productShortDescription }}</p>
                    <p>Descrição longa: {{ focused.productDescription }}</p>
                    <img class="img_small" v-for="(photo, index) in focused.photos" :src="photo" :alt="'photo' + index">
                </div>
                <div v-if="which_table === 'users'" class="data">
                    <div class="line">
                        <span>Nome de Usuário: {{ focused.username }}</span>
                        <span>Email: {{ focused.email }}</span>
                    </div>
                    <p>Endereço: {{ focused.address }}</p>
                    <p>Telefone: {{ focused.telephone }}</p>
                </div>
                <div v-if="which_table === 'admin'" class="data">
                    <div class="line">
                        <span>Nome de Usuário: {{ focused.username }}</span>
                        <span>Senha: {{ focused.password }}</span>
                    </div>
                    <p>Email: {{ focused.email }}</p>
                    <p>Telefone: {{ focused.telephone }}</p>
                </div>
                <div v-if="which_table === 'events'" class="data">
                    <div class="line">
                        <span>Nome: {{ focused.eventName }}</span>
                        <span>Tipo: {{ focused.eventType }}</span>
                        <span>Data: {{ focused.eventDate }}</span>
                    </div>
                    <p>Descrição longa: {{ focused.eventDescription }}</p>
                    <img class="img_small" v-for="(photo, index) in focused.photos" :src="photo" :alt="'photo' + index">
                </div>
                <div class="btn_column">
                    <button @click="handle_link(0)">Add</button>
                    <button @click="handle_link(1)">Edit</button>
                </div>
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
        which_table: {
            type: String,
            default: "products"
        }
    },
    methods: {
        cleanData() {
            this.items.forEach(item => {
                for (let key in item) {
                    if (item.hasOwnProperty(key) && typeof item[key] === 'string') {
                        if (item[key].length > 120) {
                            item[key] = item[key].substring(0, 120);
                        }
                    }
                }
            });
        },
        fetchItems() {
            let link = 'http://localhost:3000/' + this.which_table
            axios.get(link)
                .then(response => {
                    this.items = response.data;
                    this.cleanData()
                })
                .catch(error => {
                    console.log(error);
                });
        },
        highlight(item) {
            console.log(item)
            this.focused = item
        },
        handle_link(add_or_edit) {
            if (this.focused === {}) {
                alert("Selecione um item")
                return -1
            }
            if ((this.which_table === "products") || (this.which_table === "events")) {
                if (add_or_edit) {
                    this.$router.push('/create' + this.which_table.slice(0, this.which_table.length -1) + '?id=' + this.focused.id)
                }
                else {
                    this.$router.push('/create' + this.which_table.slice(0, this.which_table.length -1))
                }
            }
            else {
                if ((this.which_table === "users") || (this.which_table === "admin")) {
                    if (add_or_edit) {
                        this.$router.push('/register' + this.which_table + '?id=' + this.focused.id)
                    }
                    else {
                        this.$router.push('/register' + this.which_table)
                    }
                }
            }
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
    flex-direction: column;
    font-family: 'Courier New', Courier, monospace;
}

.box {
    width: 80vw;
    padding: 0;
    margin: 10vw;
}

.box_head {
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid black;
}

.box_feet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
}

button {
    height: 4vh;
    width: 10vw;
}

.data {
    padding: 10px;
    width: -webkit-fill-available;
}

.data p {
    padding: 10px;
}

.img_small {
    width: 10vw;
    height: auto;
}

.btn_column {
    display: grid;
}

.column {
    flex: 1;
}

.line {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    width: inherit;
    cursor: pointer;
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

@media (max-width: 858px) {
    .box_feet{
        display: grid;
        justify-content: center;
    }

    button {
        width: 50vw;
    }

    .btn_column {
        justify-content: center;
    }
}
</style>