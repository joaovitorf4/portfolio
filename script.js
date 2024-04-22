const strongTag = document.querySelector('strong');

const contents = ['Full-Stack', 'Front End', 'Back End'];

let currentIndex = 0;
let letterIndex = 0;
let typingAnimation;

function updateContent() {
    strongTag.textContent = '';
    currentIndex = (currentIndex + 1) % contents.length;
    letterIndex = 0;
    
    strongTag.classList.add('typing-animation');
    typingAnimation = setInterval(() => {
        if (letterIndex <= contents[currentIndex].length) {
            strongTag.textContent = contents[currentIndex].slice(0, letterIndex); 
            letterIndex++;
        } else {
            clearInterval(typingAnimation);
            strongTag.classList.remove('typing-animation');
        }
    }, 100);
}

updateContent();

setInterval(updateContent, 5000);
