<template>
	<view class="xs-combox">
		<view class="xs-combox-wrapper" :class="{ 'bordered': bordered, 'disabled': disabled }">
			<template v-if="$slots.prefixIcon">
				<view class="xs-combox-prefix-icon">
					<slot name="prefixIcon"></slot>
				</view>
			</template>
			<view class="xs-combox-input">
				<input v-model="inputValue" type="text" :disabled="disabled" :placeholder="getInputPlaceholder"
					:placeholder-class="placeholderClass" @focus="handleInputFocus" @input="handleInput"
					@blur="handleInputBlur" />
			</view>
			<view class="xs-combox-suffix-icon">
				<template v-if="allowClear && inputValue">
					<uni-icons type="clear" size="14" color="#999" @click="handleInputClear" />
				</template>
				<uni-icons :type="showSelector ? 'top' : 'bottom'" size="14" color="#999" @click="toggleSelector" />
			</view>
		</view>
		<template v-if="showSelector">
			<view class="xs-combox-selector" :style="{zIndex}">
				<template v-if="loading">
					<uni-load-more status="loading" />
				</template>
				<template v-else>
					<view class="xs-combox-selector-wrapper">
						<view class="xs-combox-selector-scroll">
							<scroll-view scroll-y="true" style="max-height: 200px;">
								<template v-if="getFilterOptions.length <= 0">
									<slot name="empty">
										<uni-load-more status="no-more" />
									</slot>
								</template>
								<template v-else>
									<template v-for="(item, index) in getFilterOptions" :key="index">
										<slot :item="item" :index="index">
											<view class="xs-combox-selector-item"
												@click="handleSelectorClick(item as IOption)">
												<text>{{ getOptionLabel(item as IOption) }}</text>
											</view>
										</slot>
									</template>
								</template>
							</scroll-view>
						</view>
						<view class="xs-combox-selector-close" @click="toggleSelector">
							<text>关闭</text>
						</view>
					</view>
				</template>
			</view>
		</template>
	</view>
