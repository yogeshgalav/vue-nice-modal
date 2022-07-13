
<template>
  <div id="app">
    
    <VueNiceModal
     name="'hello'"
     heading="Modal Header" 
     @submit="submitBut"  
     @cancel="submitBut"
     @close="submitBut"
      >
       <template slot="modalBody">
         <div id="content">
         <label>Content <br></label>
         </div>
            <div>
           <input
             v-model="text"
              placeholder="Content input"
             >
            </div>
        </template>
      </VueNiceModal>
  </div>
</template>


<script>
import  VueNiceModal  from 'vue-nice-modal'

export default {
  name: 'App',
  components: {
    VueNiceModal,
}
,
methods:{
  submitBut() {
      alert('Button clicked');
    }
  }
}
</script>

<style>
#content{
  margin-bottom: 10px;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
} */
</style>
