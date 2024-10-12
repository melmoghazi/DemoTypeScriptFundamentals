
function fetch<T>(url:string):Result<T>{
    return {data:null,error:null};
}

interface Result<T> {
    data: T | null;
    error: string | null;
}


interface IUser{
    userName:string;
}
interface IProduct{
    productName:string;
}

let userResult= fetch<IUser>('userurl');
let productResult=fetch<IProduct>('producturl');