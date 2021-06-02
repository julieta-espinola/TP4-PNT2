<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Componente Http</h2>
      <hr>
      <button class="btn btn-secondary my-3 mr-3" @click="clearTable()">Clear</button> 
      <button class="btn btn-danger my-3 mr-3" @click="getPostsXML()">XMLHttpRequest</button>    
      <button class="btn btn-warning my-3 mr-3" @click="getPostsFetch()">FETCH</button>    
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">AXIOS</button>     
      <div v-if="posts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
          </tr>
          <tr v-for="(post,index) in posts" :key="index">
            <td v-for="(col,index) in getCols" :key="index">{{post[col]}}</td>
          </tr>
        </table>
        <h4 class="alert alert-primary">{{posts.length}} datos encontrados</h4>
      </div>
      <h4 v-else class="alert alert-danger">No se encontraron datos</h4>

    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'src-components-http',
    props: [],
    mounted () {
    },
    data () {
      return {
        url: 'https://60b6e23917d1dc0017b8878b.mockapi.io/USUARIOS',
        posts : []
        
      }
    },
    methods: {
      clearTable(){
        this.posts = {}
      },
      getPostsXML() {
        let xhr = new XMLHttpRequest
        xhr.open('get',this.url)
        xhr.addEventListener('load', () => {
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            this.posts = respuesta
          }
          else {
            console.error(`Error: ${xhr.status}`)
          }
        })
        xhr.addEventListener('error', err => {
            console.error(`Error XMLHttpRequest`, err)
        })
        xhr.send()
      },
      getPostsFetch() {
          fetch(this.url)
          .then(datos => datos.json())
          .then(respuesta => {
            this.posts = respuesta
          })
          .catch(error => console.error(error))
      },
      getPostsAxios() {
          this.axios(this.url)
          .then( respuesta => {
            this.posts = respuesta.data
          })
          .catch(error => console.error(error))
      }
    },
    computed: {
      getCols() {
        return Object.keys(this.posts[0])
      }
    }
}
</script>

<style scoped lang="css">
  .jumbotron {
    background: rgb(180,221,180);
    background: -moz-linear-gradient(top,  rgba(180,221,180,1) 0%, rgba(131,199,131,1) 17%, rgba(82,177,82,1) 33%, rgba(0,138,0,1) 67%, rgba(0,87,0,1) 83%, rgba(0,36,0,1) 100%);
    background: -webkit-linear-gradient(top,  rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%);
    background: linear-gradient(to bottom,  rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4ddb4', endColorstr='#002400',GradientType=0 ); 
    background: rgb(180,221,180);
    color: white;
  }
  hr {
    background-color: #fff;
  }  
</style>