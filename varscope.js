var x=10;
console.log("In global: "+x);
function local ()
{
    var x=0;
  console.log("In function local: "+x);
}
function local2 ()
{
    var x=1;
  console.log("In function local2: "+x);
}
local();
local2();
console.log("In global: "+x);