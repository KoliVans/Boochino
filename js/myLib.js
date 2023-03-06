;(function() {
	window.myLib = {};
 
	window.myLib.body = document.querySelector('body');
 
	window.myLib.closestAttr = function(item, attr) {
	  var node = item;
 
	  while(node) {
		 var attrValue = node.getAttribute(attr);
		 if (attrValue) {
			return attrValue;
		 }
 
		 node = node.parentElement;
	  }
 
	  return null;
	};
 
	window.myLib.closestItemByClass = function(item, className) {
	  var node = item;
 
	  while(node) {
		 if (node.classList.contains(className)) {
			return node;
		 }
 
		 node = node.parentElement;
	  }
 
	  return null;
	};
 
	window.myLib.toggleScroll = function() {
	  myLib.body.classList.toggle('no-scroll');
	};
 })();


 ;(function() {
	var canUseWebP = function() {
	  var elem = document.createElement('canvas');
 
	  if (!!(elem.getContext && elem.getContext('2d'))) {
			// was able or not to get WebP representation
			return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
	  }
 
	  // very old browser like IE 8, canvas not supported
	  return false;
	};
	
	var isWebpSupported = canUseWebP();
 
	if (isWebpSupported === false) {
	  var lazyItems = document.querySelectorAll('[data-src-replace-webp]');
 
	  for (var i = 0; i < lazyItems.length; i += 1) {
		 var item = lazyItems[i];
 
		 var dataSrcReplaceWebp = item.getAttribute('data-src-replace-webp');
		 if (dataSrcReplaceWebp !== null) {
			item.setAttribute('data-src', dataSrcReplaceWebp);
		 }
	  }
	}
 
	var lazyLoadInstance = new LazyLoad({
	  elements_selector: ".lazy"
	});
 })();