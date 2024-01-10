let tow_a = 123; //大Object，所有的类型
//小object,引用类型：数组，对象，函数
let a2 = 231; //和大Object 一样支持所有的类型，少用
let kfc = {
    id: () => 156,
    happ: 555,
    name: "xioama",
    age: 15, //可写可不写
    // ka:888
    cb: () => {
        return false;
    },
};
const fn = function (name) {
    return [1, 5, 1, 5, 8, 8, 8,];
};
console.log(fn("sdfs"));
////第四章
//定义数组
let arr = [true];
let arr2 = 1564;
let arr3 = [true]; //使用泛型
let arr4 = [{ name: 'xiaoman' }, { name: "laidng" }];
//二维数组
let arr5 = [[1], [2], [3]]; //二维
let arr6 = [[1], [2], [3]];
//大杂烩数组 any[]
function as(...arsg) {
    console.log(arsg);
    console.log(arguments);
    let a = arguments; //定义类数组
    console.log(a);
}
as(1, 2, 5);
//第五课--函数扩展
function add(a = 10, b = 20) {
    return a + b;
}
//箭头函数function add1(t:number,o:number):number=>t+o//有问题
console.log(add());
function add3(In) {
    return In;
}
console.log(add3({ name: "sdfs" }));
let obj = {
    user: [1, 2],
    add(num) {
        this.user.push(num);
    }
};
obj.add(4);
//函数重载
let user = [1, 2, 3];
function find(ids) {
    if (typeof ids == 'number') {
        return user.filter(v => v == ids);
    }
    else if (Array.isArray(ids)) {
        user.push(...ids);
        return user;
    }
    else {
        return user;
    }
}
console.log(find([1, 8, 9]));
// 第六章
let phone = "808-5165488"; //联合类型
//强转 ！！
let fuu = function (type) {
    return !!type;
};
console.log(fuu(5));
const xiaomann = (man) => {
    console.log(man);
};
xiaomann({
    name: "hual",
    age: 99,
    sex: 1
});
//类型断言,运行时还是会出错,只能欺骗一下ts
//选择语句的时候，（type as A）
//第七章
//内置对象
let num = new Number(1);
let date = new Date();
//html(元素名称)element
//let div:NodeList=document.querySelectorAll('div')
//类型不固定的话可以使用nodelistof
let div = document.querySelectorAll('div');
let local = localStorage;
