<template>
	<view class="l-space" :class="classes" :style="styles">
		<slot></slot>
	</view>
</template>
<script lang="ts">
	import { computed, defineComponent } from '@/uni_modules/lime-shared/vue';
	import { addUnit } from '@/uni_modules/lime-shared/addUnit';
	import LSpaceProps from './props'

	const name = 'l-space'
	export default defineComponent({
		name,
		props: LSpaceProps,
		setup(props) {
			
			const classes = computed(()=>{
				
				return {
					[`${name}--${props.direction}`]: true,
					[`${name}--align-${props.align}`]: props.align,
					[`${name}--wrap`]: props.wrap,
					[`${name}--fill`]: props.fill,
				}
			})
			const styles = computed(()=>{
				const gap = props.size ? Array.isArray(props.size) ? `${addUnit(props.size[0])} ${addUnit(props.size[1])}` : addUnit(props.size) : '8px';
				return {
					gap,
				}
			})
			
			return {
				classes,
				styles
			}
		}
	})
</script>
<style lang="scss">
	.l-space {
		display: inline-flex;

		&--horizontal {
			// & > :deep(*) {
			// 	display: flex;
			// 	align-items: center;
			// }
		}

		&--vertical {
			flex-direction: column;
		}

		&--align-baseline {
			align-items: baseline;
		}

		&--align-start {
			align-items: flex-start;
		}

		&--align-end {
			align-items: flex-end;
		}

		&--align-center {
			align-items: center;
		}

		&--wrap {
			flex-wrap: wrap;
		}

		&--fill {
			display: flex;
		}

	}
</style>