const data = [
  {
    secondctgyid: 1,
    secondctgyname: '0-2岁',
    firstctgyid: 1,
    thirdctgyid: 1,
    thirdctgyname: '图画故事'
  },
  {
    secondctgyid: 1,
    secondctgyname: '0-2岁',
    firstctgyid: 1,
    thirdctgyid: 2,
    thirdctgyname: '认知'
  },
  {
    secondctgyid: 1,
    secondctgyname: '0-2岁',
    firstctgyid: 1,
    thirdctgyid: 3,
    thirdctgyname: '益智游戏'
  },
  {
    secondctgyid: 1,
    secondctgyname: '0-2岁',
    firstctgyid: 1,
    thirdctgyid: 4,
    thirdctgyname: '纸板书'
  },
  {
    secondctgyid: 1,
    secondctgyname: '0-2岁',
    firstctgyid: 1,
    thirdctgyid: 5,
    thirdctgyname: '艺术课堂'
  },
  {
    secondctgyid: 1,
    secondctgyname: '0-2岁',
    firstctgyid: 1,
    thirdctgyid: 6,
    thirdctgyname: '入园准备'
  },
  {
    secondctgyid: 2,
    secondctgyname: '3-6岁',
    firstctgyid: 1,
    thirdctgyid: 7,
    thirdctgyname: '绘本'
  },
  {
    secondctgyid: 2,
    secondctgyname: '3-6岁',
    firstctgyid: 1,
    thirdctgyid: 8,
    thirdctgyname: '科普百科'
  },
  {
    secondctgyid: 2,
    secondctgyname: '3-6岁',
    firstctgyid: 1,
    thirdctgyid: 9,
    thirdctgyname: '少儿英语'
  },
  {
    secondctgyid: 2,
    secondctgyname: '3-6岁',
    firstctgyid: 1,
    thirdctgyid: 10,
    thirdctgyname: '乐高学习'
  },
  {
    secondctgyid: 2,
    secondctgyname: '3-6岁',
    firstctgyid: 1,
    thirdctgyid: 11,
    thirdctgyname: '入学准备'
  },
  {
    secondctgyid: 3,
    secondctgyname: '7-10岁',
    firstctgyid: 1,
    thirdctgyid: 12,
    thirdctgyname: '文学'
  },
  {
    secondctgyid: 3,
    secondctgyname: '7-10岁',
    firstctgyid: 1,
    thirdctgyid: 13,
    thirdctgyname: '科普百科'
  },
  {
    secondctgyid: 3,
    secondctgyname: '7-10岁',
    firstctgyid: 1,
    thirdctgyid: 14,
    thirdctgyname: '卡通动漫'
  },
  {
    secondctgyid: 3,
    secondctgyname: '7-10岁',
    firstctgyid: 1,
    thirdctgyid: 15,
    thirdctgyname: '童话'
  },
  {
    secondctgyid: 3,
    secondctgyname: '7-10岁',
    firstctgyid: 1,
    thirdctgyid: 16,
    thirdctgyname: '少儿英语'
  },
  {
    secondctgyid: 4,
    secondctgyname: '11-14岁',
    firstctgyid: 1,
    thirdctgyid: 17,
    thirdctgyname: '励志'
  },
  {
    secondctgyid: 4,
    secondctgyname: '11-14岁',
    firstctgyid: 1,
    thirdctgyid: 18,
    thirdctgyname: '地理'
  },
  {
    secondctgyid: 4,
    secondctgyname: '11-14岁',
    firstctgyid: 1,
    thirdctgyid: 19,
    thirdctgyname: '政治'
  },
  {
    secondctgyid: 4,
    secondctgyname: '11-14岁',
    firstctgyid: 1,
    thirdctgyid: 20,
    thirdctgyname: '趣味幽默'
  },
  {
    secondctgyid: 4,
    secondctgyname: '11-14岁',
    firstctgyid: 1,
    thirdctgyid: 21,
    thirdctgyname: '少儿英语'
  },
  {
    secondctgyid: 4,
    secondctgyname: '11-14岁',
    firstctgyid: 1,
    thirdctgyid: 22,
    thirdctgyname: '益智游戏'
  },
  {
    secondctgyid: 4,
    secondctgyname: '11-14岁',
    firstctgyid: 1,
    thirdctgyid: 23,
    thirdctgyname: '艺术课堂'
  },
  {
    secondctgyid: 4,
    secondctgyname: '11-14岁',
    firstctgyid: 1,
    thirdctgyid: 24,
    thirdctgyname: '游戏/手工'
  },
  {
    secondctgyid: 4,
    secondctgyname: '11-14岁',
    firstctgyid: 1,
    thirdctgyid: 25,
    thirdctgyname: '绘画'
  }
]

type EleOfArray<T> = T extends Array<infer E> ? E : never

type ItemType<T extends keyof EleOfArray<typeof data>> = Pick<
  EleOfArray<typeof data>,
  T
>

type ArrayT = ItemType<keyof EleOfArray<typeof data>>
const getSubItemsFrmArr = <
  T extends ArrayT[],
  K extends keyof EleOfArray<typeof data>
>(
  array: T,
  ...keys: K[]
) => {
  const arr = array.map((item) => {
    return keys.reduce((prev, key, index) => {
      return { ...prev, [key]: item[key] }
    }, {})
  })

  console.log(arr)
}

function convert(data: any) {
  let secCtgyLst = getSubItemsFrmArr(data, 'secondctgyid', 'secondctgyname')
}

convert(data)
