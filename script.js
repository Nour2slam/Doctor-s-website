let content = document.querySelector(".content")
let notif = document.querySelector(".toggle") 
let task1 = document.querySelector(".task1")
let input = document.querySelector("input")
let task2 = document.createElement("table")
let container = document.querySelector(".add")
let TestReports = document.createElement("div")
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let enter = document.querySelector(".pre")
let cards = document.createElement("div")
let card = document.querySelectorAll(".card")
let profile = document.querySelector(".profile")
let table = document.querySelector("table") 



let m = document.querySelector(".m")
let s = document.querySelector('.s')

notif.addEventListener("click",toggels)
let y = 1  
function toggels() {
  
    if (y === 1) {
        notif.src = m.src
       document.body.style.backgroundColor = "#210"
       task1.style.backgroundColor = "Gray"
       task2.style.backgroundColor = "Gray"
       container.style.backgroundColor = "Gray"
        TestReports.style.backgroundColor = "Gray"
  
       y = 2

    }

else if(y == 2 ) {
    notif.src = s.src
   document.body.style.backgroundColor = "whiteSmoke"
   task1.style.backgroundColor = "white"
   task2.style.backgroundColor = "white"
   container.style.backgroundColor = "white"
    TestReports.style.backgroundColor = "white"
y = 1
}

}

profile.addEventListener("click",openProfile)
function openProfile() {
    let popup2 = document.createElement("div")
    popup2.classList.add("popup2")
    let img = document.createElement("img")
    img.src = "web.png"
    img.style.width = "100px"
    let name = document.createElement("h3")
    name.innerHTML = "Dr.Alex Hess"
    let logOut = document.createElement("div")
    let link = document.createElement("a")
    link.href = "sign in page.html"
    let out = document.createElement("button") 
    out.textContent = "Log Out"  
    
    let logout = document.createElement("img")
    logout.src = "log-out.png"
    logout.classList.add("icon")
    let close = document.createElement("img")
    close.src = "close.png"
    close.classList.add("lock")
    close.onclick = function () {
     close2(popup2)   
    } 
    logOut.append(out , logout)
    link.append(logOut)
    popup2.append(close,img,name,link)
    document.body.append(popup2)
    logOut.classList.add("logout")
    content.onclick = function () {
        close2(popup2)
    }
}
function close2(div) {
    div.style.display = "none"
}


let data1 = {
   img : "" ,
   name : "Roger Curtis",
   age : "Age:36",

}

let data2 = {
    Gender : "Male",
    BloodType : "O+ (Positive) ",
    Allergies : "Milk, pinicilin",
    Diseases : "Diabetes, Blood Disorders",
    Height : "1.78m",
    Weight : "65 kg",
    PatientID : "208898786" ,
    LastVisit : "25th october 2019"
}
let data3 = {
    TestReports : "" ,
    CT : `CT Scan -Full Body
    12th February 2020` ,   
   creatine : `Creatine Kinase T
   12th February 2020`,
   Eye : `Eye Flourescien Test   12th February 2020`

}

let data4 = [
    {
   img : "heart (2).png",
    title : "Heart Rate",
    rate : "80bpm"
    },
    {
        img : "thermometer.png",
        title : "Body Temperature",
        rate : "36.5*c"
    },
    {
        img : "blood-test.png",
        title :"Glucose",
        rate : "100mg/dl"
    }
]


function one() {
let img = document.createElement("img")
img.src = "person.jpg"
img.classList.add("image")
let name = document.createElement("h3")
name.textContent = data1.name
let age = data1.age
age.innerHtml = age
task1.append(img, name , age)   
input.onchange = function () {
    updata(img)
}
 }
one()

function updata(img) {
    console.log(4567);
    
      let fr = new FileReader();
    fr.readAsDataURL(input.files[0])   
    fr.onload = function () {
        
        img.src = fr.result
    };     
    }
 


function two() {
let img = document.createElement("img")
img.src = "edit.png"
img.addEventListener("click",function () {
  editData2()
})
  let information = document.createElement("h3")
  information.textContent = "Information:"
  for (let element in data2 ) {  
   let row = document.createElement("tr")  
   let key = document.createElement("td")
   key.classList.add("key")
   let val = document.createElement("td")
   val.classList.add("value")
   val.classList.add(element + "_value")

key.textContent = element + ":"
val.textContent = data2[element]
row.append(key , val)
task2.append(information,img)
task2.append(row)
img.classList.add("icon")
img.classList.add("edit")
task2.classList.add("task2")
left.append(task2)
  }

//   gend.textContent = "Gender:" +  data2.Gender
//   let BloodType = document.createElement("h5")
//   BloodType.textContent = "Blood Type:  " + data2.BloodType
//   let aller = document.createElement("h5")
//   aller.textContent = "Allergies:  " + data2.Allergies
//   let Diseases = document.createElement("h5")
//   Diseases.textContent = "Diseases:  " + data2.Diseases
//   let height = document.createElement("h5")
//   height.textContent = "Height:  " + data2.Height
//   let weight = document.createElement("h5")
//   weight.textContent = "Wieght:  " + data2.Weight
//   let PatientID = document.createElement("h5")
//   PatientID.textContent = "PatientID:  " + data2.PatientID
//   let LastVisit = document.createElement("h5")
//   LastVisit.textContent = "LastVisit:  " + data2. LastVisit

//   task2.append(information, gend, BloodType, aller, Diseases, height, weight, PatientID, LastVisit)


}
two()


