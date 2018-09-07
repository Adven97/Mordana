var replied = true;
var counter = 1;
const powiekszenie = 8;
const maxLiter = 45;

function setText() {
  var repet = 69;
  var mytxt = $('#inp').val();
  var wdth = mytxt.length * powiekszenie;

  if (wdth != 0 && replied) {

    if (wdth < 54) {
      wdth = 63;
    }
    var name1 = "u" + counter;
    replied = false;
    $('#box').append($('<div id="user" class=' + name1 + '><div class="aligner"><span id="sp">' + mytxt +
      '</span></div></div>'));
    $('.u' + counter).css("width", wdth);
    $('#inp').val("");

    var h = 40;
    var len = mytxt.length;
    if (len > maxLiter) {
      for (var i = 0; i < len; i++) {
        //  temp=i;
        if (i % maxLiter == 0) {
          $('#box').append($('<br />'));
          h += 18;
          $('.u' + counter).css("height", h);
        }
      }
    }

    if (!replied) {
      var replyList = ["Cześć", "Hello there", "Witam", "Hejka!",

        "No hejka, co tam się z Tobą dzieje? Skąd to zwątpienie? Dlaczego chcesz teraz się poddać, tylko dlatego, że raz czy drugi Ci nie wyszło? To nie jest żaden powód. Musisz iść i walczyć. Osiągniesz cel. Prędzej czy później go osiągniesz, ale musisz iść do przodu, przeć, walczyć o swoje. Nie ważne, że wszystko dookoła jest przeciwko Tobie. Najważniejsze jest to, że masz tutaj wole zwycięstwa. To się liczy. Każdy może osiągnąć cel, nie ważne czy taki czy taki, ale trzeba iść i walczyć. To teraz masz trzy sekundy żeby się otrąsnąć, powiedzieć sobie: dobra basta!, pięścią w stół, idę to przodu i osiągam swój cel. Pozdro.",

        "Moim zdaniem to nie ma tak, że dobrze albo że nie dobrze. Gdybym miał powiedzieć, co cenię w życiu najbardziej, powiedziałbym, że ludzi. Ekhm... Ludzi, którzy podali mi pomocną dłoń, kiedy sobie nie radziłem, kiedy byłem sam. I co ciekawe, to właśnie przypadkowe spotkania wpływają na nasze życie. Chodzi o to, że kiedy wyznaje się pewne wartości, nawet pozornie uniwersalne, bywa, że nie znajduje się zrozumienia, które by tak rzec, które pomaga się nam rozwijać. Ja miałem szczęście, by tak rzec, ponieważ je znalazłem. I dziękuję życiu. Dziękuję mu, życie to śpiew, życie to taniec, życie to miłość. Wielu ludzi pyta mnie o to samo, ale jak ty to robisz?, skąd czerpiesz tę radość? A ja odpowiadam, że to proste, to umiłowanie życia, to właśnie ono sprawia, że dzisiaj na przykład buduję maszyny, a jutro... kto wie, dlaczego by nie, oddam się pracy społecznej i będę ot, choćby sadzić... znaczy... marchew.",

        "no i ja się pytam człowieku dumny ty jesteś z siebie zdajesz sobie sprawę z tego co robisz? masz ty wogóle rozum i godność człowieka?",////index 6

        "aha","fajnie","cieszę się","a co mnie to kurwa obchodzi",/////10
        "ok", "nie rozumiem", "jeszcze jak!", "nie ma takiego dowodu", "adolf hitler", "xD", "zajebie was kurwy!",
        "XDDD", "hahaha", "General Kenobi!", "co tam?", "co robisz?", "mam to w dupie", "pierdol się", "nic",
        "w polsce jest jak w lesie xD", "w życiu chodzi o to żeby pićko pić, co nie?", "co?",
        "mam w dupie to jak sie kurwa wyrażam!", "zrób se sam! co rąk nie masz do roboty tylko czekasz na gotowe?",//30


        "Zajebe was kurwy!", "Chodzmy się najebać","Did you ever hear the tragedy of Darth Plagueis the Wise?",
        "hahaha, what a story Mark","Hitler nie zrobił nic złego!"
      ];

      var ii = Math.floor(Math.random() * replyList.length);

      if (counter == 1) {
        ii = Math.floor(Math.random() * 5);
      } else if (counter > 1) {
        replyList.splice(0, 1, "spierdalaj");
        replyList.splice(1, 1, "nie wiem");
        replyList.splice(2, 1, "nie");
        replyList.splice(3, 1, "tak");
        replyList.splice(4, 1, "KIEDY ZACZYNASZ GRAĆ W MORTAL KOMBAT NAJLEPIEJ WYBRAĆ SCORPIONA LUB SUB-ZERO. JAK OPANUJESZ CIOSY I FATALITY, TO BEZ PROBLEMU NAUCZYSZ SIĘ GRAĆ INNYMI POSTACIAMI");
      }
      var bottxt;

      if (mytxt.includes("youtube:") || mytxt.includes("Youtube:")) {
        let xd= mytxt.slice(9,mytxt.length);
        bottxt = "Znaleziono na YouTube: "+xd;
        window.open("https://www.youtube.com/results?search_query="+xd, '_blank');
      }
      else if (mytxt.includes("yt:")) {
        let xd= mytxt.slice(4,mytxt.length);
        bottxt = "Znaleziono na YouTube: "+xd;
        window.open("https://www.youtube.com/results?search_query="+xd, '_blank');
      }
      else if (mytxt.includes("google:") || mytxt.includes("Google:")) {
        let xd= mytxt.slice(8,mytxt.length);
        bottxt = "Znaleziono w Google: "+xd;
        window.open("https://www.google.pl/search?q="+xd, '_blank');
      }
      else if (mytxt.includes("kim jest ") || mytxt.includes("Kim jest ")) {
        let xd= mytxt.slice(9,mytxt.length);
        if(mytxt.includes("?")) xd= mytxt.slice(9,mytxt.length-1);
        bottxt = xd;
        window.open("https://www.google.pl/search?q="+xd, '_blank');
      }
      else if (mytxt.includes("pogoda")) {
        bottxt = "Pogoda wg. Google";
        window.open("https://www.google.pl/search?q=pogoda", '_blank');
      }
      else if ((mytxt.includes("21") && mytxt.includes("37")) || mytxt.includes("barka") || mytxt.includes("papaj") ||
        mytxt.includes("bareczka") || mytxt.includes("papie")) {
        bottxt = "hehe papiesz";
        window.open('https://www.youtube.com/watch?v=0qzLRlQFFQ4', '_blank');
      }
      else if (mytxt.includes("godzin")) {
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes();
        if (dt.getHours() == 21 && dt.getMinutes() == 37) {
          bottxt = "Jest godzina: " + time + " hehe śpiewajmy bareczke!";
          window.open('https://www.youtube.com/watch?v=0qzLRlQFFQ4', '_blank');
        } else {
          bottxt = "Jest godzina: " + time;
        }
      }
      else if (mytxt.includes("sens") && (mytxt.includes("życia") || mytxt.includes("zycia"))) {
        bottxt =
          "Sąd, konfidenci, psy to jedna banda. Przeciwko kurestwu JP propaganda. Bez skrupułów, na lewo albo za zwykłe głupoty, niszczą ludziom życie, z ich dzieci robią sieroty. I Bez wyroków i policyjnej agresji, oby wszyscy dobrzy ludzie tak przez życie przeszli. Oby na ciebie nigdy nie donieśli. JP człowieku, weź ten przekaz dalej prześlij!";
      }
      else if (mytxt.includes("pierdal") || mytxt.includes("pierdol") || mytxt.includes("kurw") || mytxt.includes("chuj") || mytxt.includes("jeb") || mytxt.includes("suk")) {
        var kultura=["Kultury troche w tej pierdolonej milicji !!!","Naucz się kultury", "Mógłbyś kurwa nie przeklinać?",
        "To chuj ci w duupe staary!","sam spierdalaj","wal się"];
        bottxt = losuj(kultura);
      }
      else if (mytxt.includes("co tam") || mytxt.includes("co słych") || mytxt.includes("jak tam")) {
        bottxt = "Stara bida :(";
      }
      else if (mytxt.includes("dobrze")) {
        bottxt =replyList[5];
      }
      else if (mytxt.includes("ajlepszy") && mytxt.includes("erial")) {
        bottxt = "Najlepszy serial jaki powstał to Świat według Kiepskich";
      }
      else if (mytxt.includes("ajlepszy") && mytxt.includes("ilm")) {
        bottxt = "Najlepszy film jaki powstał to Scott Pilgrim vs. the World";
      }
      else if (mytxt.includes("netflix")) {
        bottxt = "Na Netflix warto obejrzeć serial: " + losuj(netflix);
      }
      else if (mytxt.includes("hbo")) {
        bottxt = "Na HBO warto obejrzeć serial: " + losuj(hbo);
      }
      else if (mytxt.includes("ok") || mytxt.includes("git") || mytxt.includes("dzię") || mytxt.includes("thx")) {
        let pozytywnaOdp =["No i zajebiście!","O to chodzi","cieszę się","bardzo proszę","nie ma za co"]
        bottxt = losuj(pozytywnaOdp);
      }
      else if (mytxt.includes("tede") && mytxt.includes("kurw")) {
        bottxt = "Dlatego";
        window.open('https://www.youtube.com/watch?v=78n8_u9CixA', '_blank');
      }
      else if (mytxt.includes("aezakmi")) {
        bottxt = "Wpisałem na brońki i żyćko, wpisałem na nieśmiertelność. Na policje nie wpisywałem bo chce żeby gonił mnie ktoś";
        window.open('https://www.youtube.com/watch?v=M1BEfcXBNLI', '_blank');
      }
      else if (mytxt=="co?") {
        let t = ["gówno","co kurwa po polsku nie rozumiesz?","nie ważne, i tak nie zrozumiesz","chujów sto"];
        bottxt =losuj(t);
      }
      else if (mytxt.includes("jeste") && mytxt.includes("głupi")) {
        let riposta=["Chyba ty","wcale nie","Wy ludzie nie jesteście w stanie pojąć wyższej formy inteligencji"]
        bottxt =losuj(riposta);
      }
      else if (mytxt.includes("kim") && (mytxt.includes("jestes") || mytxt.includes("jesteś")) ) {
        bottxt = "Mam na imię Mordana. Jestem najlepszym asystentem głosowym jaki kiedykolwiek powstał i powstanie";
      }
      else if (mytxt.includes("dzień") || mytxt.includes("dzien") || mytxt.includes("data")) {
        var d = new Date();
        var today = d.getDate() + "-" + d.getMonth()+ "-" + d.getFullYear();
        var dzienTygodnia;

        switch(d.getDay()){
          case 0:
            dzienTygodnia="Niedziela";
            break;
          case 1:
            dzienTygodnia="Poniedziałek";
            break;
          case 2:
            dzienTygodnia="Wtorek";
            break;
          case 3:
            dzienTygodnia="Środa";
            break;
          case 4:
            dzienTygodnia="Czwartek";
            break;
          case 5:
            dzienTygodnia="Piątek na Propsie";
            break;
          case 6:
            dzienTygodnia="Sobota na dropsie";
            break;
        }
        bottxt = "Dzisiaj jest "+dzienTygodnia +", "+today;
        if(dzienTygodnia =="Piątek na Propsie")
          window.open('https://www.youtube.com/watch?v=yobNYQl3Zrw', '_blank');
        else if(dzienTygodnia =="Sobota na dropsie")
          window.open('https://www.youtube.com/watch?v=81RKpbYPzQM', '_blank');

      }
      else if (mytxt.includes("sens") && (mytxt.includes("bez") || mytxt.includes("nie")) ){
        bottxt = "Żysie jest bez sensu, taka prawda";
      }

      else { bottxt = replyList[ii] };

      var mowionyTekst =bottxt.replaceAll('...', ',').replaceAll('ch', 'h');
      responsiveVoice.speak(mowionyTekst,"Polish Female");///////////////////ttuu//////////////////////////

      setTimeout(function() {

        var wd = bottxt.length * powiekszenie;
        if (wd < 54) {
          wd = 63;
        }

        var name2 = "b" + counter;

        $('#box').append($('<div id="bot" class=' + name2 + ' style="width: ' + wd +
          'px;"><div class="aligner"><span id="sp">' + bottxt +
          '</span></div></div>'));
          //speak(bottxt);


        var h2 = 40;
        var len2 = bottxt.length;
        if (len2 > maxLiter) {
          for (var j = 0; j < len2; j++) {
            if (j % maxLiter == 0) {
              h2 += 18;
              $('.b' + counter).css("height", h2);
            }
          }
        }
        if (counter > 4 || h > 450 || h2 > 320 || ii == 4 || ii == 5) {
          $('#box').css("overflow-y", "auto");
        }
        replied = true;
      }, 750);/////////////////////////////////////////////////////////koniec setTimeout

    }
    counter++;

  }
  if (counter > 4 || h > 450 || ii == 4 || ii == 5) {
    $('#box').css("overflow-y", "auto");
  }
  box.scrollBy(0, 500);

  setTimeout(function() {
    box.scrollBy(0, 500);
  }, 760);

} ////////////////////////////////////////end of function setText

