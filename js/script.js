let visitname = prompt(" enter visit name to website");
document.getElementById("username").innerHTML = visitname;
document.getElementById("concatenate").onclick = function () {
     let message = "Have a good day  "
     let qu = " !"
     let username = prompt( " enter a string  to concatenate with a string")
 //    alert( message + username + qu)
      let concatenate = message + username  + qu;
      document.getElementById("Statement").innerHTML = concatenate ;
    
    
    
}



document.getElementById("ask_name").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    let username = prompt(" Enter your full name.")
    document.getElementById("Statement").innerHTML = username


    
}
document.getElementById("comparision_op").onclick = function () {
     document.getElementById("Statement").innerHTML = ""
     document.getElementById("result").innerHTML = ""
     let num = +prompt("Enter your Age")
     if ( num >= 18) { 
        document.getElementById("Statement").innerHTML = "You are eligible for vote in punjab"
     } else {
        document.getElementById("Statement").innerHTML = "You are not eligible for vote in punjab"
     }


}
document.getElementById("button1").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
}

document.getElementById("button2").onclick = function () {
    document.getElementById("result").innerHTML = ""
}

document.getElementById("if_condition").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    let year = +prompt("Enter year number")
    document.getElementById("Statement").innerHTML = year

    if (year % 4 == 0) {
                    document.getElementById("result").innerHTML = " leap Year."
    } else {
        document.getElementById("result").innerHTML = " not a  leap Year." 
    }
}
document.getElementById("testing_conditiom").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    let cgpa = +prompt("enter your cgpa ")
    let attendance = +prompt("enter your attandancs" + "%")
    document.getElementById("Statement").innerHTML = "Cgpa =" + cgpa + " <br> Attandance = " + attendance + "% "
 //   document.getElementById("Statement").innerHTML = attendance

    if (cgpa >= 3 && attendance >=70)  {
         document.getElementById("result").innerHTML = "You are eligible for Scholarship."
    } else if ( cgpa >=3 || attendance >=70) {
        document.getElementById("result").innerHTML = "Please improve your cgpa or attandence for eligible of scholarship."
    }
}
document.getElementById("if_statement").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
    document.getElementById("result").innerHTML =  ""     
    let  age = +prompt("Enter age of candidate")
    if (age >= 20) {
        alert("candidate is eligible for vote in pakistan")
        document.getElementById("Statement").innerHTML = "AGE of candidate = " + age +" "
        if(age == 20){
            document.getElementById("result").innerHTML = " candidate is   eligible for vote in Punjab"
        }
        if(age >20 && age <25){
           
            document.getElementById("result").innerHTML = " candidate is   eligible for vote in Sindh"
        }
        if(age >25 && age <30){
            document.getElementById("result").innerHTML = " candidate is   eligible for vote in KpK"
        }
        if(age > 30){
            document.getElementById("result").innerHTML = " candidate is   eligible for vote in Blocgistan"
        }
        
    } else {
        document.getElementById("Statement").innerHTML = "AGE of candidate = " + age +" "
        document.getElementById("result").innerHTML = " candidate is  not eligible for vote in pakistan"
    }


}
document.getElementById("login").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
    document.getElementById("result").innerHTML =  ""
    let name = prompt("Enter UserName")
    let password = prompt(" Enter Password ")
    document.getElementById("Statement").innerHTML = name
    document.getElementById("result").innerHTML = password



}
document.getElementById("check").onclick = function () {
    
    document.getElementById("Statement").innerHTML = ""
    document.getElementById("result").innerHTML =  ""
    alert("enter user name regain")
    document.getElementById("username").innerHTML = ""
}
