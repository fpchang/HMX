// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "flatsheet20_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "2.0米床单数量",
    "label": "2.0米床单数量"
  },
  "flatsheet18_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "1.8米床单数量",
    "label": "1.8米床单数量"
  },
  "flatsheet15_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "1.5米床单数量",
    "label": "1.5米床单数量"
  },
  "flatsheet13_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "1.3米床单数量",
    "label": "1.3米床单数量"
  },
  "flatsheet12_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "1.2米床单数量",
    "label": "1.2米床单数量"
  },
  "duvetCoverMax_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "大被套数量",
    "label": "大被套数量"
  },
  "duvetCoverMini_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "小被套数量",
    "label": "小被套数量"
  },
  "bathTowel_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "浴巾数量",
    "label": "浴巾数量"
  },
  "faceTowel_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "面巾数量",
    "label": "面巾数量"
  },
  "floorTowel_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "地巾数量",
    "label": "地巾数量"
  },
  "bedRunner_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "床尾巾数量",
    "label": "床尾巾数量"
  },
  "flatsheet20_back_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "返还2.0米床单数量",
    "label": "返还2.0米床单数量"
  },
  "flatsheet18_back_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "返还1.8米床单数量",
    "label": "返还1.8米床单数量"
  },
  "flatsheet15_back_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "返还1.5米床单数量",
    "label": "返还1.5米床单数量"
  },
  "flatsheet13_back_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "返还1.3米床单数量",
    "label": "返还1.3米床单数量"
  },
  "flatsheet12_back_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "返还1.2米床单数量",
    "label": "返还1.2米床单数量"
  },
  "duvetCoverMax_back_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "返还大被套数量",
    "label": "返还大被套数量"
  },
  "duvetCoverMini_back_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "返还小被套数量",
    "label": "返还小被套数量"
  },
  "bathTowel_back_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "返还浴巾数量",
    "label": "返还浴巾数量"
  },
  "faceTowel_back_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "返还面巾数量",
    "label": "返还面巾数量"
  },
  "floorTowel_back_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "返还地巾数量",
    "label": "返还地巾数量"
  },
  "bedRunner_back_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "返还床尾巾数量",
    "label": "返还床尾巾数量"
  },
  "status": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "value": 0,
            "text": 0
          },
          {
            "value": 1,
            "text": 1
          },
          {
            "value": 9,
            "text": 9
          }
        ]
      }
    ]
  }
}

const enumConverter = {
  "status_valuetotext": {
    "0": 0,
    "1": 1,
    "9": 9
  }
}

function filterToWhere(filter, command) {
  let where = {}
  for (let field in filter) {
    let { type, value } = filter[field]
    switch (type) {
      case "search":
        if (typeof value === 'string' && value.length) {
          where[field] = new RegExp(value)
        }
        break;
      case "select":
        if (value.length) {
          let selectValue = []
          for (let s of value) {
            selectValue.push(command.eq(s))
          }
          where[field] = command.or(selectValue)
        }
        break;
      case "range":
        if (value.length) {
          let gt = value[0]
          let lt = value[1]
          where[field] = command.and([command.gte(gt), command.lte(lt)])
        }
        break;
      case "date":
        if (value.length) {
          let [s, e] = value
          let startDate = new Date(s)
          let endDate = new Date(e)
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
      case "timestamp":
        if (value.length) {
          let [startDate, endDate] = value
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
    }
  }
  return where
}

export { validator, enumConverter, filterToWhere }
