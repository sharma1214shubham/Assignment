
		function clock(){
		 var time = new Date();

		 var hrs =time.getHours();

		 var min =time.getMinutes();

		 var sec =time.getSeconds();

        var ampm = document.getElementById("ampm");
		if(hrs > 12){
			hrs= hrs-12;
		}
        if(hrs < 10){
            hrs = "0" + hrs;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(sec < 10){
            sec = "0" + sec;
        }
        if(hrs <= 12){
            ampm.innerHTML= "PM";
        }
        else{
            ampm.innerHTML= "AM";
        }
        
    //TIME CONDITION ENDS
    
    var schedule = new Date();


    var date = schedule.getDate();


    // var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // var day = days[schedule.getDay()];


    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[schedule.getMonth()];


    var year = schedule.getFullYear();


    //DATE CONDITION ENDS

    //PRINT TIME  
      document.getElementById("hrs").innerHTML= hrs;
      document.getElementById("min").innerHTML= min;      
      document.getElementById("sec").innerHTML= sec; 

    //PRINT DATE
    // document.getElementById("day").innerHTML= day;
    document.getElementById("date").innerHTML= date;
      document.getElementById("month").innerHTML= month;      
      document.getElementById("year").innerHTML= year;
    }
    setInterval(clock, 1000);