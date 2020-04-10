<template>
	<view>
      <label class="radio">
        <radio class="radio-btn" :value="radioValue" />
        <text class="radio-name"> {{ radioName }}</text>
      </label>
	</view>
</template>

<script>
	export default {
    name:'w-radio',
		data() {
			return {
				
			};
		},
    props:['radioValue', 'radioName']
	}
</script>

<style>
  .radio-btn{
    margin-bottom: 1px;
    transform: scale(0.8);
  }
  .radio-name{
    /* flex: 1; */
    margin-left: 26upx;
    text-align: left;
  }
</style>
