window.onload = function(){
  end = data.length;
  s=e=r=m=false;
  if (getParam('s')) start = Number(getParam('s') - 1);
  else s=true;
  if (getParam('e')) end = Number(getParam('e'));
  else e=true;
  if (getParam('r')) remove = Number(getParam('r'));
  else r=true;
  if (getParam('m')) mode = Number(getParam('m'));
  else m=true;
  if(s||e||r||m)
  {
    var t = "";
    if(s) t=t+'&s=1';
    if(e) t=t+'&e=' + data.length;
    if(r) t=t+'&r=1';
    if(m) t=t+'&m=0';
    window.location.href = location.search + t;
  }
  if (mode===0) {
    ans=0;
    que=1;
    }
  if (mode===1) {
    que=0;
    ans=1;
    }
  if(end>data.length)window.location.href="?d=Target-1900-6";
  if(document.getElementById("web"))document.getElementById("web").height=window.innerHeight-30;
  input.focus();
  next();
};

function check() {
  var input = document.getElementById("input").value;
  query = data[random][0].replace(' ', '+' );
  if (input == data[random][0]) {
    document.getElementById("text").innerHTML = data[random][1] + ": " + "<span style=\"color:blue\">o: </span>"+"<a href=https://ejje.weblio.jp/content/"+ query+ " target=\"_blank\" title=\""+(random+1)+"\">" + data[random][0] + "</a>" + document.getElementById("text").innerHTML;
    if(remove == 1) r_array.push(random);
    document.cookie='r_array=' + r_array+'; max-age=604800';
    document.title=r_array.length;
    c++;
  }
  else if(input === "")
  {
    document.getElementById("text").innerHTML =data[random][1] + ": " + "<a href=https://ejje.weblio.jp/content/"+ query+ " target=\"_blank\" title=\""+(random+1)+"\">" + data[random][0] + "</a>" + document.getElementById("text").innerHTML;
  }
  else{
      document.getElementById("text").innerHTML =data[random][1] + ": <span class=\"google\" style=\"color:red\"><a href=https://www.google.co.jp/search?q="+input.replace(' ','+')+" target=\"_blank\">"+input+"</a></span><a href=https://ejje.weblio.jp/content/"+query+" target=\"_blank\" title=\""+(random+1)+"\">"+data[random][0]+"</a>" + document.getElementById("text").innerHTML;
      c = 0;
  }
  if ('speechSynthesis' in window) {
    const uttr = new SpeechSynthesisUtterance();
    uttr.text = data[random][0];
    uttr.lang = 'en-US';
    const voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].lang === 'en-US') {
        uttr.voice = voices[i];
      }
    }
    window.speechSynthesis.speak(uttr);
 }
 if(document.getElementById("web"))document.getElementById('web').contentWindow.location.replace("https://ejje.weblio.jp/turbo/"+ query);
  next();
  document.getElementById("input").value = "";
}

function next(){
  if(r_array.length == end - start){
    document.cookie='r_array='
    alert("全問正解！");
    document.getElementById("input").disabled = true;
  }
  else{
    random = Math.floor(Math.random() * (end - start)) + start;
    if(random == random_l&&r_array.length != end - start - 1){
      next();
    }
    else if(r_array.includes(random) && remove == 1){
      next();
    }
    else{
      random_l = random;
      document.getElementById("question").innerHTML = data[random][que];
      c = 1;
    }
    if(r_array.length == end - start - 1){
      let q = 0;
      r_array.forEach(i => {
        q += i;
      });
      random=(end-start)*(start+(end-1))/2-q;
    }
  }
}

function key() {
  if(window.event.keyCode == 13) check();
  if(window.event.keyCode == 38) input.value=data[random][0];
  if(window.event.keyCode == 39)
  {
    input.value=data[random][0].substr(0,c);
    c++;
  }
}
