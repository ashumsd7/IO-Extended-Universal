<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <a class="navbar-brand " href="https://io-extended-universal.netlify.app/">
    <div class="row ">
            <div id="logo" class="col-3 mx-4"></div>
            <div id="logo-slash"></div>
            <div id="logo2" class="col-3"></div>
            <div id="logo-name" class="col-4"> <span>Extended</span> Universal</div>
            
    </div>
    
     </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <img src="../../assets/menu.png" alt="">
  </button>

  <div class="collapse navbar-collapse d-lg-flex flex-row-reverse " id="navbarSupportedContent">
    <ul class="navbar-nav   text-dark">
      
      <li class="nav-item ml-lg-3">
        <a class="nav-link" href="https://io-extended-universal.netlify.app/#about">About</a>
      </li>
       <li class="nav-item ml-lg-3">
        <a class="nav-link" href="#"> <router-link to="/event">Event Agenda</router-link></a>
      </li>
       <li class="nav-item ml-lg-3">
        <a class="nav-link ml-lg-3" href="https://io-extended-universal.netlify.app/#speaker">Speaker</a>
      </li>
       <li class="nav-item ml-lg-3">
        <a class="nav-link ml-lg-3" ><router-link to="/team">Team</router-link></a>
       
      </li>
       <li class="nav-item ml-lg-3">
        <a class="nav-link" href="https://io-extended-universal.netlify.app/#community">Community</a>
      </li>
      <li class="nav-item ml-lg-3">
        <a class="nav-link" href="https://io-extended-code-of-conduct.netlify.app/">COD</a>
      </li>
       <li class="nav-item ml-md-3">
        <a class="nav-link bg-warning mr-3 rounded  register-btn text-dark px-3 font-weight-bold"   href="https://forms.gle/PCJhTisg1p3S2Mdb6">Register</a>
      </li>
         <li class="nav-item ml-lg-3">
        <a class="nav-link" href="https://avatar-generator-io-extended.netlify.app/">Avatar</a>
      </li>
      <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->
     
    </ul>
    
  </div>
</nav>
</template>

<script>
    export default {
        

    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&family=Poppins:wght@300;700&display=swap');
#IO{
    color: rgb(0, 49, 122);
    font-size: 1.8rem;
     font-family: 'Coda Caption', sans-serif;
     position: relative;
     /* left: -20px; */
     font-weight: bolder;
     
}

.navbar-light .navbar-nav .nav-link {
    margin-left: 10px;
    /* float: right; */
    font-weight: bolder;
    color: black;
    font-family: 'PT Sans', sans-serif;
    
}
#logo-name{
 /* background: rgb(84, 72, 245); */
 /* font-weight: bolder; */
  font-family: "Poppins", sans-serif;
 
  
}
#logo-name span{
  font-weight: bolder;
  
}
.register-btn{
  max-width: 90px;
}

#logo{
  width: .2rem;
  height: 35px;
  background: rgb(41, 134, 240);
  margin-left: 10px;
}
#logo-slash{
 width: 1px;
  height: 40px;
  background: black;
  transform: rotateY(88deg) rotateX(-20deg) ;
  transform-origin: left;
  margin-top:-5px;
 margin-left: -15px;
  
}

#logo2{
  width: 40px;
  height: 40px;
   background: rgb(41, 134, 240);
  border-radius: 50%;
   margin-top:-3px;
   margin-left: -20px;
}
.navbar-toggler {
  border: none;
  outline: none;
}
.navbar-toggler:hover{
 
  transform: scale(1.1)
}
li a{
  text-decoration: none;
  color: black;
}
</style>
