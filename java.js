new Swiper ('.imgs', {
    effect: 'fade',
    speed: 400,
    autoplay: {
        delay: 5000,
        
      }
})

const textA = document.querySelector('.textA');
const textB = document.querySelector('.textB');
const textC = document.querySelector('.textC');
const textD = document.querySelector('.textD');
const textI = document.querySelector('.textI');
const textH = document.querySelector('.textH');
const textQ = document.querySelector('.textQ');

setTimeout(function(){
    textA.classList.add('NO')
    textB.classList.add('YES')
}, 5000)

setTimeout(function(){
    textB.classList.remove('YES')
    textC.classList.add('YES')
}, 10000)

setTimeout(function(){
    textC.classList.remove('YES')
    textD.classList.add('YES')
}, 15000)

setTimeout(function(){
    textD.classList.remove('YES')
    textI.classList.add('YES')
}, 20000)

setTimeout(function(){
    textI.classList.remove('YES')
    textH.classList.add('YES')
}, 25000)

setTimeout(function(){
    textH.classList.remove('YES')
    textQ.classList.add('YES')
}, 30000)