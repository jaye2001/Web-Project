
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

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var selectBox = document.getElementById('selectBox');
  

    if (selectBox.selectedIndex < 0) {
        alert('Please select an option from the select box');
        return false;
      }

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

    if (phone == "") {
        alert("Please enter an Phone Number");
        return false;
      }

    alert("Successfully Requested We will contact you within 24 hours");
    return true;
  };




  
  
  
  
  