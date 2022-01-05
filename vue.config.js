/*
 * @Author       : Zero
 * @Date         : 2022-01-05 11:48:21
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-05 11:49:54
 * @FilePath     : /middle_school_kids_today/vue.config.js
 */

module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '趣味问答'
                return args
            })
    }
}