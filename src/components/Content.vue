<template>
  	<section class="content container">
  		<ul class="content__list">
  			<li>Getting started</li>
  			<li>Purchasing Questions</li>
  			<li>Usage Guides</li>
  			<li>Troubleshooting</li>
  		</ul>
  		
  	</section>
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
	&__list {
		display: flex;
		flex-wrap: wrap;
	}
}

</style>