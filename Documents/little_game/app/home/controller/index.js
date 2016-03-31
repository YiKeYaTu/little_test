'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self){
    //auto render template file index_index.html
    return self.display();
  },
  getpassAction: function (self) {
  	var pass = self.post('password');
  	if (pass == '21453') {
  		self.end('你怎么这么屌啊');
  	} else {
  		self.end('password错误');
  	}
  }
});