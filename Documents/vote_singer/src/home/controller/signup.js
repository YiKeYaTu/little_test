'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction () {
    let openid = await this.session('openid'),
        stuNum = await this.session('stuNum'),
        care = await this.session('care'),
        inf = await this.session('inf');
    if (openid && stuNum && care && inf) {
      const NAME = this.get('name'),
            SONG = this.get('song'),
            CALL = this.get('call'),
            SONG_URL = this.get('songUrl');
      let userModel = this.model('user');
      let count = userModel.where({
        openid: openid
      }).count();
    } else {
      //报错
    }
  }
}