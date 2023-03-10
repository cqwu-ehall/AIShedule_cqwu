async function scheduleTimer({
  providerRes,
  parserRes
} = {}) {
  return {
    totalWeek: 20, // 总周数：[1, 30]之间的整数
    startSemester: '', // 开学时间：时间戳，13位长度字符串，推荐用代码生成
    startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
    showWeekend: true, // 是否显示周末
    forenoon: 4, // 上午课程节数：[1, 10]之间的整数
    afternoon: 4, // 下午课程节数：[0, 10]之间的整数
    night: 3, // 晚间课程节数：[0, 10]之间的整数
    sections: [{
      section: 1,
      startTime: '08:10',
      endTime: '08:55',
    },{
      section: 2,
      startTime: '09:05',
      endTime: '09:50',
    },{
      section: 3,
      startTime: '10:20',
      endTime: '11:05',
    },{
      section: 4,
      startTime: '11:15',
      endTime: '12:00',
    },{
      section: 5,
      startTime: '14:30',
      endTime: '15:15',
    },{
      section: 6,
      startTime: '15:25',
      endTime: '16:10',
    },{
      section: 7,
      startTime: '16:20',
      endTime: '17:05',
    },{
      section: 8,
      startTime: '17:15',
      endTime: '18:00',
    },{
      section: 9,
      startTime: '19:20',
      endTime: '20:05',
    },{
      section: 10,
      startTime: '20:15',
      endTime: '21:00',
    },{
      section: 11,
      startTime: '21:10',
      endTime: '21:55',
    }],
  }
}
