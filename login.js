var form = document.querySelector(".login100-form");
form.onsubmit=(e)=>{
    e.preventDefault();
    document.querySelector(".alrt").innerText = "Login in . . ."
    document.querySelector(".alrt").classList.remove("hidden")
    let Info_login = {"email":"" , "password":""};
    Info_login['email']=document.querySelectorAll(".input100")[0].value
    Info_login['password']=document.querySelectorAll(".input100")[1].value
    let input_values= document.querySelectorAll(".input100");
    for(let i=0 ; i<input_values.length ; i++){
        input_values[i].value="";
    }
    if(Info_login['email']=="js_chelihi@esi.dz" && Info_login['password']=="12345678"){
        localStorage.setItem("email",Info_login['email'])
        localStorage.setItem("enligne",Info_login['email'])
        location.replace("index.html");
    }
//     fetch("https://projet1cs-api.herokuapp.com/login",{
//         method : 'POST',
//         body : Info_login 
//     }).then(Answer=>Answer.json()).then(Data=>{
//         // if(Data.etat=="true"){
//         //     localStorage.setItem("id",Data.id)
//         //     localStorage.setItem("code",Data.code);
//         //     location.replace("../Profile/Profile.html");
//         // }else{
//         //     document.querySelector(".alrt").innerText = Data.etat ;
//         //     setTimeout(()=>{
//         //             document.querySelector('.alrt').classList.add('hidden');
//         //     },2000)
//         // }
//    })
}