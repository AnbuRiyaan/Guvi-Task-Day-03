//1.JSON iterate over all for loops (for, for in, for of, forEach);	

//for loop method
var a=[{"name":"Anbu","age":"34"},{"name":"Bharathi","age":"30"},
       {"name":"Ram","age":"27"},{"name":"Mahizh","age":"10"}] 
for(var i=0;i<a.length;i++){
    console.log(a[i].name,a[i].age)
}

//Output
Anbu 34
Bharathi 30
Ram 27
Mahizh 10


//for in loop method
var employee={
    "Name":"Sivakumar",
    "Age" :"30",
    "Gender":"Male",
    "Location":"Tenkasi",
    "Company":"Zoho",
    "Salary":"55,000"
}
for (var i in employee){
console.log (i, employee[i]);
}
//Output
Name Sivakumar
Age 30
Gender Male
Location Tenkasi
Company Zoho
Salary 55,000



//for of loop method
var countries=["India","USA","UK","China","Japan","Canada","Denmark"]
for(var c of countries){
    console.log(c);
}
//Output
India
USA
UK
China
Japan
Canada
Denmark

var city=[100,90,95]
for (var score of city){
    score = score + 5;
    console.log(score);
}
//Output
105, 95, 100


var city=["India",["Red", "Green"],"UK","China"];

for (var list of city){
  if(Array.isArray(list)){
    for( var color of list){
    console.log(color);
}
}
else{
console.log(list);
}
}
//Output
India
Red
Green
UK
China

//for each loop method
var number=[1,2,3,4,5]
number.forEach(function(number)
{
console.log(number);
});
//Output
1
2
3
4
5

var number=["Red", "Green", "Yellow"];
number.forEach((ele)=>console.log(ele));

//Output
Red
Green
Yellow