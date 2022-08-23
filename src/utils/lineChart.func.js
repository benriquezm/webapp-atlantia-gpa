export const getArrKeys = (obj) => {
	const keys = Object.keys(obj);
	return keys;
};

export const groupByKey = (arrOfObj, key) => {
	const group = arrOfObj.reduce((prevItem, curreItem) => {
		const { [key]: keyValue } = curreItem;
		prevItem[keyValue] = prevItem[keyValue] ?? [];
		prevItem[keyValue].push(curreItem);
		return prevItem;
	}, {});
	return group;
};

export const uniqueArr = (list) => {
	let uniqueItem = list.filter((c, index) => {
		return list.indexOf(c) === index;
	});
	return uniqueItem;
};

export const newArrObj = (list, keyMap, mustBeUnique) => {
	console.log('[list]', list);
	let arrList = list.map((i) => {
		return i[keyMap];
	});
	if (mustBeUnique) {
		arrList = uniqueArr(arrList);
	}
	return arrList;
};

export const structureSeries = (listPrice, productName) => {
	const objSeries = {
		name: productName,
		data: listPrice,
	};
	return objSeries;
};

export const getDate = (strDate) => {
	const [month, day, year] = strDate.split('/');
	const strMonth = {
		1: 'Ene',
		2: 'Feb',
		3: 'Mar',
		4: 'Abr',
		5: 'May',
		6: 'Jun',
		7: 'Jul',
		8: 'Ago',
		9: 'Sep',
		10: 'Oct',
		11: 'Nov',
		12: 'Dic',
	};
	const date = `${strMonth[month]} ${day}`;
	return date;
};
