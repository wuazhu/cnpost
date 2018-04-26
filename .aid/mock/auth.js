module.exports = [
  {
    url: '/mock/dologin',
    method: 'post',
    type: 'func',
    response: req => {
      if (req.body.password === '11' && req.body.verify.toLowerCase() === 'itzx') {
        let ret = {
          success: true,
          isAdmin: false,
          auth: {
            username: 'admin',
            token: 't1294jiweniweu9gjha'
          }
        }
        if (req.body.username === 'admin') {
          ret.isAdmin = true
        }
        return ret
      } else {
        return {
          success: false
        }
      }
    }
  },
  {
    url: '/mock/dologout',
    method: 'post',
    type: 'func',
    response: req => {
      return {
        'success': true
      }
    }
  }
]
