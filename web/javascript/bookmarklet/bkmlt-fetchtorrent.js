// javascript:(function(){var%20versionNum%20=%20%220.8%22;var%20serverAddress%20=%20%22127.0.0.1:9091%22;function%20LipoCookie(){var%20sCookie%20=%22%22;var%20aCookie%20=%20document.cookie.split(/;[\s\xA0]*/);if%20(aCookie%20!=%20%22%22){for%20(var%20i=0;%20i%20<%20aCookie.length;%20i++){if%20(aCookie[i].search(/(^__utm|^__qc)/)%20==%20-1){sCookie%20=%20sCookie%20+%20aCookie[i]%20+%20%27;%20%27;}}}sCookie=sCookie.replace(/;\s+$/,%22%22);return%20sCookie;}var%20cookieString%20=%20LipoCookie();var%20a=document.getElementsByTagName(%27a%27);for(var%20i=0,j=a.length;i<j;i++){var%20linkurl%20=%20a[i].href;var%20testUrl%20=%20linkurl.substring(linkurl.lastIndexOf(%27/%27)%20+%201,%20linkurl.length);var%20testResult%20=%20testUrl.search(/(\.torrent$)/i);if%20(testResult%20==%20-1){var%20testResult%20=%20linkurl.search(/(magnet:\?|\/get|\/download|\/dl|\/torrent)/i);}if%20(testResult%20!=%20-1){a[i].setAttribute(%27target%27,%27_blank%27);a[i].setAttribute(%27href%27,%22http://%22%20+%20serverAddress%20+%20%22/transmission/web/fetchtorrent.html?torrentlink=%22%20+%20encodeURIComponent(linkurl)%20+%20%22&cs=%22%20+%20encodeURIComponent(cookieString)%20+%20%22&version=%22%20+%20versionNum%20);var%20img=document.createElement(%27img%27);img.setAttribute(%27class%27,%20%27new-window%27);img.setAttribute(%27src%27,%27data:image/gif;base64,%27+%27R0lGODlhEAAMALMLAL66tBISEjExMdTQyBoaGjs7OyUlJWZmZgAAAMzMzP///////wAAAAAAAAAAAAAA%27+%27ACH5BAEAAAsALAAAAAAQAAwAAAQ/cMlZqr2Tps13yVJBjOT4gYairqohCTDMsu4iHHgwr7UA/LqdopZS%27+%27DBBIpGG5lBQH0GgtU9xNJ9XZ1cnsNicRADs=%27);img.setAttribute(%27style%27,%27width:16px!important;height:12px!important;border:none!important;%27);a[i].appendChild(img);}}})();

// 'javascript:(function(){var%20versionNum%20=%20%220.8%22;var%20serverAddress%20=%20%22127.0.0.1:9091%22;function%20LipoCookie(){var%20sCookie%20=%22%22;var%20aCookie%20=%20document.cookie.split(/;[\\s\\xA0]*/);if%20(aCookie%20!=%20%22%22){for%20(var%20i=0;%20i%20<%20aCookie.length;%20i++){if%20(aCookie[i].search(/(^__utm|^__qc)/)%20==%20-1){sCookie%20=%20sCookie%20+%20aCookie[i]%20+%20%27;%20%27;}}}sCookie=sCookie.replace(/;\\s+$/,%22%22);return%20sCookie;}var%20cookieString%20=%20LipoCookie();var%20a=document.getElementsByTagName(%27a%27);for(var%20i=0,j=a.length;i<j;i++){var%20linkurl%20=%20a[i].href;var%20testUrl%20=%20linkurl.substring(linkurl.lastIndexOf(%27/%27)%20+%201,%20linkurl.length);var%20testResult%20=%20testUrl.search(/(\\.torrent$)/i);if%20(testResult%20==%20-1){var%20testResult%20=%20linkurl.search(/(magnet:\\?|\\/get|\\/download|\\/dl|\\/torrent)/i);}if%20(testResult%20!=%20-1){a[i].setAttribute(%27target%27,%27_blank%27);a[i].setAttribute(%27href%27,%22http://%22%20+%20serverAddress%20+%20%22/transmission/web/fetchtorrent.html?torrentlink=%22%20+%20encodeURIComponent(linkurl)%20+%20%22&cs=%22%20+%20encodeURIComponent(cookieString)%20+%20%22&version=%22%20+%20versionNum%20);var%20img=document.createElement(%27img%27);img.setAttribute(%27class%27,%20%27new-window%27);img.setAttribute(%27src%27,%27data:image/gif;base64,%27+%27R0lGODlhEAAMALMLAL66tBISEjExMdTQyBoaGjs7OyUlJWZmZgAAAMzMzP///////wAAAAAAAAAAAAAA%27+%27ACH5BAEAAAsALAAAAAAQAAwAAAQ/cMlZqr2Tps13yVJBjOT4gYairqohCTDMsu4iHHgwr7UA/LqdopZS%27+%27DBBIpGG5lBQH0GgtU9xNJ9XZ1cnsNicRADs=%27);img.setAttribute(%27style%27,%27width:16px!important;height:12px!important;border:none!important;%27);a[i].appendChild(img);}}})();'


