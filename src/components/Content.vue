<template>
	<div>
	  	<section class="content container">
	  		<ul class="content__list">
	  			<li>
	  				<a class="content__link content__link--start">
	  				  <h3 class="content__title">Getting started</h3>
	  				</a>
	  			</li>
	  			<li>
	  				<a class="content__link">
	  				  <h3>Purchasing Questions</h3>
	  				</a>
	  			</li>
	  			<li>
	  				<a class="content__link">
	  				  <h3>Usage Guides</h3>
	  				</a>
	  			</li>
	  			<li>
	  				<a class="content__link">
	  				  <h3>Troubleshooting</h3>
	  				</a>
	  			</li>
	  		</ul>
	  		
	  	</section>
	  	<section class="submit">
	  		<h2>Can't find what you're looking for?</h2>
	  		<p>Let us help you!</p>
	  		<button type="submit">Submit a request</button>
	  	</section>
    </div>
</template>

<script>

export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
.content {
	padding-top: 60px;
	margin: 30px;
	&__list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
		align-items: center;

	}
	&__link {
		display: block;
		padding: 20px 40px;
		border-radius: 8px;
		box-shadow: 0px 1px 1px rgba(8, 32, 60, 0.15), 0px 1px 4px rgba(7, 52, 119, 0.14);
		&:hover,
		&:focus {
			box-shadow: 0px 16px 32px rgba(55, 71, 79, 0.08), 0px 8px 24px rgba(55, 71, 79, 0.1);
		}
	}
	&__title {
        position: relative;
        color: $bright-green;
        &::after {
			content: ""; 
            background: url('../assets/img/arrow.png') no-repeat center center;
            background-size: 40px;
		    display: block;
		    width: 30px;
		    height: 30px;
		    border-radius: 50%;
		    position: absolute;
		    right: -34px;
		    top: -38px;
		}
	
	}
}

.submit {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 25px;
	color: $gray;	
	//background: url('../assets/img/geometric.jpg') top right 10px no-repeat;
    background-color: $mint-green;

	p {
      margin-bottom: 25px;
      font-weight: bold;
	}

	button {
	  font-size: 12px;
      text-transform: uppercase;
      color: $gray;
      background-color: transparent;
      border: 1px solid $gray;
      border-radius: 5px;
      padding: 18px 20px;
      letter-spacing: 2px;
      font-weight: bold;
      box-sizing: border-box;
      cursor: pointer;
      &:hover,
      &:focus {
        color: $base-green;
        box-shadow: inset 0px 16px 32px rgba(55, 71, 79, 0.08);
      }
	}

}

</style>