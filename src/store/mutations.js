import {
  RECORD_USERINFO,
  SAVE_ARTICLE_ID
} from './mutation-types'


export default {
  //保存用户信息
  [RECORD_USERINFO](state, info){
      state.info = info;
  },
  [SAVE_ARTICLE_ID](state, info){
    state.leftItemClickId = info;
  }
}
