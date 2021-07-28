<template>

<the-nav-bar></the-nav-bar>
 <transition name="slide" mode="out-in">
     <router-view></router-view>
     </transition>
    <the-footer></the-footer>

</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import TheNavBar from './components/boss/TheNavbar.vue'
import TheFooter from './components/boss/TheFooter.vue'
export default {
  components:{
    TheNavBar,
    TheFooter
  }
}
</script>
<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 
}
.slide-enter-active {
  animation: slide-in 300ms ease-out forwards;
}
.slide-leave-active {
   animation: slide-out 300ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
     opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
     opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

#IO{
  font-weight: bolder;
}
</style>
