

const fetchData = async () => {
    const response = await fetch('http://localhost:8080/products.json' );
    const json = await response.json();
    return json.products; 
}

const products = await fetchData(); 

function getFromLocalStorage(){
    let currentCartProducts;
    let localStorageCartString = localStorage.getItem('cartProduct'); 
    if(!localStorageCartString){
        currentCartProducts = []; 
    }
    else{
        currentCartProducts = JSON.parse(localStorageCartString);
    }
    return currentCartProducts; 
}

let dataFromLocalStorage = getFromLocalStorage();
console.log(dataFromLocalStorage)

function getProductsFromCart(){
    const productsOnCart = products.filter((product) =>{
        return dataFromLocalStorage.includes(product.id) 
    })
    return productsOnCart[0].title;
}

console.log(getProductsFromCart());