;(function() {
	let catalogSection = document.querySelector('.section-catalog');
 
	if (catalogSection === null) {
	  return;
	}
 
	let removeChildren = function(item) {
	  while (item.firstChild) {
		 item.removeChild(item.firstChild);
	  }
	};
 
	let updateChildren = function(item, children) {
	  removeChildren(item);
	  for (var i = 0; i < children.length; i += 1) {
		 item.appendChild(children[i]);
	  }
	};
 
	var catalog = catalogSection.querySelector('.catalog');
	var catalogNav = catalogSection.querySelector('.catalog-nav');
	var catalogItems = catalogSection.querySelectorAll('.catalog__item');
 
	catalogNav.addEventListener('click', function(e) {
	   const target = e.target;
	   const item = myLib.closestItemByClass(target, 'catalog-nav__btn');
 
	  if (item === null || item.classList.contains('is-active')) {
		 return;
	  }
 
	  e.preventDefault();
	  let filterValue = item.getAttribute('data-filter');
	  let previousBtnActive = catalogNav.querySelector('.catalog-nav__btn.is-active');
 
	  previousBtnActive.classList.remove('is-active');
	  item.classList.add('is-active');
 
	  if (filterValue === 'all') {
		 updateChildren(catalog, catalogItems);
		 return;
	  }
 
	  let filteredItems = [];
	  for ( let i = 0; i < catalogItems.length; i += 1) {
		let current = catalogItems[i];
		 if (current.getAttribute('data-category') === filterValue) {
			filteredItems.push(current);
		 }
	  }
 
	  updateChildren(catalog, filteredItems);
	});
 })();