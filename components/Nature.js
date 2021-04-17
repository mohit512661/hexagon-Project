
export {Nature}


function Nature(cont) {

    cont.innerHTML = `

    <div id="pop-up-box">

    <button id="close-btn">close</button>

    <a>Submit to <a>Nature</a></a>

    <div class="content-box" id="img-box">
  
    <input type="file" multiple id="my-files" accept="image/gif, image/jpeg, image/png" style="display"/>
   
     <input type="button" id="upload-file-plus-btn"/>
    </div>
    <div class="footer"></div>
    
</div>
    <div id="left-cont">

    <div id="left-status-box">

    <div class="box-width">

    <a class="icon"><i class="fas fa-bolt"></i></a> <a class="icon-text">Status</a>
    <div id="open"><a id="dot-icon"><i class="fas fa-circle"></i></a><a>Open</a></div>

    </div>

    <div class="line"></div>

    <div class="box-width">
    <a class="icon"><i class="fas fa-user-alt"></i></a> <a class="icon-text">Curator</a>
    </div>

    <div class="line"></div>

    <div class="box-width">
    <a class="icon"><i class="fas fa-image"></i></a> <a  class="icon-text">Contributions</a>
    </div>

    <div class="line"></div>

    <div class="box-width">
    <a class="icon"><i class="fas fa-user-friends"></i></a> <a class="icon-text">Top contributors</a>
    </div>

    </div>

    <div id="btn-box"><button id="btn">Submit to <a class="bold">Nature</a></button></div>
    </div>
   
   <div id="submit-btn-box" class="color-white"><button id="submit-btn">

   <a class="icon" id="plus-icon" href="#"><i class="fas fa-plus"></i></a>

   <a href="#" class="color-white" id="upload">Upload a new photo</a>
   
   </button></div>
  
    <h1 id="wallpaper-heading">Nature</h1><br/>
    <p><a id="epic-drone-text">Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between.</a></p>
    `
}


