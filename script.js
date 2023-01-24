uname = document.getElementById("name")
email = document.getElementById("email")
password = document.getElementById("password")

localStorage.setItem("name",uname)
localStorage.setItem("email",email)
localStorage.setItem("password",password)

// console.log(localStorage.getItem(name))

function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;
    var email = document.myform.email.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
      window.open("welcome.html");
    }  
users = [
    {
        uname : "uname",
        email : "email",
        password : "password"
    }
]

function submitForm() {
    let form = document.getElementById("myform");
    form.submit();
    window.location.href = "loginpage.html"
}

function loginFunction() {
  if(email == localStorage.getItem("email"))
  {
    if(password == localStorage.getItem("password"))
    {
      // n = localStorage.getItem("name")
      // document.getElementById("name-feild").innerHTML = n;
      window.location.href = "welcome.html"
    }
    else
    {
      alert("wrong username or password")
    }
  }
  
}

function logout()
{
  window.location.href = "index.html"
}
users.append(uname,email,password);
regid = document.getElementById

serviceTitle = document.getElementById("serviceTitle");
serviceDescription = document.getElementById("serviceDescription");
localStorage.setItem("servicetitle",serviceTitle)
localStorage.setItem("serviceDescription",serviceDescription)
function saveDraft()
{
  
  window.location.href = "admin.html"
  window.alert("Saved Successfully")
}

function publishDraft()
{
  window.location.href = "services.html"
  document.write(localStorage.getItem("serviceTitle"))
  document.write(localStorage.getItem("serviceDescription"))
}

const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


for(i = 0; i ,localStorage.length; i++)
{
  document.getElementById("usertable").innerHTML+="</td><td>"+i.name+"</td><td>"+i.email+"</td></tr>"
}
// for(i of arr)
// { 
//   document.getElementById("tbody").innerHTML+="<tr> <td>"+i.first_name+"</td><td>"+i.email+"</td><td>"+i.last_name+"</td></tr>"
// }

