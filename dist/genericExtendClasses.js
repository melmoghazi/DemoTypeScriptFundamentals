"use strict";
class Store {
    constructor() {
        this.objects = [];
    }
    add(obj) {
        this.objects.push(obj);
    }
}
//1-Pass on the generic type parameter
class CompresibleStore extends Store {
    compres() { }
    ;
}
//2-Restrict the generic type parameter
class SearchableStore extends Store {
    find(name) {
        return this.objects.find(obj => obj.name === name);
    }
}
//3-Fix the generic type parameter
class ProductStore extends Store {
    filterByCategory(category) {
        return [];
    }
}
let store = new CompresibleStore();
store.compres();
let searchStore = new SearchableStore(); //IProduct or any type have a properity named name
searchStore.find('iPhone');
