## 说明

为了兼容fis-postpackager-autoload在fis3上正常使用，主要是添加autoload插件所需的requires依赖关系属性。

### 安装

	npm install -g fis3-postpackager-requires

	npm install -g fis3-postpackager-loadrequires

### 集合fis-postpackager-autoload使用	

	fis.match('::package', {
	    postpackager: [fis.plugin('requires'), fis.plugin('loadrequires')]
	});