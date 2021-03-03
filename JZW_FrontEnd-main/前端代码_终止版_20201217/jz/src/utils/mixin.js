import {mapState} from "vuex"

const mixin = {
  computed:{
    ...mapState(
      {
        fixedHeader: state => state.app.fixedHeader,
      }
    )
  }
}

const mixinDevice = {

}

export {mixin, mixinDevice}
