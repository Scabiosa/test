const Mock = require('mockjs')
const Random = Mock.Random
const produceNewsData = function() {
  let articles = []
  for(let i = 0; i<100; i++){
    let newArticleObject = {
      title: Random.csentence(5,30),
      thumbnail_pic_s: Random.dataImage('300X250','mock的图片'),
      author_name: Random.cname(),
      date: Random.date() + ' ' + Randome.time()
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
}
