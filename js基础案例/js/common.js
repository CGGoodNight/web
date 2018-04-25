function getId(id) {
	return document.getElementById(id);
}

function getsTN(TagName) {
	return document.getElementsByTagName(TagName);
}

function setInnerText(element,content) {
//判断element是否支持innerText
	if (typeof element.innerText === 'string') {
		element.innerText = content;
	} else {
		element.textContent = content;
	}
}

function getElementFirstChild(parent) {

	if (parent.firstElementChild) {
		return parent.firstElementChild;
	}
	
	var node, nodes = parent.childNodes, i = 0;
	while (node = nodes[i++]) {
		if (node.nodeType === 1) {
			return node;
		}
	}
	return null;
}

function getElementLastChild(parent) {

	if (parent.LastElementChild) {
		return parent.LastElementChild;
	}

	var node, nodes = parent.childNodes, i = nodes.length - 1;
	while (node = nodes[i--]) {
		if (node.nodeType === 1) {
			return node;
		}
	}
	return null;
}

function addEventListener(element, eventName,callback) {    // element事件源 eventName事件名称(没有on)callback 是回调   也就是函数function
	if (element.addEventListener) {
		element.addEventListener(eventName, callback, false);
	} else if (element.attachEvent) {   //成功
		element.attachEvent('on' + eventName, callback);
	} else {
		element['on' + eventName] = callback;
	}
}

function removeEventListener(element, eventName,callback) {
	if (element.removeEventListener) {
		element.removeEventListener(eventName, callback, false);
	} else if (element.detachEvent) {      //失败 IE8以下没有实现有错
		element.detachEvent('on' + eventName, callback);
	} else {
		element['on' + eventName] = null;
	}
}