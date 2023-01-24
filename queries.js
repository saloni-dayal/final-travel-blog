query_data=JSON.parse(localStorage["queries"])
console.log(query_data)
var que=document.getElementById("usertable")
var num1=document.getElementById("num1")
num1.innerHTML=query_data.length
for(i=0;i<query_data.length;i++)
{
    name=query_data[i].name
    email=query_data[i].email
    subject=query_data[i].subject
    message=query_data[i].message

    que.innerHTML+=`<tr>

           <th>${name}</th>
       
           <th>${email}</th>
           <th>${subject}</th>
           <th>${message}</th>
           </tr>`;
}