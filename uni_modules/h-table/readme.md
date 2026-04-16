# h-table

h-table（unix）组件库，一款适配 uni-app x 的轻量、简洁、高效、全面的移动端表格组件。

### 使用组件

引入组件后，可以在 页面 中直接使用组件
### vue:
``` html
<template>
	<view class="listTitle">
		<text class="listText">普通表格</text>
	</view>
	<scroll-view class="scroll-view" direction="horizontal" scroll-x="true">
		<view class="box-pad">
			<h-table>
				<h-tr :head="true">
					<h-td>流程</h-td>
					<h-td :width="120">状态</h-td>
					<h-td :width="120">计划开始</h-td>
					<h-td :width="120">计划完成</h-td>
				</h-tr>
				<h-tr v-for="(item,index) in (list as List[])" :key="index">
					<h-td>{{item.NodeLabel}}</h-td>
					<h-td :width="120">
						<text v-if="item.StatusName == '已完成'" class="text-cut success">{{item.StatusName}}</text>
						<text v-else-if="item.StatusName == '处理中'" class="text-cut warning">{{item.StatusName}}</text>
						<text v-else class="text-cut danger">{{item.StatusName}}</text>
					</h-td>
					<h-td :width="120">{{item.PlanEndDateStr}}</h-td>
					<h-td :width="120">{{item.ActualEndDateStr}}</h-td>
				</h-tr>
			</h-table>
		</view>
	</scroll-view>
	<view class="listTitle">
		<text class="listText">斑马线</text>
	</view>
	<scroll-view class="scroll-view" direction="horizontal" scroll-x="true">
		<view class="box-pad">
			<h-table>
				<h-tr :head="true">
					<h-td>流程</h-td>
					<h-td :width="120">状态</h-td>
					<h-td :width="120">计划开始</h-td>
					<h-td :width="120">计划完成</h-td>
				</h-tr>
				<h-tr v-for="(item,index) in (list as List[])" :key="index" :class="index%2 == 1?'h-tr-zebra':''">
					<h-td>{{item.NodeLabel}}</h-td>
					<h-td :width="120">
						<text v-if="item.StatusName == '已完成'" class="text-cut success">{{item.StatusName}}</text>
						<text v-else-if="item.StatusName == '处理中'" class="text-cut warning">{{item.StatusName}}</text>
						<text v-else class="text-cut danger">{{item.StatusName}}</text>
					</h-td>
					<h-td :width="120">{{item.PlanEndDateStr}}</h-td>
					<h-td :width="120">{{item.ActualEndDateStr}}</h-td>
				</h-tr>
			</h-table>
		</view>
	</scroll-view>
</template>
```
### TS:
``` javascript
type List = {
	NodeLabel : string;
	PlanEndDateStr : string;
	ActualEndDateStr : string;
	StatusName : string;
}
export default {
	data() {
		return {
			list: [{
				NodeLabel: '流程',
				PlanEndDateStr: '2024-02-01',
				ActualEndDateStr: '2024-02-02',
				StatusName: '已完成'
			}, {
				NodeLabel: '流程',
				PlanEndDateStr: '2024-02-01',
				ActualEndDateStr: '2024-02-02',
				StatusName: '处理中'
			}, {
				NodeLabel: '流程',
				PlanEndDateStr: '2024-02-01',
				ActualEndDateStr: '2024-02-02',
				StatusName: '未开始'
			}] as List[]
		}
	},
	onLoad() {

	},
	methods: {

	}
}
```
### scss:
``` scss
@import "@/uni_modules/h-table/components/h-table/h-table.scss"
```