(function(){
	var versionNum = "0.8";
	var serverAddress = "127.0.0.1:9091";
	
	// Function will return cookie-string with google-analytics removed
	function LipoCookie(){
		var sCookie ="";
		// cookies are separated by semicolons and varied number of spaces
		var aCookie = document.cookie.split(/;[\s\xA0]*/);
		if (aCookie != ""){
			for (var i=0; i < aCookie.length; i++){
			// google crumbs begin with __utm or __; if not found then will return -1
	    		if (aCookie[i].search(/(^__utm|^__qc)/) == -1){ 
					sCookie = sCookie + aCookie[i] + '; ';
				}
			}
		}
		// remove ending "; "
		sCookie=sCookie.replace(/;\s+$/,"");
		// if all cookies are google analytics, sCookie will be ""
		// if no cookies are set, sCookie will also be "", but aCookie will be ""
		return sCookie;	
	}
	
	var cookieString = LipoCookie();
	var a=document.getElementsByTagName('a');
	
	for(var i=0,j=a.length;i<j;i++){
		
		// a[i].getAttribute('href') will return a relative path
		var linkurl = a[i].href;
		
		// limit link changes to following matches
		
		// search for terms after last "/" ie. the file name : (.torrent)
		var testUrl = linkurl.substring(linkurl.lastIndexOf('/') + 1, linkurl.length);
		var testResult = testUrl.search(/(\.torrent$)/i);
		// search for terms anywhere in url : (magnet link) (directories starting with: /get | /download | /dl)
		if (testResult == -1){
			var testResult = linkurl.search(/(magnet:\?|\/get|\/download|\/dl|\/torrent)/i);
		}
		
		if (testResult != -1){
			a[i].setAttribute('target','_blank');
			a[i].setAttribute('href',"http://" + serverAddress + "/transmission/web/fetchtorrent.html?torrentlink=" + encodeURIComponent(linkurl) + "&cs=" + encodeURIComponent(cookieString) + "&version=" + versionNum );
			var img=document.createElement('img');
			img.setAttribute('class', 'new-window');
			img.setAttribute('src','data:image/gif;base64,'+'R0lGODlhEAAMALMLAL66tBISEjExMdTQyBoaGjs7OyUlJWZmZgAAAMzMzP///////wAAAAAAAAAAAAAA'+'ACH5BAEAAAsALAAAAAAQAAwAAAQ/cMlZqr2Tps13yVJBjOT4gYairqohCTDMsu4iHHgwr7UA/LqdopZS'+'DBBIpGG5lBQH0GgtU9xNJ9XZ1cnsNicRADs=');
			img.setAttribute('style','width:16px!important;height:12px!important;border:none!important;');
			a[i].appendChild(img);
		}
	}
})();
