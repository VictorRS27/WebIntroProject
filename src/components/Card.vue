<template>
    <div class="img-card iCard-style2">
        <div class="card-content">
            <div class="card-image">
                <img :src="card_img" />
            </div>

            <span class="card-title">Card Title</span>

            <div class="card-text">
                <p>
                    {{ card_descr }}
                </p>
            </div>

        </div>

        <div class="card-link">
            <a href="#" title="Read Full"><span>Read Full</span></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    data() {
        return {
            card_img: "/cart.png",
            card_descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    },
}
</script>

<style >
.img-card {
    width: 300px;
    position: relative;
    border-radius: 10px;
    text-align: left;
    margin: 30px;

    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    -o-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
}

.img-card .card-image {
    position: relative;
    margin: auto;
    overflow: hidden;
    border-radius: 10px 10px 0px 0px;
    height: 200px;
}

.img-card .card-image img {
    width: 100%;
    border-radius: 10px 10px 0px 0px;

    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    -o-transition: all 0.8s;
    transition: all 0.8s;
}

.img-card .card-image:hover img {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
}

.img-card .card-text {
    padding: 0 15px 15px;
    line-height: 1.5;
}

.img-card .card-link {
    padding: 20px 15px 30px;
    width: -webkit-fill-available;
}

.img-card .card-link a {
    text-decoration: none;
    position: relative;
    padding: 10px 0;
}

.img-card .card-link a:after {
    top: 30px;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    width: 0;

    -webkit-transition: width 0.3s ease 0s, left 0.3s ease 0s;
    -moz-transition: width 0.3s ease 0s, left 0.3s ease 0s;
    -o-transition: width 0.3s ease 0s, left 0.3s ease 0s;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
}

.img-card .card-link a:hover:after {
    width: 100%;
    left: 0;
}

.img-card.iCard-style1 .card-title {
    position: absolute;
    font-family: 'Open Sans', sans-serif;
    z-index: 1;
    top: 10px;
    left: 10px;
    font-size: 30px;
    color: #fff;
}

.img-card.iCard-style1 .card-text {
    color: #795548;
}

.img-card.iCard-style1 .card-link a {
    color: #FF9800;
}

.img-card.iCard-style1 .card-link a:after {
    background: #FF9800;
}

.img-card.iCard-style2 .card-title {
    padding: 15px;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
}

.img-card.iCard-style2 .card-image {
    margin-bottom: 15px;
}

.img-card.iCard-style2 .card-caption {
    text-align: center;
    top: 80%;
    font-size: 17px;
    color: #fff;
    position: absolute;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    z-index: 1;
}

.img-card.iCard-style2 .card-link a {
    border: 1px solid;
    padding: 8px;
    border-radius: 3px;
    color: black;
    font-size: 13px;

    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
}

.img-card.iCard-style2 .card-link a:hover {
    background: black;
}

.img-card.iCard-style2 .card-link a:hover span {
    color: #fff;
}
</style>