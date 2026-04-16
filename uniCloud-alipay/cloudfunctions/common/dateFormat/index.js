module.exports = function(d,fmt) {
	let o = {
	  "M+": d.getMonth() + 1,
	  "d+": d.getDate(),
	  "H+": d.getHours(),
	  "m+": d.getMinutes(),
	  "s+": d.getSeconds(),
	  S: d.getMilliseconds()
	};
	for (var k in /(y+)/.test(fmt) && (fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length))), o) new RegExp("(" + k + ")").test(fmt) && (fmt = fmt.replace(RegExp.$1, 1 == RegExp.$1.length ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
	return fmt
	
}
