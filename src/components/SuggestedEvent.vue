<template>
	<div class="box">
		<div class="upper">
			<div class="image" @click="openEvents">
				<img :src="event.photos[0]" alt="Event Image" />
			</div>
		</div>
		<div class="divider"></div>
		<div class="lower">
			<div class="details">
				<h1>{{ event.eventName }}</h1><br>
				<p>{{ event.eventType }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "event",
	data() {
		return {
			event: {
				id: 3,
				eventName: "Paws for a Cause",
				eventDescription: "Join us in a noble cause and help us find forever homes for our adorable pets. At 'Paws for a Cause,' we bring together animal lovers of all ages to create a compassionate community that nurtures and protects our furry friends. Explore our pet adoption center and meet a wide variety of loving animals in need. Whether you're looking to adopt, volunteer, or simply lend your support, this family-friendly event offers a fantastic opportunity to make a positive impact on the lives of these innocent creatures. Join us as we unite to bring happiness to both humans and animals alike.",
				eventShortDescription: "Join us in a noble cause and help us find forever homes for our adorable pets.",
				eventDate: "2023-06-20",
				eventAddress: "321 Pine Rd, City, State",
				eventType: "Family-friendly event",
				photos: ["https://www.teambonding.com/wp-content/uploads/2013/12/PAWS_FOR_A_CAUSE_CMYK_LANDSCAPE_SM-01.jpg"]
			},
		};
	},
	methods: {
        openEvents() {
            this.$router.push('/events');
        },
    },
	props: {
		infos: {
			type: Object,
			required: true
		}
	},
	mounted() {
		this.event = { ...this.infos };
	}
};
</script>

<style scoped>
* {
	font-family: 'Courier New', Courier, monospace;
}
.box {
	transition: 0.3s;
	border-style: solid;
	align-self: center;
	width: 14vw;
    height: 40vh;
	border-width: 0.2vw;
	border-color: #46D115;
	border-radius: 2vw;
	box-shadow: 0 0.2vw 0.5vw rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}

.box:hover {
  transform: translateY(-2vh);
}

.image img {
	width: 14vw;
	height: 10vw;
	object-fit: cover;
	border-radius: 2vw;
	cursor: pointer;
}

.details {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
}

h1 {
	margin : 0vw;
	font-size: 1.4vw;
}

p {
	margin: 0vw;
	font-size: 1.2vw;
}

.upper {
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 2vh;
}

.divider {
	border: none;
	border-top: 0.2vw solid #46D115;
	margin: 0;
	width: 100%;
}

.lower {
	padding-top: 2vh;
}

</style>
