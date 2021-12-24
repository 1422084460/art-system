export const URL = 'http://127.0.0.1:8083'
export const Cloud_URL = 'http://118.31.55.121:8083'

//首页管理

//用户管理
export const menuVerity = URL + '/api/query/MenuVerity'             //测试菜单权限
export const uploadUrl = URL + '/api/upload/getUploadUrl'           //图片上传
export const login = URL + '/api/user/login'                        //用户登录
export const register = URL + '/api/user/register'                  //用户注册

//测试
export const test = URL + '/api/test/token'
export const video = Cloud_URL + '/api/test/goToVideo'