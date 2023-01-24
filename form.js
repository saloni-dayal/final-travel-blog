const submit=document.getElementById("submit")
submit.addEventListener("click",()=>{

    const first_name=document.getElementById("firstname").value
console.log(first_name)
const last_name=document.getElementById("last_name").value
const email=document.getElementById("email").value
    data={
        first_name:first_name,
        last_name:last_name,
        email:email,
    
    }
    obj1=JSON.stringify(data)
    var xhttp=new XMLHttpRequest()
    xhttp.open("POST","https://reqres.in/api/users",true)
    xhttp.setRequestHeader("content-type","application/json")
    xhttp.onreadystatechange=function(){

        if(this.readyState==4)
        {
            var response=this.responseText
            console.log(response)
        }
    }
    xhttp.send(obj1)
    
})