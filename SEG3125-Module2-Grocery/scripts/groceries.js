	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Milk",
		LactoseFree: false,
		ContainsNuts: true,
		Organic: false,
		price: 2.00
	},
	{
		name: "Almond Milk",
		LactoseFree: true,
		ContainsNuts: true,
		price: 3.00,
		Organic: false,
	},
	{
		name: "Banana",
		LactoseFree: true,
		ContainsNuts: false,
		price: 4.00,
		Organic: true,
	},
	{
		name: "Yogurt",
		LactoseFree: false,
		ContainsNuts: false,
		price: 4.35,
		Organic: false,
	},
	{
		name: "Ice Cream",
		LactoseFree: false,
		ContainsNuts: true,
		price: 2.35,
		Organic: false,
	},
	{
		name: "Peanuts",
		LactoseFree: false,
		ContainsNuts: true,
		price: 5.35,
		Organic: false,
	},
	{
		name: "Trail Mix",
		LactoseFree: false,
		ContainsNuts: true,
		price: 3.35,
		Organic: false,
	},
	{
		name: "Apple",
		LactoseFree: false,
		ContainsNuts: false,
		price: 1.35,
		Organic: true,
	},
	{
		name: "Celery",
		LactoseFree: false,
		ContainsNuts: true,
		price: 2.35,
		Organic: true,
	},
	{
		name: "Orange",
		LactoseFree: false,
		ContainsNuts: false,
		price: 2.00,
		Organic: true,
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].LactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "ContainsNuts") && (prods[i].ContainsNuts == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].Organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
