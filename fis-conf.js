fis.config.set('project.fileType.text', 'adoc');
fis.config.set('modules.parser.adoc', 'asciidoctor.js');
fis.config.set('roadmap.ext.adoc', 'html');

fis.config.set('modules.postpackager', [
	function(ret, conf, settings, opt) {
		fis.util.map(ret.src, function (subpath, file) {
			if (file.isHtmlLike) {
				file.setContent(
					'<html><head><link rel="stylesheet" href="/static/asciidoctor-default.css">'+
					'<link rel="stylesheet" href="/static/coderay-asciidoctor.css">'+
					'</head><body>'+
					file.getContent()+
					'</body></html>'
				);
			}
		});
	}
]);