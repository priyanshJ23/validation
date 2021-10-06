function validateform()
{
name(document.getElementById("name").value);
reg(document.getElementById("regno").value);
mail(document.getElementById("email").value);
num(document.getElementById("phoneno").value);
dateCompare(document.getElementById('dateop').value);
pass_check(document.getElementById("passon").value);
}
function name(name)
{
l=name.length;
flag=1;
for(i=0;i<l;i++){
ch=name.charAt(i);
if(!((ch>='A' && ch<='Z') || ch==' ' || (ch>='a' && ch<='z') ))
flag=0;
}
if(flag==0)
alert("Name should contain alphabets");
}
function reg(regno)
{
flag=1;
for(i=0;i<regno.length;i++){
c=regno.charAt(i);
if(!((c>='A' && c<='Z') || (c>='a' && c<='z') || (c>='0' && c<='9')))
flag=0;
}
if(flag==0)
alert("Register number should be in alphabets and number");
}
function mail(email)
{
atp=email.indexOf("@");
dotp=email.lastIndexOf(".");
if (atp<1 || dotp<atp+2 || dotp+2>=email.length)
alert("Enter a valid E-mail ID");
}
function num(phoneno)
{
if(phoneno.length<10)
alert("Enter a valid phoneno of length 10");
}
function disable()
{
if(document.getElementById("check").checked)
{
document.getElementById("permadd").value=document.getElementById("tempadd").value;
document.getElementById("permadd").disabled=true;
}
else
{
document.getElementById("permadd").disabled=false;
document.getElementById("permadd").value="";
}
}
function dateCompare(d){
    const date1 = new Date(d);
    const date2 = new Date();
    if(date1 > date2){
        alert('ENTER VALID DATE');
 }
}
function pass_check(pass) {
           flag=0;
           if (pass.match(/[a-z]/g) && pass.match(
                   /[A-Z]/g) && pass.match(
                   /[0-9]/g) && pass.match(
                   /[^a-zA-Z\d]/g) && pass.length >= 8)
              {
                flag=1;
              }
           if(flag==0)
           {
             alert("Password should contain digit,symbol and capital ,small letter");
           }
       }
