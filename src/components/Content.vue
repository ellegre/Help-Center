<template>
  	<div class="content">
  		<section class="info">
	  		<ul class="info__list container">
	  			<li>
	  				<a href="#" class="info__link">
	  				   <h3 class="info__title">Getting started</h3>
	  				</a>
	  			</li>
	  			<li>
	  				<a href="#" class="info__link">
	  				   <h3 class="info__title">Purchasing Questions</h3>
	  				</a>
	  			</li>
	  			<li>
	  				<a href="#" class="info__link">
	  				   <h3 class="info__title">Usage Guides</h3>
	  				</a>
	  			</li>
	  			<li>
	  				<a href="#" class="info__link">
	  				  <h3 class="info__title">Troubleshooting</h3>
	  				</a>
	  			</li>
	  		</ul>
  	    </section>
  	    <section class="articles container">
  			<h2>Promoted articles</h2>
			<ul class="articles__list">
				<li class="articles__list-item" v-for="item in reversedData" :key="item.id">
				    <article class="articles__article">
				        <img src="../assets/img/sunset.jpg" width="200" height="auto">
				        <a href="#" class="articles__title">{{toUpperCaseFirstLetter(item.title)}}<span>{{getRandomInt(0, 300)}}</span></a>
				  </article>
				</li>					
		    </ul>
  		</section>
  		<section class="community container">
  			<div>
  				<h2>Community</h2>
  			    <a href="#">browse</a>
  			</div>
  			<p>No recent activities yet.</p>
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
  data() {
  	return {
  		data: [],
  		loading: true,
        errored: false,
        comments: null
  	}
  },
  computed: {
    reversedData: function() {
    	return this.data.slice(0, 10).reverse();
    }    
  },
  methods: {
  	getData() {
  		this.$http.get('https://jsonplaceholder.typicode.com/posts/')
  		.then(response => {this.data = response.data})
  		.catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  	},
  	toUpperCaseFirstLetter(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    },
    getRandomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped lang="scss">
.info {
	padding-top: 50px;
	padding-bottom: 50px;
	background-color: lighten($gray, 60%);
	&__list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		text-align: center;

		li {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 154px;
			height: 154px;
		    background-color: $bright-green;
		    border-radius: 50%;
                &:hover,
		        &:focus {
			        box-shadow: 0px 16px 32px rgba(55, 71, 79, 0.08), 0px 8px 24px rgba(55, 71, 79, 0.1);
		        }
	    }
	}
	&__link {
		display: block;
		padding: 20px 40px;		
	}
	&__title {
        position: relative;
        color: $white;
        font-size: 18px;
	}
}

.articles {
	&__article {
		padding-bottom: 50px;
	}
	&__list {
		display: grid;
		grid-gap: 40px 3%;
        grid-template-columns: 31% 31% 31%;
	}
	&__list-item {
		padding-top: 15px;
		padding-right: 30px;
		border-top: 1px solid lighten($gray, 30%);
		font-size: 16px;
		text-align: left;
			&:first-child {
	            grid-row-start: 1;
	            grid-row-end: 4;
				border-top: none;
				padding-top: 0;
			}

		span {
		  margin-left: 10px;
          color: $orange;
		}
    }

    &__list-item img {
        display: none;
        width: 100%;
        height: auto;
	}

	&__list-item:first-child img {
		margin-bottom: 15px;
        display: block;
    }
    
    h2 {
    	font-weight: lighter;
    	font-size: 24px;
    }

    a {
    	margin-top: 15px;
    	color: $gray;
	    	&:hover,
	    	&:focus {
	    	  color: darken($gray, 20%);
	    	}
    }
}

.community {
	padding-top: 50px;
	padding-bottom: 50px;
	margin-bottom: 50px;
	border: 2px solid lighten($gray, 55%);
	border-radius: 8px;

	h2 {
		margin: 0;
		margin-bottom: 20px;
		margin-right: 15px;
		font-family: "biotif-book", Biotif, sans-serif;
    	font-size: 24px;
    	display: inline-block;
	}
	a {
      font-size: 24px;
	}
}

.submit {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 25px;
	color: $gray;	
    background-color: lighten($gray, 60%);

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
