
<!--宠物播放器-->
<script src="https://www.luoyangdonghui.de/wp-content/uploads/live2d_test16/live2d/live2d.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/live2dcubismcore@1.0.2/live2dcubismcore.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/pixi-live2d-display@beta/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/pixi.js@7.x/dist/pixi.min.js"></script>
<script>
const live2d_path = "https://www.luoyangdonghui.de/wp-content/uploads/live2d_test16/live2d/";
</script>
<meting-js server="netease" type="playlist" id="2142063878" theme="#339981" fixed="true" preload="none" autoplay="false" loop="all" volume="0.3" order="random" mutex="true"></meting-js>;
<script>
//封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;
		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

if (screen.width >= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js"),
		loadExternalResource("https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css", "css"),
		loadExternalResource("https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js", "js"),
	]).then(() => {
		loadExternalResource("https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js", "js");
	});
	ap = null;
	Object.defineProperty(document.querySelector('meting-js'), "aplayer", {
		set: function(aplayer) {
        		ap = aplayer;
        		ap_init();
        		initWidget();
		}
	});
}
</script>