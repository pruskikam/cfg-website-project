document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link


const chevron = document.querySelector('i.fa-chevron-down')
const trees = document.querySelector('')




const showCircles = () => {

  
    divOne.classList.add('circle')
    divTwo.classList.add('circle')
    divThree.classList.add('circle')


}

chevron.addEventListener('click',showCircles)