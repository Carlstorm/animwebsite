// videos
var vid = document.getElementById("vid");

// video overlays
var vidO1 = document.getElementById("vidO1");
var vidO2 = document.getElementById("vidO2");
var vidO3 = document.getElementById("vidO3");

// static overlays
var switchoverlay = document.getElementById("switchoverlay");
var tvoverlay = document.getElementById("tvoverlay");
var resetTVON = document.getElementById("resetTVON");

// MENU TEXT
var menuwrap = document.getElementById("menuwrap");

// audio
var psound = document.getElementById("projectorsound");
var tsound = document.getElementById("tvsound");

var webstate;
var webstatedif = 0;
var seconds = 0;
var setime = 0;
var whattime = 0;
var whattimeoverlay = 0;

var whatfontsize = 28;

// video load test
var req = new XMLHttpRequest();
req.open('GET', '../video/clean1st_1.mp4', true);
req.responseType = 'blob';

req.onload = function() {
   // Onload is triggered even on 404
   // so we need to check the status code
   if (this.status === 200) {
      var videoBlob = this.response;
      var vidsrc = URL.createObjectURL(videoBlob); // IE10+
      // Video is now downloaded
      // and we can set it as source on the video element
      vid.src = vidsrc;
      menuwrap.style.fontSize = whatfontsize * menuwrap.offsetWidth / 614 + "px";
   }
}
req.onerror = function() {
   // Error
}

req.send();


var startknap = document.getElementById("startknap");

function startfunk() {
    startknap.style.display = "none"
    webstate = 1;
    vid.play();
    psound.play();
    vid.ontimeupdate = function() {loppsection()};
    psound.ontimeupdate = function() {looppsound()};
    tsound.ontimeupdate = function() {looptsound()};
}
// 33 * menuwrap.offsetWidth / 614 + "px";

//menufix
window.addEventListener("resize", function () {
    menuwrap.style.fontSize = whatfontsize * menuwrap.offsetWidth / 614 + "px";
});

function looppsound() {
    if (psound.currentTime >= 16.5) {
        psound.currentTime = 1;
}
}

function looptsound() {
    if (tsound.currentTime >= 16.5) {
        tsound.currentTime = 1;
}
}

function loppsection() {
    if (webstate == 1) {
        if (vid.currentTime >= 15.5) {
            vid.currentTime = 0;
    }
    } else
    if (webstate == 2) {
        if (vid.currentTime >= 31.5) {
            vid.currentTime = 16;
    }
    } else
if (webstate == 3) {
        if (vid.currentTime >= 47.5) {
            vid.currentTime = 32;
    }
} else
    if (webstate == 4) {
        if (vid.currentTime >= 63.5) {
            vid.currentTime = 48;
    }
} else
    if (webstate == 5) {
        if (vid.currentTime >= 79.5) {
            vid.currentTime = 64;
    }
} else
if (webstate == 6) {
    if (vid.currentTime >= 95.5) {
        vid.currentTime = 80;
}
}

}


vid.onprogress = function() {
    console.log(vid.buffered.end(0))
    if (vid.buffered.end(0) >= 79){
        startknap.style.backgroundColor = "blue";
        menuwrap.classList.add("menu1");
    }
};


var addedtime;

function firstfunk() {
    if (webstate != 1) {    
        resetTVON.style.opacity = 0;
        whatfontsize = 28;
    tvoverlay.classList.remove("tv2")
    tvoverlay.classList.remove("tv1")
    switchoverlay.classList.remove("PROJECTORON")

    setTimeout(function () {
    // switchoverlay.classList.add("PROJECTORON")
    menuwrap.classList.remove("menu2");
    menuwrap.classList.remove("menu3");
    menuwrap.classList.remove("menu4");
    menuwrap.classList.remove("menu5");
    menuwrap.classList.remove("menu6");
    menuwrap.style.fontSize = whatfontsize * menuwrap.offsetWidth / 614 + "px";
    menuwrap.classList.add("menu1");
    addedtime = vid.currentTime-((webstate-1)*16);
    vid.currentTime = 0+addedtime


    psound.currentTime = 0;
    tsound.pause();
    psound.play();

    vidO1.style.opacity = 0.8;
    vidO2.style.opacity = 0;
    vidO3.style.opacity = 0;
    vidO1.play();
    vidO2.pause();
    vidO3.pause();

    console.log(whatfontsize)
    webstate = 1;
    }, 0)
    }
}

function secondfunk() {
    if (webstate != 2) {
        resetTVON.style.opacity = 0;
        tvoverlay.classList.remove("tv1")
        tvoverlay.classList.remove("tv2")
        switchoverlay.classList.remove("PROJECTORON")

        setTimeout(function () {
        // switchoverlay.classList.add("PROJECTORON")
        menuwrap.classList.add("menu2");
        whatfontsize = 28;
        menuwrap.style.fontSize = whatfontsize * menuwrap.offsetWidth / 614 + "px";

        menuwrap.classList.remove("menu1");
        menuwrap.classList.remove("menu3");
        menuwrap.classList.remove("menu4");
        menuwrap.classList.remove("menu5");
        menuwrap.classList.remove("menu6");

        addedtime = vid.currentTime-((webstate-1)*16);
        vid.currentTime = addedtime+16

        psound.currentTime = 0;
        tsound.pause();
        psound.play();

        vidO1.style.opacity = 0;
        vidO2.style.opacity = 1;
        vidO3.style.opacity = 0;
        vidO1.pause();
        vidO2.play();
        vidO3.pause();

        webstate = 2;
    }, 0)
        }

}

