/**
* Template Name: Serenity - v4.11.0
* Template URL: https://bootstrapmade.com/serenity-bootstrap-corporate-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
// function run()
// {
//     var xhr = new XMLHttpRequest();
//     var url = 'https://reqres.in/api/users?page=2';
//     xhr.open("GET",url);
//     xhr.send();
//     xhr.onload = function(){
//         data = JSON.parse(xhr.responseText);
//         var arr=data.data
//         for(i = 0; i < data.length; i++)
//         // {
//         //   var row = table.insertRow(i);
//         //   let htmlString = ` <tr>
//         //   <th scope="row">1</th>
//         //   <td>${data[i].id}</td>
//         //   <td>${data[i].email}</td>
//         //   <td>${data[i].first_name}</td>
//         //   <td>${data[i].last_name}</td>
//         //   <td>${data[i].first_name}</td>
//         //   <td><img src="${data[i].first_name}"></td>
//         //   </tr>`
//         //   row.innerHTML = htmlString
//         // }
//         for(i of arr){
//           document.getElementById("usertable").innerHTML+="<tr> <td>"+i.first_name+"</td><td>"+i.email+"</td><td>"+i.last_name+"</td></tr>"
//         }
//       }
//     }
// run();


// var tab=document.getElementById("usertable");
// //var num=document.getElementById("num")
// function run() {
//     const xhr = new XMLHttpRequest();
//     var url = 'https://reqres.in/api/users?page=2';
//     xhr.open("GET", url);
//      xhr.send();
//     var data="empty";
//     xhr.onload = function () {
//         data = JSON.parse(xhr.responseText);
//         user_data=data.data;
//         num.innerHTML=user_data.length;
//         for(i=0;i<user_data.length;i++)
//         {
//            tab.innerHTML+=adduser(user_data[i].id,user_data[i].email,user_data[i].firstname,user_data[i].lastname);
//         }
//     }


// }
// run();

// function adduser(id,email,firstname,lastname){
//   return `<tr>

//   <th>${id}</th>

//   <th>${email}</th>
//   <th>${firstname}</th>
//   <th>${lastname}</th>
//   </tr>`;
// }

// function postUser(){
//   const xhr1=new XMLHttpRequest();
//   var url = 'https://reqres.in/api/users';
//   xhr1.open("POST", url);
//   var data1={
//       id:"13",
//       email:"reddylikitha201@gmail.com",
//       firstname:"likitha",
//       lastname:"p"
//   }
//   data1=JSON.stringify(data1)
//   xhr1.setRequestHeader("content-type","application/json")

//   xhr1.send(data1)
//   console.log("success")
//   xhr1.onload = function () {
//       user_data=JSON.parse(xhr1.responseText);
//       alert("Successful"+user_data.lastname)
//       console.log(user_data.email)

//           id=user_data.id;
//           email=user_data.email;
//           firstname=user_data.firstname;
//           lastname=user_data.lastname;

//          tab.innerHTML+=`<tr>

//          <th>${id}</th>
     
//          <th>${email}</th>
//          <th>${firstname}</th>
//          <th>${lastname}</th>
//          </tr>`;
      
//   }
// }



(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Initiate portfolio lightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()


function changeSerPage()
{
  window.location.href = "createservice.html"
}

// for (i = 0; i < localStorage.length; i++) {    x = localStorage.key(i);      lastname=localStorage.getItem(x);      obj1=JSON.parse(lastname);      document.getElementById("tbody").innerHTML="<tr> <td>"+obj1.name+"</td><td>"+obj1.mail+"</td><td>"+obj1.username+"</td><td>"+obj1.address+"</td><td class='text-end'><a href=' ' class='btn btn-outline-info btn-rounded'><i class='fas fa-pen'></i></a><a href='' class='btn btn-outline-danger btn-rounded'><i class='fas fa-trash'></i></a></td></tr>"  }

function sendMessage()
{
  
}





var table = document.getElementById("usertable");





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
  // if(email == localStorage.getItem("email"))
  // {
  //   if(password == localStorage.getItem("password"))
  //   {
  //     // n = localStorage.getItem("name")
  //     // document.getElementById("name-feild").innerHTML = n;
  //     window.location.href = "welcome.html"
  //   }
  //   else
  //   {
  //     alert("wrong username or password")
  //   }
  // }
  window.location.href = "welcome.html"
  
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


for(i = 0; i <localStorage.length; i++)
{
  document.getElementById("usertable").innerHTML+="<tr> <td>"+localStorage[i].name+"</td><td>"+localStorage[i].email+"</td></tr>"
}
// for(i of arr)
// { 
//   document.getElementById("tbody").innerHTML+="<tr> <td>"+i.first_name+"</td><td>"+i.email+"</td><td>"+i.last_name+"</td></tr>"
// }

a = [{
  name: "sample",
  email: "sample@email.com",
  subject: "subject1",
  message: "this is the query message please solve it"
}]
function sendMessage()
{
  qname = document.getElementById("qname");
  qemail = document.getElementById("qemail");
  qsubject = document.getElementById("qsubject");
  qMessage = document.getElementById("qMessage");
  a.push(qname,qemail,qsubject,qMessage);
}

for(i = 0; i <a.length; i++)
{
  document.getElementById("querytable").innerHTML+="<tbody><tr><th scope='row'>"+(i+1)+"</th><td>"+a[i].name+"</td><td>"+a[i].email+"</td><td>"+a[i].subject+"</td><td>"+a[i].message+"</td></tr></tbody>"
}
