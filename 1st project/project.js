AOS.init({
 offset:120,
 delay:200,
 duration:1000,
 easing:'ease',
 once:true,
 mirror:true
})
function navigate(){
    let dropDown=document.querySelector("#services");
    let val=dropDown.value;
    if (val){
      window.location.href=val+".html";
    }

  }
  