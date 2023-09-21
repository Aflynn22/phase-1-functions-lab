function distanceFromHqInBlocks(someValue){
    const headquarters = 42
    if(someValue < headquarters){
    return headquarters - someValue;
    }
    return someValue - headquarters
} 
//console.log(distanceFromHqInBlocks(40))



const blockInFeet = 264
function distanceFromHqInFeet(myBlock) {
   const distanceInBlocks =  distanceFromHqInBlocks(myBlock);
   return distanceInBlocks * blockInFeet
}




function distanceTravelledInFeet(start, destination) {
    if(start < destination){
        return (destination - start)*264;
    }
    return (start - destination)*264
}



function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if(distance <=400){
        return 0;
    }
    if(distance >2000 && distance <=2500){
    return 25
    }
    if(distance >= 400 && distance <= 2000){
        return (distance - 400)* .02
    }
    else if(distance > 2500){
        return "cannot travel that far"
    }
}