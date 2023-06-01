<template>
	<Navbar :is_home="height" />
	<div class="title_container">
		<div class="pet_big">Pet</div>
		<div class="the_shop_big">the shop</div>
	</div>
	<svg viewBox="0 0 1700 800" xmlns="http://www.w3.org/2000/svg">
		<path fill="#46D115"
		d="M 0 0 L 1700 0 L 1700 500 Q 1550 350 1250 350 Q 950 350 600 650 Q 450 800 250 800 Q 100 800 0 700 L 0 0 ">
	</path>
</svg>

<img src="/cute_pets.png" alt="pets" class="highlight">
<div class="homebody">
	<div class="subtitle_container">
		<h2>Products</h2>
		
		<RouterLink to="/products">
			<h2> See all</h2>
		</RouterLink>
	</div>
	<div class="container">
		<SuggestedProduct
		v-for="(product, index) in this.suggestedProducts"
		:key="product.id"
		:infos="product"
		/>
	</div>
	<div class="subtitle_container">
		<h2>Events</h2>
		
		<RouterLink to="/events">
			<h2> See all</h2>
		</RouterLink>
	</div>

	<div class="container">
		<SuggestedEvent
		v-for="(event, index) in this.suggestedEvents"
		:key="event.id"
		:infos="event"
		/>
	</div>
</div>
</template>

<script>

import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import SuggestedProduct from '../components/SuggestedProduct.vue';
import SuggestedEvent from '../components/SuggestedEvent.vue';

export default {
	data() {
		return {
			height: true,
			suggestedProducts: [],
			suggestedEvents: [],
		}
	},
	components: {
		SuggestedProduct,
		SuggestedEvent,
		Navbar,
	},
	mounted() {
		addEventListener("scroll", this.logo_control)
		this.loadSuggestedProducts();
		this.loadSuggestedEvents();
	},
	methods: {
		logo_control() {
			console.log(window.scrollY)
			if (window.scrollY > 500) {
				this.height = false
			}
			else {
				this.height = true
			}
		},
		loadSuggestedProducts() {
			axios
			.get('http://localhost:3000/products')
			.then((response) => {
				const products = response.data;
				const numberOfSuggestions = 4; // Number of suggested products to display
				this.suggestedProducts = products.slice(0, numberOfSuggestions);
			})
			.catch((error) => {
				console.error('Error fetching suggested products:', error);
			});
		},
		loadSuggestedEvents() {
			axios
			.get('http://localhost:3000/events')
			.then((response) => {
				const events = response.data;
				const numberOfSuggestions = 4; // Number of suggested products to display
				this.suggestedEvents = events.slice(0, numberOfSuggestions);
			})
			.catch((error) => {
				console.error('Error fetching suggested products:', error);
			});
		},
	},
}
</script>

<style>

.container {
    margin: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
  }

.subtitle_container {
	display: flex;
	justify-content: space-between;
	margin: 0 10vw;
}

.subtitle_container a {
	color: black;
}

.highlight {
	position: absolute;
	margin-left: 45%;
	z-index: 1;
	height: auto;
	width: 45vw;
	margin-top: 10vh;
	top: 0;
}

svg {
	z-index: 0;
	position: absolute;
	top: 0;
}

.title_container {
	font-family: 'Courier New', Courier, monospace;
	color: #fff;
	margin-left: 5vw;
	top: 0;
	z-index: 2;
	margin-top: 12vw;
}

.pet_big {
	font-size: 17vw;
}

.the_shop_big {
	font-size: 6vw;
}

.homebody {
	margin-top: 14vw;
}

@media (max-width: 858px) {
	.highlight {
		align-self: center;
		margin: 100px 0 0 0;
		position: relative;
		width: 90vw;
	}
	
	.title_container {
		display: none;
	}
	
	.homebody {
		margin-top: 2vh;
	}
	
	svg {
		margin-top: 100px;
	}
}
</style>