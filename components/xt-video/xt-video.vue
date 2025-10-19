<template>
  <iframe :onload="onloadCode" class="ifr" :style="{'background-color':bgColor}" ></iframe>
</template>

<script setup>
const props = defineProps({
  videoUrl: String,
  bgColor:String
})
let onloadCode = `
const url = '${decodeURIComponent(encodeURIComponent(props.videoUrl))}';  
  this.contentWindow.document.body.innerHTML = '<video style="width: 100%;height: 100%" controls="controls" muted="true"object-fit="contain" vslide-gesture="true" show-mute-btn="true" src="'+url+'"></video>';`

</script>
<style lang="scss">
	.ifr{	
		background: rgba(0, 0, 0, 0.6);
		overflow: hidden;
		width:100%;height:100%;
	}
	.glass {
	  position: relative;
	
	  backdrop-filter: blur(2px) saturate(180%);
	  border: 1px solid rgba(255, 255, 255, 0.8);
	  border-radius: 2rem;
	  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2),
	    inset 0 4px 20px rgba(255, 255, 255, 0.3);
	}
	.no-border {
	border: none;
	}
	.no-outline {
	outline: none;
	}
</style>