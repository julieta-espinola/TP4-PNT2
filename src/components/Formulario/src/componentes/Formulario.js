export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      allMyData:[],
      nombreLengthMin : 5,
      nombreLengthMax : 15,
      edadMin : 18,
      edadMax : 120
    }
  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },
    enviar() {
      //console.log({...this.allMyData})
      this.allMyData.push(this.formData)
      //console.log({...this.allMyData})
      this.formData = this.getInicialData()
      this.formState._reset()
    }
  },
  computed: {
    getCols() {
      return Object.keys(this.allMyData[0])
    }
  }
}