const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      
      /* ==========================================================================
       RAIN EFFECT (DÉŠŤ)
       ========================================================================== */
    const rain = document.getElementById("rain");
    const rctx = rain.getContext("2d");
    let rainActive = true;
    let rainRAF;
    let w, h, drops = [];
     
    function resizeRain() {
      w = rain.width = window.innerWidth;
      h = rain.height = window.innerHeight;
     
      drops = [];
      for(let i = 0; i < 350; i++) {
        drops.push({
          x: Math.random() * w,
          y: Math.random() * h,
          l: Math.random() * 20 + 10,
          s: Math.random() * 4 + 4,
          o: Math.random() * 0.4 + 0.1
        });
      }
    }
    resizeRain();
    window.addEventListener("resize", resizeRain);
     
function drawRain() {
  if (reduceMotion) return;

  rctx.clearRect(0, 0, w, h);

  drops.forEach(d => {
    rctx.strokeStyle = `rgba(160, 0, 0, ${d.o})`;
    rctx.lineWidth = 1;
    rctx.beginPath();
    rctx.moveTo(d.x, d.y);
    rctx.lineTo(d.x - 1, d.y + d.l);
    rctx.stroke();

    d.y += d.s;
    if (d.y > h) {
      d.y = -20;
      d.x = Math.random() * w;
    }
  });

  rainRAF = requestAnimationFrame(drawRain);
}

function startRain() {
  if (rainActive) return;
  rainActive = true;
  drawRain();
}

function drawRain() {
  if (reduceMotion) return;
  if (!rainActive) return;

  rctx.clearRect(0, 0, w, h);

}
    if (!reduceMotion) drawRain();

let heroVisible = true;

/* LIGHTNING (BLESKY) */
if (!reduceMotion) {

  setInterval(() => {
    const lightning = document.getElementById("lightning");

    if (!heroVisible) return;

    lightning.classList.add("flash");

    setTimeout(() => {
      lightning.classList.remove("flash");
    }, 400);

  }, 15000);

}
     
    /* ==========================================================================
       SCROLL REVEAL ANIMACE
       ========================================================================== */
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting) e.target.classList.add("active");
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
     
    /* ==========================================================================
       HONOR SYSTEM (POSUVNÍK CTI)
       ========================================================================== */
    const honorSlider = document.getElementById("honorSlider");
    const honorText = document.getElementById("honorText");
    const lowHonorImage = document.getElementById("lowHonorImage");
  const mediumHonorImage = document.getElementById("mediumHonorImage");
const highHonorImage = document.getElementById("highHonorImage");
    
    honorSlider.addEventListener("input", () => {
      const v = honorSlider.value;
      if(v <= 33) {

  lowHonorImage.classList.add("visible");
  mediumHonorImage.classList.remove("visible");
  highHonorImage.classList.remove("visible");

  honorText.textContent = "Jen prach a krev. Svět tě naučil bezcitné krutosti.";
  document.documentElement.style.setProperty("--primary", "#5a1010");
  document.documentElement.style.setProperty("--accent", "#8b2b2b");
      } else if(v <= 66) {

  lowHonorImage.classList.remove("visible");
  mediumHonorImage.classList.add("visible");
  highHonorImage.classList.remove("visible");

  honorText.textContent = "Bojuješ s tím, kým jsi a kým bys mohl být.";
  document.documentElement.style.setProperty("--primary", "#8b2b2b");
  document.documentElement.style.setProperty("--accent", "#c9a063");
      } else {

  lowHonorImage.classList.remove("visible");
  mediumHonorImage.classList.remove("visible");
  highHonorImage.classList.add("visible");

  honorText.textContent = "I v nejtemnější noci lze spatřit čisté světlo vykoupení.";
  document.documentElement.style.setProperty("--primary", "#c9a063");
  document.documentElement.style.setProperty("--accent", "#f0c27b");
      }
    });
     
    /* ==========================================================================
       LIGHTBOX MODAL (GALERIE)
       ========================================================================== */
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
   
    document.querySelectorAll(".gallery-item").forEach(img => {
      img.onclick = () => {
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        modalImg.src = img.src;
        modalImg.alt = img.alt;
      }
    });
   
    document.getElementById("modalClose").onclick = () => {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    };
     
    /* ==========================================================================
       TYPEWRITER EFFECT (STROJOVPIS CITÁTU)
       ========================================================================== */
    const quoteEl = document.getElementById("quoteText");
    const textQuote = quoteEl.textContent;
    quoteEl.textContent = "";
    let idx = 0;
   
    function typeQuote() {
      if(idx < textQuote.length) {
        quoteEl.textContent += textQuote.charAt(idx);
        idx++;
        setTimeout(typeQuote, 50);
      }
    }
   
    const quoteSection = document.querySelector(".quote-section");
    const quoteObserver = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting) {

  if (!reduceMotion) {
    setTimeout(typeQuote, 300);
  } else {
    quoteEl.textContent = textQuote;
  }

  quoteObserver.disconnect();
}
    }, { threshold: 0.2 });
    quoteObserver.observe(quoteSection);
     
    /* ==========================================================================
       SPIDER WEB SHOTS EFFECT (STŘELBA DO SKLA)
       ========================================================================== */
    const glass = document.getElementById("glass");
    const gctx = glass.getContext("2d");
   
