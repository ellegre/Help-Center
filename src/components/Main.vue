<template>
  <div class="main">
  	<section class="search">
  		<div class="search__photo-container">
  			<picture>
				<source type="image/webp" srcset="https://theme.zdassets.com/theme_assets/1281227/1acf4401488b82cc09247f5584a4b1d27348be7a.jpg">
				<img src="https://theme.zdassets.com/theme_assets/1281227/1acf4401488b82cc09247f5584a4b1d27348be7a.jpg" class="search__photo">
  		</picture>
  		</div>
  		<div class="search__content">
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
  props: {
    msg: String
  },
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
    width: 100%;    
	align-items: center;
	background-color: $gray;
	position: relative;
	&__photo-container {
		width: 100%;
		height: 400px;
	}
	&__content {
		position: absolute;
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
		width: 550px;
		border: 1px solid $gray;
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
		background-color: $mint-green;
		text-shadow: 1px 0 1px #000; 
		color: $white;
        font-weight: bold;
		letter-spacing: 3px;
		padding: 15px 30px;
		outline: none;
		border: none;
		border-left: 0.5px solid $gray;
		&:hover {
			background-color: lighten($mint-green, 10%);
		}
    }
}

</style>