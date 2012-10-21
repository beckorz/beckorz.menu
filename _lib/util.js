
// initialize

var isWsh = false;
var isHta = false;

try {
	if (WScript) isWsh = true;
} catch(e) {}
try {
	if (window) isHta = true;
} catch(e) {}

/**
 * ネイティブブートしているか確認
 */
function isNativeBoot() {	
	return (WScript.FullName.toLowerCase().indexOf('syswow64') == -1);
}

/**
 * ネイティブブートする
 */
function doNativeBoot() {
	try{
		// WScriptからの実行の場合のみ対応の為
		var test = WScript.FullName;
		if (!(isNativeBoot())) {
			if (IsDebug) {
				alert('Native起動します');
			}
			var nativeProcessName = WScript.FullName.toLowerCase().replace(/syswow64/g, "sysnative");	// ネイティブプロセスを指定
			new ActiveXObject("WScript.Shell").Run('"' + nativeProcessName + '" "' + WScript.ScriptFullName + '"'); // 自己スクリプトをsysnative側のプロセスで起動する。
			WScript.Quit(); //	' 今のプロセス側は終了
		}
	} catch (e) {
	}

}

doNativeBoot();

