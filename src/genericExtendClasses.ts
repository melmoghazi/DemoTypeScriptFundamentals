interface IProduct {
    name: string;
    price: number;
}

class Store<T> {
    objects: T[] = [];

    add(obj: T): void {
        this.objects.push(obj);
    }
}


//1-Pass on the generic type parameter
class CompresibleStore<T> extends Store<T> {
    compres() { };
}
//2-Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this.objects.find(obj => obj.name === name);
    }
}
//3-Fix the generic type parameter
class ProductStore extends Store<IProduct> {
    filterByCategory(category: string): IProduct[] {
        return [];
    }
}

let store = new CompresibleStore<IProduct>();
store.compres();

let searchStore = new SearchableStore<IProduct>();//IProduct or any type have a properity named name
searchStore.find('iPhone');