function thirdfunk() {
    if (webstate != 3) {
        resetTVON.style.opacity = 0;
        tvoverlay.classList.remove("tv1")
        tvoverlay.classList.remove("tv2")
        switchoverlay.classList.remove("PROJECTORON")

        setTimeout(function () {
            menuwrap.classList.remove("menu2");
            menuwrap.classList.remove("menu1");
            menuwrap.classList.remove("menu4");
            menuwrap.classList.remove("menu5");
            menuwrap.classList.remove("menu6");
        
            menuwrap.classList.add("menu3");
            whatfontsize = 25.5;
            menuwrap.style.fontSize = whatfontsize * menuwrap.offsetWidth / 614 + "px";
            // switchoverlay.classList.add("PROJECTORON")

            addedtime = vid.currentTime-((webstate-1)*16);
            vid.currentTime = addedtime+32
    
            psound.currentTime = 0;
            tsound.pause();
            psound.play();

        vidO1.style.opacity = 0;
        vidO2.style.opacity = 0.7;
        vidO3.style.opacity = 0;
        vidO1.pause();
        vidO2.play();
        vidO3.pause();

        webstate = 3;
    }, 0)
        }
}


function fourthfunk() {
    if (webstate != 4) {

        tvoverlay.classList.remove("tv1")
        tvoverlay.classList.remove("tv2")
        switchoverlay.classList.remove("PROJECTORON")

        setTimeout(function () {
            menuwrap.classList.remove("menu2");
            menuwrap.classList.remove("menu1");
            menuwrap.classList.remove("menu3");
            menuwrap.classList.remove("menu5");
            menuwrap.classList.remove("menu6");
        
            menuwrap.classList.add("menu4");
        tvoverlay.classList.add("tv1")
        // resetTVON.style.opacity = 1;
        // resetTVON.src = "../images/gifanimations/tvgif.gif"+"?a="+Math.random();
        whatfontsize = 27.8;
        menuwrap.style.fontSize = whatfontsize * menuwrap.offsetWidth / 614 + "px";
        addedtime = vid.currentTime-((webstate-1)*16);
        vid.currentTime = addedtime+48

        psound.currentTime = 0;
        tsound.currentTime = 0;
        psound.pause();
        tsound.play();

        vidO1.style.opacity = 0;
        vidO2.style.opacity = 0;
        vidO3.style.opacity = 0.11;
        vidO1.pause();
        vidO2.pause();
        vidO3.play();

        webstate = 4;
    }, 0)
        }
}
function fiftfunk() {
    if (webstate != 5) {


        tvoverlay.classList.remove("tv1")
        tvoverlay.classList.remove("tv2")
        switchoverlay.classList.remove("PROJECTORON")

        setTimeout(function () {
            menuwrap.classList.remove("menu2");
            menuwrap.classList.remove("menu1");
            menuwrap.classList.remove("menu4");
            menuwrap.classList.remove("menu3");
            menuwrap.classList.remove("menu6");
        
            menuwrap.classList.add("menu5");
            whatfontsize = 30;
            menuwrap.style.fontSize = whatfontsize * menuwrap.offsetWidth / 614 + "px";

        tvoverlay.classList.add("tv2")
        // resetTVON.style.opacity = 1;
        // resetTVON.src = "../images/gifanimations/tvgif.gif"+"?a="+Math.random();

        addedtime = vid.currentTime-((webstate-1)*16);
        vid.currentTime = addedtime+64

        tsound.currentTime = 0;
        psound.pause();
        tsound.play();

        vidO1.style.opacity = 0;
        vidO2.style.opacity = 0;
        vidO3.style.opacity = 0.05;
        vidO1.pause();
        vidO2.pause();
        vidO3.play();

        webstate = 5;
    }, 0)
        }
}

function sixtfunk() {
    if (webstate != 6) {


        tvoverlay.classList.remove("tv1")
        tvoverlay.classList.remove("tv2")
        switchoverlay.classList.remove("PROJECTORON")

        setTimeout(function () {
            menuwrap.classList.remove("menu2");
            menuwrap.classList.remove("menu1");
            menuwrap.classList.remove("menu4");
            menuwrap.classList.remove("menu3");
            menuwrap.classList.remove("menu5");
        
            menuwrap.classList.add("menu6");
            whatfontsize = 25;
            menuwrap.style.fontSize = whatfontsize * menuwrap.offsetWidth / 614 + "px";
        // switchoverlay.style.opacity = 1;
        // resetTVON.style.opacity = 1;
        // resetTVON.src = "../images/gifanimations/tvgif.gif"+"?a="+Math.random();

        addedtime = vid.currentTime-((webstate-1)*16);
        vid.currentTime = addedtime+80

        tsound.currentTime = 0;
        psound.pause();
        tsound.play();

        vidO1.style.opacity = 0;
        vidO2.style.opacity = 0;
        vidO3.style.opacity = 0;
        vidO1.pause();
        vidO2.pause();

        webstate = 6;
    }, 0)
        }
}
