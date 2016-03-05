	function doMove(obj,attr,dir,target,endFn){
		dir=parseInt(getStyle(obj,attr))<target?dir:-dir;
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var speed=parseInt(getStyle(obj,attr))+dir;
			if(speed>target&&dir>0||speed<target&&dir<0){
				speed=target;
			}
			obj.style[attr]=speed+'%';
			if(speed==target){
				clearInterval(obj.timer);
				endFn&&endFn();
			}
		},30)
	}

	function getStyle(obj,attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	}

	function getByClass(parent, tagName, className) {
	var aEls = parent.getElementsByTagName(tagName);
	var arr = [];

	for (var i = 0; i < aEls.length; i++) {
		var aClassName = aEls[i].className.split(' ');
		for (var j = 0; j < aClassName.length; j++) {
			if (aClassName[j] == className) {
				arr.push(aEls[i]);
				break;
			}
		}
	}
	return arr;
}