import { BaseError } from "./BaseError";
import { IError } from "../Beans/IError";

export class SystemException extends BaseError {

    constructor(errorMessage: String) {
        let error: IError = {
            code: 500,
            errorType: "System Exception - Internal Sever Error",
            message: errorMessage
        };
        super(error);
    }

}