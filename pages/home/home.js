// getApp()获取APP产生的示例对象
const app=getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)
Page({
  data: {
    name: "Coderwhy",
      students:[
      {id:222,name:"MrLiu",age:10},
      { id: 333, name: "Mrli", age: 20 },
       { id: 444, name: "Mrhou", age: 30 }
    ],
    couter:0
  },
  btnClick(){
//     //1.错误的做法界面不会刷新
// this.data.couter +=1
    this.setData({
      couter:this.data.couter+=1
    })
  },
  BtnClick(){
    this.setData({
      couter:this.data.couter-1
    })
  },
  BtnhandleGetUserInfo(event){
    console.log(event)
  }

})