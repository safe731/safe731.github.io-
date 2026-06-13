function randomCode(length = 7){

const chars =
"abcdefghijklmnopqrstuvwxyz0123456789";

let result = "";

for(let i=0;i<length;i++){

result += chars.charAt(
Math.floor(Math.random()*chars.length)
);

}

return result;

}

async function generateLink(){

let code =
document.getElementById("customCode").value;

if(!code){

code = randomCode();

}

document.getElementById("result").innerHTML =
`
<p>
https://safe731.github.io/go/?id=${code}
</p>
`;

}
