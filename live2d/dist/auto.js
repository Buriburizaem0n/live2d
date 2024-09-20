const live2d_path = "https://www.luoyangdonghui.de/wp-content/uploads/live2d_test34/live2d/";
<meting-js server="netease" type="playlist" id="2142063878" theme="#339981" fixed="true" preload="none" autoplay="false" loop="all" volume="0.3" order="random" mutex="true"></meting-js>;

//封装异步加载资源的方法
function loadExternalResource(url, type) {
    return new Promise((resolve, reject) => {
        let tag;
        if (type === "css") {
            tag = document.createElement("link");
            tag.rel = "stylesheet";
            tag.href = url;
        } else if (type === "js") {
            tag = document.createElement("script");
            tag.src = url;
            tag.async = true; // 确保脚本是异步加载的
        }
        if (tag) {
            tag.onload = () => {
                resolve(`Resource loaded: ${url}`);
            };

            tag.onerror = (error) => {
                reject(new Error(`Failed to load resource: ${url} - ${error.message}`));
            };

            // 确保只在没有相同资源的情况下加载，避免重复加载
            if (!document.head.querySelector(`[src="${url}"]`) && !document.head.querySelector(`[href="${url}"]`)) {
                document.head.appendChild(tag);
            } else {
                resolve(`Resource already loaded: ${url}`);
            }
        } else {
            reject(new Error(`Invalid resource type: ${type}`));
        }
    });
}

if (screen.width >= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "/dist/waifu-tips.js", "js"),
		loadExternalResource("https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css", "css"),
		loadExternalResource("https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js", "js"),
 loadExternalResource("https://cdn.jsdelivr.net/npm/live2dcubismcore@1.0.2/live2dcubismcore.min.js", "js"),
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
console.log(`
    く__,.ヘヽ.        /  ,ー､ 〉
             ＼ ', !-─‐-i  /  /´
             ／｀ｰ'       L/／｀ヽ､
           /   ／,   /|   ,   ,       ',
         ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
          ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
            !,/7 '0'     ´0iソ|    |
            |.从"    _     ,,,, / |./    |
            ﾚ'| i＞.､,,__  _,.イ /   .i   |
              ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
                | |/i 〈|/   i  ,.ﾍ |  i  |
               .|/ /  ｉ：    ﾍ!    ＼  |
                kヽ>､ﾊ    _,.ﾍ､    /､!
                !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
                ﾚ'ヽL__|___i,___,ンﾚ|ノ
                    ﾄ-,/  |___./
                    'ｰ'    !_,.:
  
            等待的结果呢？
            等待就是结果。
            那，不是悲剧吗？
            不，是秋天。
                    `);