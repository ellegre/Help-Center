<template>
  <div class="main">
  	<section class="search">
  		<div class="search__content container">
  			<h1 class="search__title">How can we help?</h1>
  			<form action="" method="get" class="search__form">
			    <input name="search" placeholder="Search..." type="search" class="search__input">
			    <button class="search__button" type="submit">Go!</button>
			</form>
  		</div>  		
  	</section>
  	<Navigation/>
  	<Content/>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Content from "./Content";

export default {
  name: "Footer",
  components: {
  	Navigation,
  	Content
  }
};
</script>

<style scoped lang="scss">
.search {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 130px;
	padding-bottom: 130px;
	background-color: $gray;
	background-image: url('../assets/img/plant.jpg');
	background-size: cover;
	background-position: 0px 50%;
    background-repeat: no-repeat; /* Do not repeat the image */    
	filter: brightness(0.8);
	&__photo-container {
		width: 100%;
		height: 400px;
	}
	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		top: 40%;
	}
	&__title {
	  margin-bottom: 30px;
	  font-size: 56px;
	  color: $white;
	}
	&__form {
		display: flex;
		width: 50%;
	}
	&__input {
		padding: 10px 30px;
	    font-size: 20px;
	    color: $gray;
	    border: none;
	    width: 100%;    
		    &::placeholder {
		        font-style: italic;
		      	color: lighten($gray, 20%);
		      }
	}
	&__photo {
		height: 100%;
        width: 100%;
        object-fit: cover;
		filter: brightness(0.8);
	}
	&__button {
		cursor: pointer;
		box-sizing: border-box;
		font-family: biotifbook, Biotif, sans-serif;
		font-size: 18px;
		white-space: nowrap;
		background-color: $bright-green;
		text-shadow: 1px 0 1px #000; 
		color: $white;
        font-weight: bold;
		letter-spacing: 3px;
		padding: 15px 30px;
		outline: none;
		border: none;
			&:hover {
				background-color: lighten($bright-green, 10%);
		}
    }
}
</style>
