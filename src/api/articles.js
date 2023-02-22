// 用于获取文章内容
// 引入 request
import request from '@/utils/request'
// 获取所有文章
export const getAllArticles = () => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params: {
      status: 'published'
    }
  })
}
// 通过id 查找文章
export const getOneArticle = id => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params: {
      _id: id,
      status: 'published'
    }
  })
}