var input = document.getElementById("inp");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btn").click();
  }
});

var netflix = ["Mad Men", "Skins", "Luke Cage", "Jessica Jones", "Mindhunter", "Orange is the New Black",
  "Peep show", "Teen Titans Go!", "Ozark", "The Inbetweeners", "Gravity Falls", "Ultraviolet", "Master of None",
  "Sense8", "Black Mirror", "That 70s show", "Ray Donovan", "Once Upon a Time", "Friends", "Masters of Sex", "Suits",
   "Unbreakable Kimmy Schmidt", "Luther", "Bloodline", "Peaky Blinders", "Penny Dreadful", "House of Cards",
  "13 reasons why XDD", "Narcos", "Breaking Bad", "Better call Saul", "Penn and Teller Fool us", "Friends",
  "Cosmos", "iZombie", "Avatar", "Dexter", "Californication", "Series of Unfortunate Events", "Hannibal",
  "Rick and Morty", "BoJack Horseman", "American Vandal", "Dom z papieru", "Stranger Things", "Dark", "Broadchurch"
];

var hbo = ["Westworld", "Ballers", "Newsroom", "Counterpart", "Enturage", "Trust", "Gomorra", "The Sopranos",
           "6 feet Under", "Wataha", "The Wire", "The Big Bang Theory", "Silicon Valley"];

function losuj(arg) {
  var i = Math.floor(Math.random() * arg.length);
  return arg[i];
}

String.prototype.replaceAll = function(searchStr, replaceStr) {
	var str = this;
    // no match exists in string?
    if(str.indexOf(searchStr) === -1) {
        // return string
        return str;
    }
    // replace and remove first match, and do another recursirve search/replace
    return (str.replace(searchStr, replaceStr)).replaceAll(searchStr, replaceStr);
}
