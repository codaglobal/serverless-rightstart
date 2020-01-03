import { BaseError } from "./BaseError";
import { IError } from "../Beans/IError";

export class BusinessException extends BaseError {

    constructor(errorMessage: String) {
        let error: IError = {
            message: errorMessage,
            code: 400,
            errorType: 'BusinessException'
        };
        super(error);

    }


}