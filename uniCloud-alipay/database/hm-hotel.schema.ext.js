module.exports = {
  trigger: {
	// 注册数据表的read前事件
    beforeRead: async function (
	// 确定要监听的什么样的JQL指令
	{
      collection,
      operation,
      where,
      field
    } = {}) {
		// 当上述jql指令被触发时，将执行这里的代码。这里就是普通的uniCloud代码，可以调用uniCloud的各种api。
		console.log("update这个触发器被触发了")
    },
	beforeUpdate:async function (
	// 确定要监听的什么样的JQL指令
	{
      collection,
      operation,
      where,
      field
    } = {}) {
		// 当上述jql指令被触发时，将执行这里的代码。这里就是普通的uniCloud代码，可以调用uniCloud的各种api。
		console.log("update这个触发器被触发了")
    },
	beforeDelete:async function (
	// 确定要监听的什么样的JQL指令
	{
	  docId
	} = {}) {
		// 当上述jql指令被触发时，将执行这里的代码。这里就是普通的uniCloud代码，可以调用uniCloud的各种api。
		console.log("delete这个触发器被触发了")
	},
    afterRead: async function ({
      collection,
      operation,
      where,
      field
    } = {}) {

    }
  }
}