function resizeGlass() {
  glass.width = window.innerWidth;
  glass.height = window.innerHeight;
}
    resizeGlass();
    window.addEventListener("resize", resizeGlass);
     
    let shots = [];
     
    class SpiderWebShot {
    constructor(x, y) {
    this.x = x;
    this.y = y;
        this.radius = 12;
        this.cracks = [];
        this.created = Date.now();
        this.duration = 6000;
     
        const numCracks = 14;
        for(let i = 0; i < numCracks; i++) {
          let angle = (Math.PI * 2 / numCracks) * i + (Math.random() - 0.5) * 0.1;
          const len = 40 + Math.random() * 50;
          const startX = this.x + Math.cos(angle) * this.radius;
          const startY = this.y + Math.sin(angle) * this.radius;
          const endX = startX + Math.cos(angle) * len;
          const endY = startY + Math.sin(angle) * len;
          const branches = [];
     
          for(let j = 0; j < 2; j++) {
            const a2 = angle + (Math.random() - 0.5) * 0.7;
            const l2 = len * (0.3 + Math.random() * 0.3);
            branches.push({
              x: endX + Math.cos(a2) * l2,
              y: endY + Math.sin(a2) * l2,
              startX: endX,
              startY: endY
            });
          }
          this.cracks.push({ startX, startY, endX, endY, branches });
        }
      }
     
      draw() {
        const elapsed = Date.now() - this.created;
        if(elapsed > this.duration) return false;
       
        const alpha = 1 - (elapsed / this.duration);
       
        gctx.fillStyle = `rgba(0, 0, 0, ${0.8 * alpha})`;
        gctx.beginPath();
        gctx.arc(this.x, this.y, this.radius - 4, 0, Math.PI * 2);
        gctx.fill();
       
        gctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * alpha})`;
        gctx.lineWidth = 1.5;
        gctx.beginPath();
        gctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        gctx.stroke();
     
        for(const c of this.cracks) {
          gctx.strokeStyle = `rgba(255, 255, 255, ${0.8 * alpha})`;
          gctx.lineWidth = 1.5;
          gctx.beginPath();
          gctx.moveTo(c.startX, c.startY);
          gctx.lineTo(c.endX, c.endY);
          gctx.stroke();
     
          for(const b of c.branches) {
            gctx.strokeStyle = `rgba(255, 255, 255, ${0.4 * alpha})`;
            gctx.lineWidth = 0.8;
            gctx.beginPath();
            gctx.moveTo(b.startX, b.startY);
            gctx.lineTo(b.x, b.y);
            gctx.stroke();
          }
        }
        return true;
      }
    }
     
window.addEventListener("pointerdown", e => {
  document.addEventListener("dblclick", e => {
  e.preventDefault();
});
  const selection = window.getSelection();

  // 🔴 pokud uživatel něco označuje → ignoruj střelbu
  if (selection && selection.toString().length > 0) return;

  const blocked = e.target.closest("a, button, .gallery-item, input, textarea");
  if (blocked) return;
  
  const x = e.clientX;
  const y = e.clientY;

  shots.push(new SpiderWebShot(x, y));
});

const ammoUI = document.getElementById("ammoUI");


    function animateWebs() {
      gctx.clearRect(0, 0, glass.width, glass.height);
      shots = shots.filter(shot => shot.draw());
      requestAnimationFrame(animateWebs);
    }
  if (!reduceMotion) {
    animateWebs();
  }

  const moments = [
//1
  "https://images4.alphacoders.com/130/thumb-440-1304753.webp",
//2
  "https://picfiles.alphacoders.com/449/thumb-1920-449531.jpg",
//3
  "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5373e26cc47f24df9fe6c948833bafbf.jpg?im=Resize,width=768,height=432",
//4
  "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1d0540831719ded06b6826bfed76d35b.jpg?im=Resize,width=768,height=432",
//5
  "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f934646731dfa191ded67f33400e659a.jpg?im=Resize,width=768,height=432",
//6
  "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd68786c20bd2a43f70f64cbbd6feb5b.jpg?im=Resize,width=768,height=432",
//7
  "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e4d35d712a3dd688a755be356e53b01.jpg?im=Resize,width=768,height=432",
//8
  "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dcab77472e16d5ac77dd101ec5c30575.jpg?im=Resize,width=768,height=432",
//9
  "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6c1efacc1e538f23e2641f0a1bd99a3b.jpg?im=Resize,width=768,height=432",
//10
  "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6c34650fcbbf47f6170e4f4f958b0462.jpg?im=Resize,width=768,height=432",
//11
  "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ec4fce5a3fd859718346eddf9cb079e1.jpg?im=Resize,width=768,height=432",
//12
  "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/49e42c3b649f5d660a340d7e19936c1d.jpg?im=Resize,width=768,height=432",
//13
    "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/804fefe3050078c4152a7a27b460440f.jpg?im=Resize,width=768,height=432",
//14
    "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/28f201549bc864c78b564eff3ab8d38f.jpg?im=Resize,width=768,height=432",
//15
  "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2878a8718549aaf45cd25b6834660f4e.jpg?im=Resize,width=768,height=432",
//16
  "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9bf57166ef4bd07c0b2fa941586ea0b2.jpg?im=Resize,width=768,height=432",
];

let index = 0;
let galleryVisible = false;

const img1 = document.getElementById("moment1");
const img2 = document.getElementById("moment2");

const track = document.querySelector(".moment-track");

function updateMoments() {
  // slide ven
  track.style.transform = "translateX(-80px)";
  track.style.opacity = "0.3";

  setTimeout(() => {
    // nová dvojice (PO 2)
    const i1 = index % moments.length;
    const i2 = (index + 1) % moments.length;

    img1.src = moments[i1];
    img2.src = moments[i2];

    index += 2;
    if (index >= moments.length) index = 0;

    // reset pozice (vpravo)
    track.style.transition = "none";
    track.style.transform = "translateX(80px)";

    // force reflow (aby animace fungovala)
    void track.offsetWidth;

    // slide zpět
    track.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    track.style.transform = "translateX(0)";
    track.style.opacity = "1";
  }, 400);
}

let momentsInterval = null;
let momentsVisible = false;

function startMoments() {
  if (momentsInterval) return; // už běží
  momentsInterval = setInterval(updateMoments, 5000);
}

function stopMoments() {
  clearInterval(momentsInterval);
  momentsInterval = null;
}

const gallerySection = document.getElementById("gallery");

const momentsObserver = new IntersectionObserver((entries) => {
  galleryVisible = entries[0].isIntersecting;

  if (galleryVisible) {
    startMoments();
  } else {
    stopMoments();
  }
}, {
  threshold: 0.4
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopMoments();
  } else if (galleryVisible) {
    startMoments();
  }
});

momentsObserver.observe(gallerySection);

updateMoments(); // ukáže první stav

const hero = document.querySelector(".hero");
const lightningObserver = new IntersectionObserver((entries) => {
  heroVisible = entries[0].isIntersecting;
}, {
  threshold: 0.2
});

lightningObserver.observe(hero);

const rainObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startRain();
    } else {
      stopRain();
    }
  });
}, {
  threshold: 0.15
});

rainObserver.observe(hero);

/* ==========================================================================
   LAST SEEN EFFECT
   ========================================================================== */

document.querySelectorAll(".gang-card").forEach(card => {

  let hoverTimer;

  card.addEventListener("mouseenter", () => {

    hoverTimer = setTimeout(() => {
      card.classList.add("show-last-seen");
    }, 5000);});

  card.addEventListener("mouseleave", () => {

    clearTimeout(hoverTimer);
    card.classList.remove("show-last-seen");

  });

});