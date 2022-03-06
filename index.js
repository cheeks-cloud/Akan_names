  const button = document.getElementById("submitid");
  
  const akanFnames =["kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  
  const akanMnames =["Akosua","Adwoa","Abenna","Akua","Yaa","Afua","Ama"]
  
  const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  var female = document.getElementById("femaleid")
  var male = document.getElementById("maleid")
  


var getDayofWeek = () => {

  button.addEventListener("click",() => {
    let birthday = document.getElementById("dateid").value
    let birthday2 = new Date(birthday)
    let dayO = birthday2.getDay()
    let realday = days[dayO]
    console.log(realday)
  })}
  getDayofWeek()

  let dayOfBirth = getDayofWeek()

//   var getAkanname = () => {

//   if(female){
//    console.log(`Your birthday is on  ${dayOfBirth}
//     your akanname is ${akanFnames[dayOfBirth]}`)

//   } else if(male){
//   console.log(`Your birthday is on  ${dayOfBirth}
//   your akanname is ${akanFnames[dayOfBirth]}`)

//   }else{
//     console.log("try again")
//   }
 
// }

// getAkanname()
