import { DbConfig } from "../config/DbConfig";

// class level decorator
// export const Api = (init: Function) =>{
//     new DbConfig();
// }

// method level decorator
export const Api = (target: any, propertyKey: string, descriptor: PropertyDescriptor)=>{
     new DbConfig();
}