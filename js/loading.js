// let observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         console.log(entry)

//         if(entry.isIntersecting){
//             entry.target.classList.add('show')
//         }else{
//             entry.target.classList.add('hidden');
//         }
//     })
// })


// const hiddenElement = document.querySelectorAll('#hidden');
// hiddenElement.forEach((el) => observer.observe(el))


        // window.addEventListener("scroll", myFunction);

        // function myFunction() {
        //     var pageTop = document.documentElement.scrollTop;
        //     var pageBottom = pageTop + window.innerHeight;
        //     var tags = document.querySelectorAll("#hidden");

        //     for (var i = 0; i < tags.length; i++) {
        //         var tag = tags[i];
        //         var tagTop = tag.offsetTop;

        //         if (tagTop < pageBottom) {
        //             tag.classList.add("visible");
        //         } else {
        //             tag.classList.remove("visible");
        //         }
        //     }
        // }

        // function backToTop(){
        //     window.scrollTo(0,0);
        //     }