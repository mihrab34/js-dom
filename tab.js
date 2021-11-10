const panels = document.querySelectorAll('.panel');
console.log(panels);

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeClass()
        panel.classList.toggle('active');
    })
    })


    const removeClass = function(){
        panels.forEach((panel) => {
            panel.classList.remove('active');
        })
    }