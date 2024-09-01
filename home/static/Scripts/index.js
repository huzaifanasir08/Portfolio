
// let menu = document.getElementById('menu');
// let close = document.getElementById('icons');

var typed = new Typed('#element', {
            strings: ['Software Engineer', 'Full Stack Developer', 'Digital Marketer', 'Poster Designer'],
            typeSpeed: 50,
            setInterval: 50,
            backDelay: 1000,
            loop: true
        });

// const animation_elements = document.querySelectorAll('.animation');


// for (let i = 0; i < animation_elements.length; i++) {
// 	const el = animation_elements[i];

// 	observer.observe(el);
// }

let header = document.getElementById('header');
        let sidebar = document.getElementById('side-bar');
        let menuOpen = document.getElementById('open');
        menuOpen.onclick = function () {
            console.log('VISIBLE');
                header.style.overflow = 'visible';
                sidebar.classList.add('show-sidebar');
                menuOpen.classList.add('hide-icon');
        };
        document.onclick = function(e){
            if (!menuOpen.contains(e.target) ) {
                header.style.overflow = 'hidden';
                sidebar.classList.remove('show-sidebar');
                menuOpen.classList.remove('hide-icon');
            }
        }

  