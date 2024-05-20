function dvp_bg() {
  function rndm(mx) { return Math.floor(Math.random() * mx); }
  function rndmChr(strng) { return strng.charAt(Math.floor(Math.random() * strng.length)); }

  clouds = "012345";
  stars = "678";
  grass = "abcdfghijlnorwxy";
  dayDingbats = "ABCDEFGHIJ";
  nightDingbats = "GKL";
  grassDingbats = "MNOPQRSTU";
  groundDingbats = "!@#%^&*";
  colors = "abc";

  time = new Date();
  time = time.getHours();

  wdth = window.innerWidth;
  bg = document.createElement("div");
  bg.setAttribute("id", "dvp-bg");

  // Draw Sky

  // if Day draw Clouds    
  if(time > 4 && time < 19) {
    // Clouds
    for(i=0; i<=100; i+=(15000/wdth)) {
      bg.innerHTML += '<span class="sky ' + rndmChr(colors) + '" style="font-size: ' + (Math.pow(rndm(25), 2)+100) + 'px; top: .' + rndm(3) + 'em; left: ' + rndm(100) + '%;">' + rndmChr(clouds) + '</span>';
    }
    // Random Characters
    for(i=0; i<=100; i+=(10000/wdth)) {
      bg.innerHTML += '<span class="dingbat sky ' + rndmChr(colors) + '" style="font-size: ' + (Math.pow(rndm(15), 2)+20) + 'px; top: ' + Math.pow(rndm(15), 2) + 'px; left: ' + (rndm(120)-10) + '%;">' + rndmChr(dayDingbats) + '</span>';
    }
  }

  // if Night draw Stars
  else {
    // Stars
    for(i=0; i<=100; i+=(7500/wdth)) {
      bg.innerHTML += '<span class="sky ' + rndmChr(colors) + '" style="font-size: ' + (Math.pow(rndm(20), 2)+20) + 'px; top: ' + Math.pow(rndm(20), 2) + 'px; left: ' + i + '%;">' + rndmChr(stars) + '</span>';
    }
    // Random Characters
    for(i=0; i<=100; i+=(20000/wdth)) {
      bg.innerHTML += '<span class="dingbat sky ' + rndmChr(colors) + '" style="font-size: ' + (Math.pow(rndm(15), 2)+20) + 'px; top: ' + Math.pow(rndm(17), 2) + 'px; left: ' + (rndm(120)-10) + '%;">' + rndmChr(nightDingbats) + '</span>';
    }
  }

  // Grass
  for(i=-10; i<=110; i+=(1000/wdth)) {
    bg.innerHTML += '<span class="grass ' + rndmChr(colors) + '" style="font-size: ' + (Math.pow(rndm(7), 3)+150) + 'px; bottom: .2em; left: ' + i + '%;">' + rndmChr(grass) + '</span>';
  }
    
  // Footer Random Characters
  for(i=0; i<=100; i+=(20000/wdth)) {
    bg.innerHTML += '<span class="dingbat grass ' + rndmChr(colors) + '" style="font-size: ' + (Math.pow(rndm(10), 2)+40) + 'px; bottom: ' + Math.pow(rndm(20), 2) + 'px; left: ' + (rndm(120)-10) + '%;">' + rndmChr(grassDingbats) + '</span>';
  }

  // Footer Character
  bg.innerHTML += '<span class="dingbat grass ' + rndmChr(colors) + '" style="font-size: ' + (rndm(100)+200) + 'px; bottom: .45em; left: ' + (rndm(80)+10) + '%;">' + rndmChr(groundDingbats) + '</span>';
    
  // //Fade In
  // bg.getElementsByClassName('sky').each(function() {
  //   this.hide().delay(rndm(1000)).fadeIn(rndm(1900)+100);
  // });
  // bg.getElementsByClassName('grass').each(function() {
  //   this.hide().delay(rndm(1000)+1000).fadeIn(rndm(1900)+100);
  // });

  document.body.appendChild(bg);
}

window.addEventListener('load', function () {
  dvp_bg();
})