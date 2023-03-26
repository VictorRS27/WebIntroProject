<template>
    <div class="img-card iCard-style2">
        <div class="card-content">
            <div class="card-image">
                <span class="card-caption">Image Caption</span>
                <img src="https://www.dropbox.com/s/63v40eqeq9lgz3k/bald-eagle-2715461_640.jpg?raw=1" />
            </div>

            <span class="card-title">Card Title</span>

            <div class="card-text">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by <a
                        href="https://pixabay.com/users/moonzigg-6341937/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2715461"
                        style="text-decoration: none">moonzigg</a> from <a
                        href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2715461"
                        style="text-decoration: none">Pixabay</a>
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
    name: "Card"
}
</script>
<style >
.img-card {
        width:300px;
        position: relative;
        border-radius: 5px;
        text-align: left;

        -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
        -o-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
        box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);        
    }

        .img-card .card-image {
            position: relative;
            margin: auto;
            overflow: hidden;
            border-radius: 5px 5px 0px 0px;
            height: 200px;
        }

        .img-card .card-image img {
            width:100%;
            border-radius: 5px 5px 0px 0px;
            
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
            color:#fff;            
        }
</style>