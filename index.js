var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
   return kittens.push("Ralph")
}
function destructivelyPrependKitten(name){
  return kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.slice()
}
// Add your functions and code here
