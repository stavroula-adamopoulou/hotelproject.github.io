

var rate = 0;

function submitRate(){
  var user=document.getElementById('user').value;
  var review=document.getElementById('review').value;
  if(rate != 0 && user !="" && review !=""){
    var html=
    "<p>User: " + user + "</p>"
    +"<p>Rating: " + rate + "/5</p>"
    +"<p>"+review+"</p>"
    +"<hr style='border-top:1px solid #FF8C00; width:630px; margin-left:-10px;'/>";
    document.getElementById('result').innerHTML+=html;
    
    document.getElementById('user').value="";
    document.getElementById('review').value="";
  }
}

function startRating(item){
  rate=item.id[0];
  sessionStorage.star = rate;
  for(var i=0;i<5;i++){
    if(i<rate){
      document.getElementById((i+1)).style.color="#FFD700";
    }
    else{
      document.getElementById((i+1)).style.color="black";
    }
  }
}