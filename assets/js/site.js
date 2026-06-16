/* SecurityRelief — mobile menu + portal "coming soon" modal */
(function(){
  var mb=document.querySelector('.menu-btn'), nav=document.querySelector('.nav-links');
  if(mb&&nav){
    mb.addEventListener('click',function(){nav.classList.toggle('open');});
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');});});
  }
  function openM(id){var m=document.getElementById(id);if(m)m.classList.add('open');}
  function closeAll(){document.querySelectorAll('.modal-overlay.open').forEach(function(m){m.classList.remove('open');});}
  document.querySelectorAll('[data-portal]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();openM('portalModal');});});
  document.querySelectorAll('[data-legal]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();openM('legalModal');});});
  document.querySelectorAll('.modal-overlay [data-close]').forEach(function(b){b.addEventListener('click',closeAll);});
  document.querySelectorAll('.modal-overlay').forEach(function(ov){ov.addEventListener('click',function(e){if(e.target===ov)closeAll();});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeAll();});
})();
