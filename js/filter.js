function filtermenu(e) {
	const menu = document.querySelectorAll(".list-menu div"); // select all animal divs
	let filter = e.target.dataset.filter; // grab the value in the event target's data-filter attribute
	menu.forEach(menu => {
		menu.classList.contains(filter) // does the menu have the filter in its class list?
			? menu.classList.remove('hidden')   // if yes, make sure .hidden is not applied
			: menu.classList.add('hidden'); // if no, apply .hidden
	});

	var catalogSection = document.querySelector('.section-catalog');
	var catalogNav = catalogSection.querySelector('.catalog-nav');

 
	catalogNav.addEventListener('click', function(e) {
	  var target = e.target;
	  var item = myLib.closestItemByClass(target, 'catalog-nav__button');
 
	  if (item === null || item.classList.contains('is-active')) {
		 return;
	  }
 
	  e.preventDefault();
	  var filterValue = item.getAttribute('data-filter');
	  var previousBtnActive = catalogNav.querySelector('.catalog-nav__button.is-active');
 
	  previousBtnActive.classList.remove('is-active');
	  item.classList.add('is-active');
 
	  if (filterValue === 'all') {
		 updateChildren(catalog, catalogItems);
		 return;
	  }
 
	  
	});
};
