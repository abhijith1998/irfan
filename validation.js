// mobile number validation
function Phonenumber(inputtxt)
{
  var inputtxt = inputtxt.target.value;
  var phoneno = /^\d{10}$/;
  if((inputtxt.match(phoneno)))
        {
            document.getElementById('message').innerHTML=""
      return true;
        }
      else
        {
        document.getElementById('message').innerHTML="please type valid phone number";
        return false;
        }
}
