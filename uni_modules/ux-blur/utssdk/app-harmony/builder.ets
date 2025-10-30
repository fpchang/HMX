@Builder
export function BlurView(params: ESObject) {
  Column()
    .borderRadius(params.cornerRadius)
    .backgroundColor(params.color)
	.blur(params.radius)
	.width('100%')
	.height('100%')
    .attributeModifier(params.attributeUpdater)
}