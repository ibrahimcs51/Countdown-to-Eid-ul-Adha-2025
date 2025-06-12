
// Eid ul Adha 2025 expected date (June 7, 2025)
const eidDate = new Date('may 27, 2026 00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the distance between now and Eid date
    const distance = eidDate - now;
    
    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('greeting').textContent = 'Eid Mubarak!';
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    //   function updatetex(){
    //     var greeting=document.getElementsByClassName("greeting")
    //     greeting.textContent="kher mubrak" ;
    //   }
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the results
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
   
    





}, 1000);
function Updatebtn(){
    var main=document.getElementById("main")
    main.id="box" 
}
 function updatetex(){
        var greeting=document.getElementsByClassName("greeting")
        greeting.textContent="kher mubrak" ;
      }

     var count=0;

      function abc(){
        console.log(count++)
        count+3;

      }
      setInterval(abc,1000) 
