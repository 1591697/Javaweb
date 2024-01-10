let str:string="kaka"
console.log(str)
let a:boolean=true
let b:boolean=false
let n:null=null
let c:undefined=undefined
let v1:void=null//function
//any类型 unknown 不知道的
//1.top type :any unkonwn
//2.object 一些自身的实例
//3.Number String Boolean
//4.number string boolean
//5.1        小曼   false
//6.never
let k:any=[]
k=1
k="sdf"
let xiaoman:unknown={hao:true}
//unknown 只能赋值给自身 或者是any
//unknown 无法调用属性，方法
//so:unknown安全

//代码雨
let canvas=document.querySelector('canvas')
let ctx=canvas.getContext('2d')
canvas.height=screen.availHeight
canvas.width=screen.availWidth
let str3:string[]='seasonseason'.split('')
let arrr=Array(Math.ceil(canvas.width / 10)).fill(0)
console.log("2222222222222222222")
console.log(arrr)
let rain=()=>{
ctx.fillStyle='rgba(0,0,0,0.05)'
ctx.fillRect(0,0,canvas.width,canvas.height)
ctx.fillStyle='#0f0'
arrr.forEach((item,index)=>{
    ctx.fillText(str3[Math.floor(Math.random()*str3.length)],index*10,item+10)
    arrr[index]= item > canvas.height || item >5000*Math.random()? 0:item+10//往下走，但为什么是arrr[index]? 因为item=arrr[index]
})
}
setInterval(rain,40)