window.addEventListener("load", function(){
    var data = ["doge", "cate", "birb", "doggo", "moon moon", "awkward seal"];
    
    var perrow = 5,
        html = '<table class="table"><tr><tr><tr><tr><tr>';
    for (var i=0; i<data.length; i++) {
      html += `<td>${data[i]}</td>`;
      var next = i+1;
      if (next%perrow==0 && next!=data.length) {
        html += "</tr><tr>";
      }
    }
    html += "</tr></table>";
  
    document.getElementById("container").innerHTML = html;
  });