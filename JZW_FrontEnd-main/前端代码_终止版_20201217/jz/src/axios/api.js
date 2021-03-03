import axios from "axios"
import {ACCESS_TOKEN} from "../store/mutation-types";

//process.env.API_HOST 获取当前环境的api地址
axios.defaults.baseURL = process.env.API_BASE;
axios.defaults.timeout = 30000;




//翻译中心

//请求翻译员的任务列表xz
export const requestInterpreterTaskList = params =>{
  return axios.get('/cas/interpreter/taskList', params)
}

//请求带翻译的公司新闻
export const requestTranslateNews = params =>{
  return axios.get('/cas/translate/News', params)
}

//上传新闻翻译
export const updateTranslateNews = params =>{
  return axios.post('/cas/translate/new', params)
}



//根据code获取公司信息
export const getCompanyByCode = params =>{
  return axios.get('/company/getByCode', {params})
}

//根据id获取公司信息
export const getCompanyById = params =>{
  return axios.get('/company/getById', {params})
}

//获取公司列表
export const getCompanyList = params =>{
  return axios.get('/company/list', {params})
}


/*用户管理*/

//请求登录
export const requestLogin = params =>{
  return axios.post('/user/login', params);
}

//验证ticket,用户存在则返回用户信息
export const validateSt = params =>{
  return axios.get('/user/authenticate', {params})
}

//登出
export const requestLogout = params =>{
  return axios.post('/user/logout', params);
}

//添加用户
export const addUser = params =>{
  return axios.post('/user/add', params)
}

//编辑用户
export const putEditedUser = params =>{
  return axios.put('/user/edit', params)
}

//根据id删除用户
export const deleteUser = params =>{
  return axios.delete('/user/delete', {params})
}

//批量删除用户
export const batchDeleteUser = params =>{
  return axios.delete('/user/deleteBatch', {params})
}


//添加国家列表
export const getCountryList = params =>{
  return axios.post('/country/list', {params})
}

//获取用户列表
export const getUserList = params =>{
  return axios.get('/user/list', {params})
}

//根据id获取角色
export const getRoleById = params =>{
  return axios.get('/role/getById', {params})
}

//获取角色表
export const getRoleList = params =>{
  return axios.get('/role/list', {params})
}

//按电话搜索用户
export const getUserByTel = params =>{
  return axios.get('/user/getByTel', {params})
}

//按邮箱搜索用户
export const getUserByEmail = params =>{
  return axios.get('/user/getByEmail', {params})
}

/*分类*/

//按ID查找分类所经过路径
export const getPath= params =>{
  return axios.get('/category/getPath', {params})
}
//按基础类别查找一级分类
export const getPrimaryCategory = params =>{
  return axios.get('/category/getPrimaryCategory', {params})
};

//按ID查找下一级分类    ---无数据
export const getSubCategories = params =>{
  return axios.get('/category/getSubCategories', {params})
};

/*用户中心-订阅新闻*/

//按用户ID查找订阅信息
export const getSubscriptionByUserId = params =>{
  return axios.get('/subscription/getByUserId', {params})
};

//新增订阅信息
export const addSubscription = params =>{
  return axios.post('/subscription/add', {params})
};

//按订阅信息获取新闻数目
export const countBySubscription = params =>{
  return axios.get('/news/countBySubscription', {params})
};

//按订阅信息获取新闻
export const getBySubscription = params =>{
  return axios.get('/news/getBySubscription', {params})
};

//根据实例删除订阅信息
export const delSubscription = params =>{
  return axios.get('/subscription/deleteByInstance', {params})
};

/*用户中心-企业信息维护-公司介绍*/

//按用户ID查找公司
export const getByUserId = params =>{
  return axios.get('/company/getByUserId', {params})
};

//按id查找公司
export const getById = params =>{
  return axios.get('/company/getById', {params})
};

//编辑公司
export const editCompany = params =>{
  return axios.put('/company/edit', {params})
}

/*用户中心-企业信息维护-供应信息*/

export const listProduct= params =>{
  return axios.get('/product/list', {params})
}

export const listService= params =>{
  return axios.get('/service/list', {params})
}

//新增产品
export const addProduct= params =>{
  return axios.post('/product/add', {params})
}

//编辑产品
export const editProduct= params =>{
  return axios.put('/product/edit', {params})
}

//删除产品
export const delProduct= params =>{
  return axios.delete('/product/delete', {params})
}

//新增服务
export const addService= params =>{
  return axios.post('/service/add', {params})
}

//编辑服务
export const editService= params =>{
  return axios.put('/service/edit', {params})
}

//删除产品
export const delService= params =>{
  return axios.delete('/service/delete', {params})
}

/*用户中心-企业信息维护-技术信息*/

//缺少根据用户或者企业id查找产品信息/服务信息的api
export const listInvention= params =>{
  return axios.get('/invention/list', {params})
}

export const listSoftware= params =>{
  return axios.get('/software/list', {params})
}

//新增发明
export const addInvention= params =>{
  return axios.post('/invention/add', {params})
}

//编辑发明
export const editInvention= params =>{
  return axios.put('/invention/edit', {params})
}

//删除发明
export const delInvention= params =>{
  return axios.delete('/invention/delete', {params})
}

//新增软件
export const addSoftware= params =>{
  return axios.post('/software/add', {params})
}

//编辑软件
export const editSoftware= params =>{
  return axios.put('/software/edit', {params})
}

//删除软件  ---缺少参数
export const delSoftware= params =>{
  return axios.delete('/software/delete', {params})
}

/*用户中心-企业信息维护-采购信息*/

export const listPurchase= params =>{
  return axios.get('/purchase/list', {params})
}

//新增采购物品
export const addPurchase= params =>{
  return axios.post('/purchase/add', {params})
}

//编辑采购物品
export const editPurchase= params =>{
  return axios.put('/purchase/edit', {params})
}

//删除采购物品 ---缺少参数
export const delPurchase= params =>{
  return axios.delete('/purchase/delete', {params})
}

/*用户中心-企业信息维护-公司动态*/

export const listNews= params =>{
  return axios.get('/news/list', {params})
}

//按编号查找新闻
export const getNewsByCode= params =>{
  return axios.get('/news/getByCode', {params})
}

//新增动态
export const addNews= params =>{
  return axios.post('/news/add', {params})
}

//编辑动态
export const editNews= params =>{
  return axios.put('/news/edit', {params})
}

//删除动态
export const delNews= params =>{
  return axios.delete('/news/delete', {params})
}

/*用户中心-企业信息维护-荣誉证书*/

export const listCertification= params =>{
  return axios.get('/certificate/list', {params})
}

//新增证书
export const addCertification= params =>{
  return axios.post('/certificate/add', {params})
}

//编辑证书
export const editCertification= params =>{
  return axios.put('/certification/edit', {params})
}

//删除证书
export const delCertification= params =>{
  return axios.delete('/certification/delete', {params})
}

/*企业用户-账户管理*/

//按ID查找用户
export const getUserById= params =>{
  return axios.get('/user/getById', {params})
}


/*帮助中心*/
export const getFAQList= params =>{
  return axios.get('/help/faq', {params})
}


export const getImg= params =>{
  return axios.get('/help/faq', {params})
}

