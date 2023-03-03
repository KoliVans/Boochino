function filtermenu(e) {
	const menu = document.querySelectorAll(".list-menu div"); // select all animal divs
	let filter = e.target.dataset.filter; // grab the value in the event target's data-filter attribute
	menu.forEach(menu => {
		menu.classList.contains(filter) // does the menu have the filter in its class list?
			? menu.classList.remove('hidden')   // if yes, make sure .hidden is not applied
			: menu.classList.add('hidden'); // if no, apply .hidden
	});
};
