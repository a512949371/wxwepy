class Commonjs {
    tokenTF(){
        var shorttoken = wx.getStorageSync("shorttoken");
        if (shorttoken.length>48){
          return true
        }else{
          return false
        }
      }
      getToken(){
        var shorttoken = wx.getStorageSync("longtoken");
        return shorttoken
      }
}
export default Commonjs