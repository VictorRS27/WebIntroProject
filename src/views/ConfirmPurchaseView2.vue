<template>
    <Navbar />
    <div class="box">
        <div class="confirmation-page">
            <h2>Confirmation Purchase</h2>

            <div class="credit-card">
                <label for="credit-card">Credit Card Number:</label>
                <div class="credit-card-input">
                    <input type="text" id="credit-card" placeholder="Enter credit card number" v-model="creditCardNumber"
                        @input="checkCreditCardInput" />
                    <div class="credit-card-line"></div>
                </div>
            </div>

            <button class="buy-button" :class="{ active: creditCardNumber }" @click="completePurchase">
                BUY
            </button>

            <div v-if="purchaseComplete" class="purchase-message">
                <p>Purchase complete!</p>
                <p>Returning to homepage in 5 seconds...</p>
            </div>
        </div>
    </div>
</template>
  
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
    name: "ConfirmPurchase2",
    data() {
        return {
            creditCardNumber: "",
            purchaseComplete: false,
        };
    },
    methods: {
        checkCreditCardInput() {
            // Remove non-digit characters from the credit card number
            this.creditCardNumber = this.creditCardNumber.replace(/\D/g, "");
        },
        completePurchase() {
            if (this.creditCardNumber) {
                // Simulating purchase completion
                this.purchaseComplete = true;
                setTimeout(() => {
                    // Redirect to homepage after 5 seconds
                    this.$router.push("/");
                }, 5000);
            }
        },
    },
    components: {
        Navbar,
        Footer
    }
}
</script >
<style scoped>

.box{
    margin-top: 20vh;
}
.confirmation-page {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    text-align: center;
}

.credit-card {
    margin-bottom: 20px;
}

.credit-card-input {
    position: relative;
}

.credit-card-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: lightgreen;
}

input[type="text"] {
    width: 100%;
    padding: 10px;
    background-color: transparent;
    border: none;
    color: black;
    font-size: 16px;
}

.buy-button {
    display: block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: lightgreen;
    border: none;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
}

.buy-button.active {
    background-color: darkgreen;
}

.purchase-message {
    margin-top: 20px;
    text-align: center;
}
</style>