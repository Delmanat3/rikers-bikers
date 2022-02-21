let id:number=5

let company:string="traverse "
let isPublished:boolean=true
// let x:any="balls"
// let y:any[]=[1,2,3,4,5,6,7]

//tuple
let person: [number,string,boolean]=[1,"gay",false]
//expects in exact order

let employee:[number,string] []
employee=[
    [1,"nathan"],
    [2,"no"],
    [3,"nathan"]
]

//Union
let rid:string | number=22



//Enum
enum direction1{
    Up,//initial values incrememnt 0,1,2,3,4,5
    Down,
    Left,
    Right
}

//Objects
type User={
    id:number,
    name:string
}


const user:User={
    id:1,
    name:"john"
}

//type assertion
let cid:any=1

// let custId = <number>cid || let custId=cid as number
function addNum(x:number,y:number):number{//function return value
    return x+y
}


function Log(message:string|number):void{
    console.log(message)

}
//Interfaces
interface userInterface{
  readonly  id:number,//makes it read only lol
    name:string
    age?:number,//makes property optional
}


const user1:userInterface={
    id:1,
    name:"john"
}
//type can be used with primitives or Unions
// user1.id=5
interface mathFunc{
    (x:number,y:number):number
}
//functions with interfaces
const add:mathFunc=(x:number,y:number):number=>x+y//return val is x+y
const sub:mathFunc=(x:number,y:number):number=>x-y //return val is x-y

//classes
class Person{
 id:number
    name:string

    constructor(id:number,name:string){
        this.id=id
        this.name=name
    }

}
const nathan=new Person(2,"nathan")
//public private and protected 