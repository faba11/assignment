let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)

        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.add('hidden');
        }
    })
})


const hiddenElement = document.querySelectorAll('#hidden');
hiddenElement.forEach((el) => observer.observe(el))