import {IError} from '../Beans/IError';

export class BaseError extends Error{
    constructor(error: IError){
        super(`[${error.code}] ${error.errorType} - ${error.message}`);
    }
}