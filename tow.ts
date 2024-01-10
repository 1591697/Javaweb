let tow_a: Object = 123; //大Object，所有的类型
//小object,引用类型：数组，对象，函数
let a2: {} = 231 //和大Object 一样支持所有的类型，少用

//第三课 接口
interface Axs extends B{//继承
    name: string
    age ? : number
    //[propName:string]:any
    readonly cb: () => boolean //调用不可更改
    readonly id: () => number
}
interface B{
    happ:number
}
let kfc: Axs = {
    id: () => 156,
    happ:555,
    name: "xioama",
    age: 15, //可写可不写
    // ka:888
    cb: () => {
        return false
    },

}

//定义接口类型
interface Fn{
    (name:string):number[]
}

const fn=function(name:string){
    return [1,5,1,5,8,8,8,]
}
console.log( fn("sdfs"))

////第四章
//定义数组
let arr:boolean[]=[true]
let arr2:number=1564
let arr3:Array<boolean>=[true]//使用泛型
//定义对象数组使用的是interface  ？
interface X{
    name:string
}
let arr4:X[]=[{name:'xiaoman'},{name:"laidng"}]
//二维数组
let arr5:number[][]=[[1],[2],[3]]//二维
let arr6:Array<Array<number>>=[[1],[2],[3]]
//大杂烩数组 any[]
function as(...arsg:any){
    console.log(arsg)
    console.log(arguments)
    let a:IArguments=arguments//定义类数组
    console.log(a)
}
as(1,2,5)

//第五课--函数扩展
function add(a:number=10,b:number=20): number{//默认值,可选和默认值是冲突的，要删去等号
return a+b;
}
//箭头函数function add1(t:number,o:number):number=>t+o//有问题
console.log(add())

//传对象interface
interface In{
    name:string
}
function add3(In:In):In{
    return In
}
console.log(add3({name:"sdfs"}))
//函数this类型，ts可以定义this的类型，必须是第一个参数定义this的类型 

interface Obj{
    user:number[]
    add:(this:Obj,num:number)=>void
}
let obj:Obj={
    user:[1,2],
    add(this:Obj,num:number){
        this.user.push(num)
    }
}
obj.add(4)
//函数重载
let user:number[]=[1,2,3]

function find(ids?:number|number[]):number[]{
if(typeof ids=='number'){
return user.filter(v=>v == ids)
}
else if(Array.isArray(ids)){
     user.push(...ids)
     return user
}
else{
    return user
}
}

console.log(find([1,8,9]))
// 第六章
let phone:number | string="808-5165488"//联合类型

//强转 ！！
let fuu=function(type:number|boolean):boolean{
    return !!type
}
console.log(fuu(5))
//交叉类型
interface People{
    name:string
    age:number
}
interface man{
    sex:number
}
const xiaomann=(man:People &man):void=>{
console.log(man)
}
xiaomann({
    name:"hual",
    age:99,
    sex:1
})


//类型断言,运行时还是会出错,只能欺骗一下ts
//选择语句的时候，（type as A）


//第七章
//内置对象
let num:Number =new Number(1)
let date:Date=new Date();
//html(元素名称)element
//let div:NodeList=document.querySelectorAll('div')
//类型不固定的话可以使用nodelistof
let div:NodeListOf<HTMLDivElement|HTMLElement>=document.querySelectorAll('div')

let local:Storage=localStorage




