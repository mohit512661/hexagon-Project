function header1(){
    let head1 = document.createElement('div')

    head1.innerHTML = `
 
    <header class="my_contain">
    <nav>
    <a href="" target="_blank" rel="noopener noreferrer">
        <img src="image/outerunsplash.png"
            alt="unsplash-logo">
    </a>


   
   <div class="myicon" >
    <i class="fa fa-search" aria-hidden="true"></i>
    <input  style="width: 530px;" type="text" class="myinput" placeholder="Search free high-resolution photos">
     </div> 
   

    <a href="" target="_blank" rel="noopener noreferrer">
        <li id="one">Home</li>
    </a>
    <a href="" target="_blank" rel="noopener noreferrer">

        <li id="one">Brands</li>
    </a>
    <span id="new">New</span>
    <button id="hamberbur">. . .</button>

    <button id="submit">Submit a photo</button>
    <span>|</span>

    <a href="login.html" ><button id="log">Login</button></a>
   
    <a href="signup.html" ><button id="joinfree">Join Free</button></a>
   
    </div>
</nav>

    <div class="container youscroll">

        <div class="align">
            <p>Editorial</p> 
          
            
            <a style="margin-left: 15px; text-decoration: none; color:black" href="#">Following</a>
            <p class="arrow up">&#10094;</p>

            <div style="margin-right: 25px;" class="myscroll">

                <div><a href="wallpaper.html">Wallpapers</a></div>
                <div><a href="">Nature</a></div>
                <div><a href="">People</a></div>
                <div><a href="">Architecture</a></div>
                <div><a href="">CurrentEvents</a></div>
                <div><a href="">Business&Work</a></div>
                <div><a href="">Experimental</a></div>
                <div><a href="">Fashion</a></div>
                <div><a href="">Film</a></div>
                <div><a href="">Health&Wellness</a></div>
                <div><a href="">Interiors</a></div>
                <div><a href="">StreetPhotography</a></div>
                <div><a href="">Technology</a></div>
                <div><a href="">Travel</a></div>
                <div><a href="">Textures&Patterns</a></div>
                <div><a href="">Animals</a></div>
                <div><a href="">Food&Drinks</a></div>
                <div><a href="">Athelatics</a></div>
                <div><a href="">Spirituadivty</a></div>
                <div><a href="">Art&Culture</a></div>
                <div><a href="">History</a></div>




            </div>
            <p class="arrow down">&#10095;</p>
            <a style="margin-right: 18px; text-decoration: none; color:black" href="viewall.html">ViewAll</a>
        </div>
    </div>
</header>


    
    `
    return head1
}

export  {header1,myshow1}



function myshow1(){
   
    let scroll1 = document.querySelector(".myscroll")



    document.querySelector(".up").onclick = () => {

        scroll1.scrollBy({

            top: 0,
            left: -150,
            behavior: 'smooth'
        });
    }
    document.querySelector(".down").onclick = () => {

        scroll1.scrollBy({
            top: 0,
            left: 150,
            behavior: 'smooth'
        })
    }
    scroll1.onscroll = () => {

        if (event.srcElement.scrollLeft === 0) {
            document.querySelector(".up").style.display = "none"
            document.querySelector(".down").style.display = "block"
        } else {
            document.querySelector(".up").style.display = "block"
        }

        if (event.srcElement.scrollLeft > 1261) {
            document.querySelector(".up").style.display = "block"
            document.querySelector(".down").style.display = "none"
        } else {
            document.querySelector(".down").style.display = "block"
        }
        console.log(event.srcElement.scrollLeft);

    };



 
}


   