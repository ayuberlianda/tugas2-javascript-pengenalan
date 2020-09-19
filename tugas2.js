var nama = "Ayu Berlianda"
var number = 201902
var statusMenikah = true
var dataAyu = ["Wanita","DPMPTSP","Drakor"]
var dataLengkap = {firtsName:"Ayu", lastName:"Berlianda", umur:"29"}

console.log("variabel", nama, "datatype ", typeof nama)
console.log("variabel", number, "datatype ", typeof number)
console.log("variabel", statusMenikah, "datatype", typeof statusMenikah)
console.log("variabel", dataAyu, "datatype", typeof dataAyu)
console.log("variabel", dataLengkap.firtsName, dataLengkap.lastName, dataLengkap.umur, "datatype", typeof dataLengkap )

dataAyu = null
console.log("variabel", dataAyu, "datatype", typeof dataAyu)

dataLengkap = undefined
console.log("variabel", dataLengkap, "datatype", typeof dataLengkap)