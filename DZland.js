var form = document.querySelector(".comments");
form.onsubmit=(e)=>{
    e.preventDefault();
    document.querySelector(".alrt").innerText = "Ajouter commentaire . . ."
    document.querySelector(".alrt").classList.remove("hidden")
    if(localStorage.getItem("enligne")==null){
        document.querySelector(".alrt").innerText =" Veuillez vous connecter" ;
        document.querySelector(".inpc").value="";
        setTimeout(()=>{
            document.querySelector('.alrt').classList.add('hidden');
        },2000)
    }else{
        document.querySelector(".alrt").innerText = "Commentaire ajouté";
            setTimeout(()=>{
                document.querySelector('.alrt').classList.add('hidden');
            },2000)
            document.querySelector(".inpc").value="";
//         let json={"email":"" , "comment":""}
//         json['email']=localStorage.getItem("email")
//         json['comment']=document.querySelector(".inpc").value
//         document.querySelector(".inpc").value="";
//         fetch("https://projet1cs-api.herokuapp.com/comments",{
//         method : 'POST',
//         body : json
//     }).then(Answer=>Answer.json()).then(Data=>{
//             document.querySelector(".alrt").innerText = "Commentaire ajouté";
//             setTimeout(()=>{
//                 document.querySelector('.alrt').classList.add('hidden');
//             },2000)    
//    })
}
}