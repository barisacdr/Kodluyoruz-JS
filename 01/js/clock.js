function showTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let dd = date.getDate();
    let month =  date.getMonth();
    let year = date.getFullYear();
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
     dd = (dd < 10) ? "0" + dd : dd;
     month = (month < 10) ? "0" + month : month;

     var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
     var dayName = days[date.getDay()];
    let time = hh + ":" + mm + ":" + ss + " " + dd + "/" + month + "/" + year + " | " + dayName;

    
    document.getElementById("myClock").innerText = time; 
    let t = setTimeout(function(){ showTime() }, 1000);
  }
  showTime();