$(document).ready(function() {

  prompt('DID YOU LIKE TURTLE SELECT CLICK DOT NOW??? ARE YOU READY FOR TURTLE SELECT CLICK DOT NOW VOL 2 ?!?')
  var myTraffic = document.getElementById('myLight');
  var myPics = ["https://download.offset.com/gatekeeper/W3siZSI6MTU3OTI3MDE2NywiYyI6Il9waG90b19zZXNzaW9uX2lkIiwiayI6InBob3Rvcy81OTFiNjBiNjE3ZmIxNTZlNDgwNWY5NWMvcHJldmlld193LmpwZyIsIm0iOjAsImQiOiJvcGFsLW1lZGlhIn0sIllYR1luRVBkT1lTdTUra2F4QWg1R2ZqUzlOTSJd/offset_563622.jpg","https://www.naturepl.com/cache/pcache2/01125215.jpg","https://previews.123rf.com/images/designpics/designpics1006/designpics100606392/7207497-an-open-mouth-threat-display-of-a-snapping-turtle.jpg","https://media.sciencephoto.com/z7/52/00/21/z7520021-800px-wm.jpg","https://image.shutterstock.com/image-photo/portrait-turtle-open-mouth-600w-1058408699.jpg","https://media.istockphoto.com/photos/turtle-with-open-mouth-picture-id517239819","https://st2.depositphotos.com/3791313/6390/i/950/depositphotos_63908945-stock-photo-giant-turtle-open-mouth.jpg","https://image.shutterstock.com/image-photo/big-mouth-turtle-600w-1340665247.jpg","https://previews.123rf.com/images/14ktgold/14ktgold1707/14ktgold170700005/81269838-snapping-turtle-in-net-with-fishing-hook-in-mouth.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX36DdKIxR-YmrR5UMMv-vYyacjuEr-5oyEJCyLqsRA6fDsiBW&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMMnFVTQl03SJhmoqlCC3PS7U21jcBvKJnromL_OuxVJIlQXuUw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgiYDmhGR_2yn6NhiWzOIphUFoIzIZuDidOcbEScZJfFRkYP8Q6A&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfNDvZIK7W8vgFjQLwaEnHQtCyZ5sx53M_e57HboHo9VliR5BJQg&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSognTEWX0kYd9HUVYiaBmA2KCRWm8LBUpiQRP5MJWCkButbLBD&s","https://i2.kym-cdn.com/photos/images/original/000/568/905/459.png"];
  var totalPics = myPics.length;
  var i = 0;
  function loop() {
  if(i > (totalPics - 1)){
      i = 0;
  }
  // alert("TURTLE SELECT CLICK DOT NOW!")
  // alert("TURTLE SELECT CLICK DOT NOW!")
  // alert("TURTLE SELECT CLICK DOT NOW!")
  // prompt("are you enjoying TURTLE SELECT CLICK DOT NOW?")
  // alert("TURTLE SELECT CLICK DOT NOW!")
  myLight.src = myPics[i];
  i++;
  loopTimer = setTimeout(loop,200);
  }
  
  loop();
  // // var myTraffic = document.getElementById('myLight2');
  // var myPics = ["https://image.shutterstock.com/image-photo/portrait-turtle-open-mouth-600w-1058408699.jpg","https://media.istockphoto.com/photos/turtle-with-open-mouth-picture-id517239819"];
  // var totalPics = myPics.length;
  // var i = 0;
  // function loop() {
  // if(i > (totalPics - 1)){
  //     i = 0;
  // }
  // // // alert("TURTLE SELECT CLICK DOT NOW!")
  // // // alert("TURTLE SELECT CLICK DOT NOW!")
  // // // alert("TURTLE SELECT CLICK DOT NOW!")
  // // // prompt("are you enjoying TURTLE SELECT CLICK DOT NOW?")
  
  // myLight2.src = myPics[i];
  // i++;
  // loopTimer = setTimeout(loop,300);
  // }
  // loop();
  
  });