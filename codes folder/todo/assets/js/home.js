// js section




//  for confirming  data to be deleted 


    function confirmation(){
        if(document.getElementById("checkBox").checked==true){

      
        var result = confirm("do you want to delete ???");

        
        if(result== true){
            alert('deleted successfully!!')
        }
        else{
            var form = document.getElementById('frm');

            // Adds a listener for the "submit" event.
            form.addEventListener('submit', function(e) {
            
              e.preventDefault();
            
            });


    }
  
}
    
}





  

var element = document.getElementById("checkBox");

//If there isn't any todo than "undefined" and it isn't "null", then it exists.
if(typeof(element) != 'undefined' && element != null){
  
    console.log(element);
} else{
    document.getElementsByClassName('d2')[0].style.display='none';
    document.getElementsByClassName('d1')[0].style.marginRight='59%';
    document.getElementsByClassName('d1')[0].style.width='50rem';
    alert('Element does not exist. please insert element !!');
    document.getElementsByClassName('d1')[0].style.marginRight='59%';
    document.getElementsByClassName('d1')[0].style.width='50rem'
    // document.getElementById('main').style.margin-left=60%;
}




document.getElementsByTagName('i');