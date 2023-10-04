let request = new XMLHttpRequest();
let result=[];
request.open('GET','http://universities.hipolabs.com/search?country=United+States');
request.send();
request.onreadystatechange=function(){
    if (request.readyState==4){
        result=JSON.parse(request.response);
        displayData();
    }

}
function displayData(){
    let data="";
    for (let i=0; i<20;i++){
        data+=`<tbody>
              <tr>
              <td>${i}</td>
              <td>${result[i].name}</td>
              <td>${result[i].alpha_two_code}</td>
              <td>${result[i].country}</td>
              <td>${result[i].domains}</td>
              </tr>
        </tbody>`;

        
    }
    document.getElementById("tbody").innerHTML=data;
}