
function validateNews() {

    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
  

    if (email == "") {
      alert("Please enter an email address");
      return false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    if (name == "") {
      alert("Please enter a name");
      return false;

    }

    alert("Successfully Subscribed for News Alerts");
    return true;
  };




  function validateAdopt() {

    var selectBox = document.getElementById('selectBox').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    if (selectBox == 'select a dog' || name == '' || email == '' || phone == '') {
      alert('Please fill out all required fields');
      return false; // prevent the form from being submitted
    } else {
      // form is valid, submit the form
      alert("We will contact you within 24 hours Thank You.");
 
    }
  }
  



  
  
  
  
  