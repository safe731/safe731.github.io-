function randomCode(length = 7) {
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

  const url =
  document.getElementById("url").value;

  const fileName =
  document.getElementById("filename").value;

  const fileSize =
  document.getElementById("filesize").value;

  const delay =
  document.getElementById("delay").value;

  let code =
  document.getElementById("customCode").value;

  if(!code){
    code = randomCode();
  }

  const response = await fetch(
    "https://s.safe731-shortlink-api.workers.dev/create",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        code,
        url,
        fileName,
        fileSize,
        delay
      })
    }
  );

  const data = await response.json();

  if(data.success){

    document.getElementById("result").innerHTML = `
      <p>
      Generated Link:
      </p>

      <input
      value="https://safe731.github.io/go/?id=${code}"
      readonly>

    `;

  }else{

    alert("Error Creating Link");

  }

}
