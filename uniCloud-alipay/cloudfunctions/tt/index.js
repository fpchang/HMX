const db = uniCloud.database();

// 清理：把 email = '' 或 null 的数据，删除 email 字段
exports.main = async (event, context) => {
  // 1. 查询出所有 email 为空或 null 的数据
  const res = await db.collection("hm-user").get();

  const list = res.data || [];
  console.log("需要清理条数：", list.length,list);

  // 2. 循环处理：删除 email 字段后重新保存
   for (let item of list) {
	   if(item.email==="" || item.email===null){
		   console.log(item);
		   delete item.email;
		   await db.collection("hm-user").doc(item._id).set(item);
	   }
    // 删掉 email 属性
   // delete item.email;

    // 重新保存（不带 email 字段 = 字段消失）
   // await db.collection("hm-user").doc(item._id).set(item);
  }

  return {
    code: 0,
    msg: "清理完成",
    count: list.length
  };
};