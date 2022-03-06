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

    let Fakanname = akanFnames[dayO]

    let Makanname = akanMnames[dayO]

      if(birthday === ""){
        alert("Give a date")
      } else if(female.checked != true && male.checked !=true){
      alert("choose gender")
      }else { if(female.checked === true){
        alert(`Your birthday is on  ${realday}
       your Akanname is ${Fakanname}`)
      } else {
       alert(`Your birthday is on  ${realday}
       your Akanname is ${Makanname}`)
      }}


  })}
  

getDayofWeek()
















