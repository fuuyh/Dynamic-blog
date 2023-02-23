// 引入 axios
import axios from 'axios'

// 新建一个axios实例
const request = axios.create({
  baseURL: 'http://43.143.179.237:3000'
})
// 导出

export default request
