let username=prompt ("enter your username(admin/user):");
let password= prompt("enter your password:");


if((username==="admin"|| username==="user")&& password ==="1234") { role= username; Securitylevel=(username==="admin")?
"high": "low";
alert("welcome ${username}! Securitylevel: ${Securitylevel}");
console.log(`logged in as: ${username}!, Securitylevel: ${Securitylevel}`);
} else{
    alert("invalid credentials. access denied.");
    console.error("invalid input for people count or tip");
    throw new error("program stopped due to incorrect login.");
}

let name=prompt("what is your name?");
let age=parseInt(prompt("what is your age?"));
let cofeetype=prompt("what type of coffee do you like? (espresso,latte,cappucino)").toLowerCase();
let quantity=parseFloat(prompt("how many cups do you like?"));
console.log(`user info - name: ${name}, age:${age}`);
console.log(`coffee order- type: ${coffeetype}, quantity:${quantity}`);


let pricepercup;
switch (coffeetype){
    case "espresso":
        pricepercup= 2.5;
        break;
        case "latte":
        pricepercup= 3.5;
        break;
        case "espresso":
        pricepercup= 4.5;
        break;
        default:
            alert("invalid coffee type selected.");
            console.error("invalid coffee type.");
            throw new error("invalid coffee type.");

}

let originaltotal= pricepercup*quantity;

let discount=0;
if (age<18 || age>60) {
    discount=originaltotal*0.10;
    console.log(`discount applied:$${discount.toFixed(2)}`);

} else{
    console.log("no discount applies.");
}

let numpeople= parseInt(propmt("how many people are splitting the bill?(1,2,3,4"));
let tippersent= parseInt(prompt("enter tip persentage(0,5,10,0r 15:"));
if(![1,2,3].includes(numpeople)|| ![0,5,10,15].includes(tippersent)){
    alert("invalid input for people count or tip.");
    throw new error ("invalid input.");


}
let tipamount=(totalafterdiscount*tippersent)/100;
let totalwithtip=totalafterdiscount+tipamount;
let perperson= totalwithtip / numpeople;

console.log(`tip: $${tipamount.toFixed(2)}, total with tip :$${totalwithtip.tofixed(2)}, perperson.tofixed(2)`);


     