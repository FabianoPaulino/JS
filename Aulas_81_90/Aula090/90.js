const obj = document.querySelector(".objetos")

const lite = {
   cpu: "g",
   ram: "",
   ssd: "",
   info: function(){
      console.log(`CPU: ${this.cpu}`)
      console.log(`RAM: ${this.ram}`)
      console.log(`SSD: ${this.ssd}`)
   }
}

lite.placadevideo = "rtx"

const c1 = Object.assign(lite)
const c2 = Object.create(lite)
const c3 = Object.assign(lite)
c2.cpu = "i9"
c2.ram = "16gb"
c2.ssd = "500gb"
delete(c2.cpu)
lite.info()

const o1 = {obj1: '1'}
const o2 = {obj2: '2'}
const o3 = {obj3: '3'}
const o4 = Object.assign(o1, o2, o3)

console.log(o4)

const objs = [
   {
      cpu: "i9",
      ram: "16gb",
      ssd: "1tb"
   },
   {
      cpu: "i5",
      ram: "12gb",
      ssd: "1tb"
   },
   {
      cpu: "ryzen 7",
      ram: "16gb",
      ssd: "2tb"
   }
]

objs.forEach((c)=>{
   const div = document.createElement("div")
   div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.ssd
   div.setAttribute("class", "comp")
   obj.appendChild(div)
})