function editData2() {
    let popup = document.createElement("div")
    popup.classList.add("popup")
    let popupDiv = document.createElement("div") 
    for (let element in data2 ) {   
        let row = document.createElement("tr")  
        let key = document.createElement("td")
        key.classList.add("key")
        let input = document.createElement("input")
     key.textContent = element + ":"
     row.append(key , input)  
     popupDiv.append(row)
   
  }
    let btn = document.createElement("button")
    btn.textContent = "edit"
    btn.classList.add("btn")
      btn.onclick = function () {

        let values = Object.values(data2)
        values.value = input.value 
    
console.log(Object.values(data2));
    
       
     }
    popup.style.display = "flex"
    popupDiv.append(btn)
    popupDiv.classList.add("popup2Div")  
    popup.append(popupDiv)  
    document.body.append(popup)
    popup.addEventListener("click",function (event) {
        if (event.target === popup) {
            popup.style.display = "none"
        }
        else {
            popup.style.display = "flex" 
        }
    })
}

let testsDiv = document.createElement("div")
function three() {
    let testrebo = document.createElement("h1")
    testrebo.textContent = "TestReports"
    let ct = document.createElement("h3")
    ct.textContent = data3.CT
    let creatine = document.createElement("h3")
    creatine.textContent = data3.creatine
    let eye = document.createElement("h3")
    eye.textContent = data3.Eye
    testsDiv.append(ct, creatine, eye)
    TestReports.append(testrebo, testsDiv)
    right.append(TestReports)
    TestReports.classList.add("Test")
    testsDiv.classList.add("tests")
}
three()

function four() {

    cards.classList.add("cards")
    for (const object of data4) {
let card = document.createElement("div");
card.classList.add("card");
let image = document.createElement("img")
image.src = object.img
let title = document.createElement("h4");
title.textContent = object.title;
let rate = document.createElement("h4")
rate.textContent = object.rate
card.append(image, title, rate)
cards.append(card)
right.append(cards)
image.classList.add("icon")
    }
}

four()

enter.addEventListener ("click", open )

function open() { 
   let popup = document.createElement("div") 
   let popupDiv = document.createElement("div")
   popupDiv.classList.add("popupDiv")       
   let inp = document.createElement("input")
   inp.setAttribute("type", "text")
   inp.setAttribute("placeholder", "enter priscription" )
   let inp2 = document.createElement("input")
   inp2.setAttribute("type", "date")
   inp2.setAttribute("placeholder", "enter date" )  
   let inp3 = document.createElement("input")
   inp3.setAttribute("type","number")
   inp3.setAttribute("placeholder", "Duration" )   
 document.body.append(popup)
popup.classList.add("popup")    
popup.style.display ="flex"  
popup.appendChild(popupDiv)
inp3.style.width = "50%"
let select = document.createElement("select")
    let option1 = document.createElement("option")
    option1.textContent = "day"
    option1.value = "day"
    let option2 = document.createElement("option")
    option2.textContent = "month"
    option2.value = "month"
    let option3 = document.createElement("option")
    option3.textContent = "week"
    option3.value = "week"
    select.append(option1,option2,option3)
    let btn = document.createElement("button")
    btn.textContent = "Add"
    btn.classList.add("btn")
     btn.addEventListener("click",function () {
        add(inp,inp2,inp3,select)
        close(popup)
     })
     
    popupDiv.append(inp , inp2, inp3,select,btn)



// popup.addEventListener("click",function (event) {
//     if (event.target === popup) {
//         popup.style.display = "none"
//     }
//     else {
//         popup.style.display = "flex" 
//     }
// })
  
  
 }



function close(element) {
    console.log(element);
    
    element.style.display = "none"
}




function add(inp,inp2,inp3,select) {

    if (inp.value != "") {    
   let item = document.createElement("tr")
   item.classList.add("item")
   item.classList.add("tr")
   let td1 = document.createElement("td")  
   td1.textContent = inp.value
   right.classList.add("cotainer")
   let td2 = document.createElement("td")  
   td2.textContent = inp2.value
   if(inp2.value == "") {
        let date = new Date()
    
      td2.textContent =  date.textContent

    }
   let td3 = document.createElement("td")  
   td3.textContent = inp3.value + select.value
   item.append(td1, td2, td3)
   table.append(item)   

let popup = document.querySelector(".popup")
popup.style.display = "none"

inp.value = ""
inp2.value = ""
inp3.value = ""

    }
  


  
}

