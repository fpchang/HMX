const data = [
  {
    index: 2025001,
    redBall: [
       2, 15, 20, 22, 32, 34, 35,
      42, 44, 46, 50, 54, 55, 64,
      68, 71, 74, 75, 77, 79
    ]
  },
  { index: 2025002, redBall: [] },
  { index: 2025003, redBall: [] },
  {
    index: 2025004,
    redBall: [
       4,  7,  9, 12, 16, 26, 27,
      35, 36, 43, 46, 50, 53, 65,
      67, 68, 73, 75, 77, 80
    ]
  },
  { index: 2025005, redBall: [] },
  { index: 2025006, redBall: [] },
  { index: 2025007, redBall: [] },
  { index: 2025008, redBall: [] },
  { index: 2025009, redBall: [] },
  { index: 2025010, redBall: [] },
  { index: 2025011, redBall: [] },
  { index: 2025012, redBall: [] },
  { index: 2025013, redBall: [] },
  { index: 2025014, redBall: [] },
  { index: 2025015, redBall: [] },
  { index: 2025016, redBall: [] },
  { index: 2025017, redBall: [] },
  { index: 2025018, redBall: [] },
  { index: 2025019, redBall: [] },
  { index: 2025020, redBall: [] },
  { index: 2025021, redBall: [] },
  { index: 2025022, redBall: [] },
  { index: 2025023, redBall: [] },
  { index: 2025024, redBall: [] },
  { index: 2025025, redBall: [] },
  { index: 2025026, redBall: [] },
  { index: 2025027, redBall: [] },
  { index: 2025028, redBall: [] },
  {
    index: 2025029,
    redBall: [
       4,  5,  6,  7, 12, 21, 40,
      49, 51, 52, 53, 54, 59, 61,
      62, 65, 75, 76, 77, 79
    ]
  },
  {
    index: 2025030,
    redBall: [
       4, 10, 13, 18, 20, 23, 26,
      30, 33, 34, 37, 40, 45, 46,
      49, 51, 57, 63, 71, 73
    ]
  }
]

let arr = []
for (let i = 0; i < data.length; i++) {
	let item={
		index:parseInt(data[i].index),
		redBall:data[i].redBall.map(it=>parseInt(it))
	}
	arr.push(item);
}
console.log(arr)