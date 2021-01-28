export default class LocalDataManager {

	constructor() {
		this.onChangeListenerList = new Array();
	}

  getAll() {
		let data = new Object();
		Object.keys(localStorage).forEach(key => data[key] = JSON.parse(localStorage[key]));
		return data;
	}

	saveObject(jsObject) {
		Object.keys(jsObject).forEach(key => localStorage[key] = JSON.stringify(jsObject[key]));
		this.onChangeListenerList.forEach(onChangeListener => onChangeListener());
	}

	getObject(objName) {
		return localStorage[objName] != null ? JSON.parse(localStorage[objName]) : null;
	}

	set(name, value) {
		localStorage[name] = value;
		this.onChangeListenerList.forEach(onChangeListener => onChangeListener());
	}

	setOnChangeListener(onChangeListener) {
		this.onChangeListenerList.push(onChangeListener);
	}

}