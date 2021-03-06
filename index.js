/**
 * file: index.js
 * auth: qk@detu.com
 * update: 2016-01-27
 */

/**
 * 打包阶段插件接口
 * @param  {Object} ret      一个包含处理后源码的结构
 * @param  {Object} conf     一般不需要关心，自动打包配置文件
 * @param  {Object} settings 插件配置属性
 * @param  {Object} opt      命令行参数
 * @return {undefined}
 */
module.exports = function (ret, conf, settings, opt) {
	fis.util.map(ret.src, function (subpath, file) {
		file['requires'] = file.requires || [];
		if(file.isHtmlLike && file.useCompile){
			var content = file.getContent();
			content.replace(/[\t\r\n\s]*?require\s*?\(['"]{1}(.*)?['"]{1}\)/g, function (words, $1) {
				ret.src[subpath]['requires'].indexOf($1) < 0 ? ret.src[subpath]['requires'].push($1) : null;
				return words;
			});
		}

		//jsx添加同名less、css依赖
		// if(/\.jsx$/g.test(file.subpath) && file.useSameNameRequire){
		// 	var less = file.subpath.replace('.jsx', '.less');
		// 	var css = file.subpath.replace('.jsx', '.css');
		// 	if(ret.src[less]){
		// 		var lessId = ret.src[less].getId();
		// 		if(file.requires.indexOf(lessId) < 0){
		// 			file.requires.push(lessId);
		// 		}
		// 	}

		// 	if(ret.src[css]){
		// 		var cssId = ret.src[css].getId();
		// 		if(file.requires.indexOf(cssId) < 0){
		// 			file.requires.push(cssId);
		// 		}
		// 	}
		// }
	});
};