</template>
<script lang="ts" setup>
	import { computed, nextTick, onBeforeUnmount, shallowRef, watch, getCurrentInstance } from 'vue';
	type IOption = Record<string, any> | string | number;

	const emits = defineEmits<{
		search : [val: string];
		select : [val: IOption];
		clear : [];
	}>();

	const props = withDefaults(defineProps<{
		placeholder ?: string;
		allowClear ?: boolean;
		allowSearch ?: boolean;
		retainSearchValue ?: boolean;
		loading ?: boolean;
		options ?: IOption[];
		fieldLabel ?: string | ((option : IOption) => string);
		fieldValue ?: string | ((option : IOption) => any);
		filterOption ?: boolean | ((inputValue : string | number) => boolean);
		placeholderClass ?: string;
		bordered ?: boolean;
		disabled ?: boolean;
		zIndex ?: number;
		single ?: boolean;
	}>(), {
		allowClear: true,
		allowSearch: true,
		retainSearchValue: false,
		options: () => [],
		fieldLabel: 'label',
		fieldValue: 'value',
		filterOption: true,
		bordered: false,
		zIndex: 99,
		single: true
	});

	const instance = getCurrentInstance();
	const modelValue = defineModel<string | number>();
	const inputValue = shallowRef<string | number>('');
	const inputPlaceholder = shallowRef('');
	const showSelector = shallowRef(false);
	const getFilterOptions = computed(() => {
		const options = props.options || [];
		if (props.filterOption === false) {
			return options;
		}
		return options.filter(option => {
			if (!props.allowSearch) return true;
			if (!inputValue.value) return true;
			if (typeof props.filterOption === 'function') {
				return props.filterOption(inputValue.value);
			}
			const label = getOptionLabel(option as IOption);
			return String(label).indexOf(String(inputValue.value)) > -1;
		});
	});
	const getInputPlaceholder = computed(() => {
		return inputPlaceholder.value || props.placeholder || '请选择';
	});
	watch(() => modelValue.value, (val) => {
		nextTick(() => {
			if (!val && val !== 0) {
				inputValue.value = val;
				return;
			}
			const matched = props.options?.find(option => {
				return getOptionValue(option) === val;
			});
			console.log(matched);
			if (matched) {
				inputValue.value = getOptionLabel(matched);
				inputPlaceholder.value = inputValue.value as string;
			} else {
				inputValue.value = val;
				if (props.retainSearchValue) {
					inputPlaceholder.value = inputValue.value as string;
				}
			}
		});
	}, { immediate: true });

	const getOptionLabel = (option : IOption) : string | number => {
		if (typeof option === 'object') {
			if (typeof props.fieldLabel === 'function') {
				return props.fieldLabel(option);
			}
			return option[props.fieldLabel];
		}
		return option;
	};

	const getOptionValue = (option : IOption) => {
		if (typeof option === 'object') {
			if (typeof props.fieldValue === 'function') {
				return props.fieldValue(option);
			}
			return option[props.fieldValue];
		}
		return option;
	};

	const handleInputFocus = () => {
		if (props.single) {
			let $XsComboxClose = instance.appContext.config.globalProperties.$XsComboxClose;
			if (typeof $XsComboxClose === 'function') {
				$XsComboxClose();
				$XsComboxClose = null;
			}
			instance.appContext.config.globalProperties.$XsComboxClose = () => {
				closeSelector();
			};
		}
		openSelector();
		nextTick(() => {
			inputValue.value = '';
		});
	};

	onBeforeUnmount(() => {
		delete instance.appContext.config.globalProperties.$XsComboxClose;
	});

	const handleInputBlur = () => {
		const timer = setTimeout(() => {
			clearTimeout(timer);
			if (props.retainSearchValue) {
				if (inputValue.value) {
					inputPlaceholder.value = inputValue.value as string;
				} else {
					inputValue.value = inputPlaceholder.value as string;
				}
			} else {
				if (inputPlaceholder.value) {
					inputValue.value = inputPlaceholder.value;
				} else {
					inputValue.value = '';
				}
			}
		}, 300);
	}

	const handleInput = (e) => {
		if (props.allowSearch) {
			emits('search', e.detail.value);
		}
	};

	const toggleSelector = () => {
		showSelector.value = !showSelector.value;
	};

	const openSelector = () => {
		showSelector.value = true;
	};

	const closeSelector = () => {
		showSelector.value = false;
	};

	const handleInputClear = () => {
		modelValue.value = '';
		inputValue.value = '';
		inputPlaceholder.value = '';
		emits('clear');

		if (props.allowSearch) {
			emits('search', '');
		}
	}

	const handleSelectorClick = (item : IOption) => {
		inputValue.value = getOptionLabel(item);
		inputPlaceholder.value = inputValue.value as string;
		modelValue.value = getOptionValue(item);
		toggleSelector();
		emits('select', item);
	}

	defineExpose({
		toggleSelector,
		openSelector,
		closeSelector
	});
</script>
<style lang="scss" scoped>
	.xs-combox {
		position: relative;
		box-sizing: border-box;

		&-wrapper {
			box-sizing: border-box;
			display: flex;
			gap: 16rpx;

			&.bordered {
				padding: 4px;
				border-radius: 12rpx;
				border: 1px solid #EBEEF5;
			}

			&.disabled {
				opacity: 0.6;
				pointer-events: none;
			}
		}

		&-input {
			box-sizing: border-box;
			flex: 1;
			overflow: hidden;
		}

		&-selector {
			box-sizing: border-box;
			position: absolute;
			top: calc(100% + 12px);
			left: 0;
			width: 100%;
			background-color: #FFFFFF;
			border: 1px solid #EBEEF5;
			border-radius: 6px;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			// z-index: 2;

			&-wrapper {
				display: flex;
				flex-direction: column;
			}

			&-scroll {
				flex: 1;
				overflow: hidden;
				padding: 16rpx;
			}

			&-close {
				padding: 8rpx;
				border-top: 1px solid #EBEEF5;
				text-align: center;
				font-size: 14px;
			}

			&-item {
				/* #ifndef APP-NVUE */
				display: flex;
				cursor: pointer;
				/* #endif */
				// line-height: 36px;
				font-size: 14px;
				text-align: center;
				margin-bottom: 24rpx;

				&:last-of-type {
					margin-bottom: 0;
				}
			}
		}

	}
</style>