import { Response } from "express";
import ErrorCodeList from "../../types/error/ErrorCodeList";
import ExpressErrors, { CustomExpressErrorFunction } from "../../types/error/ExpressErrors";

const constructErrorFunction = (status: ErrorCodeList = ErrorCodeList.INTERNAL_ERROR): CustomExpressErrorFunction => {
    return (res: Response, message?: string | Object) => res.status(status).send((message && process.env.NODE_ENV == "development") ? { error: message } : undefined)

}

const errorHandlers: ExpressErrors = {
    unauthorized: constructErrorFunction(ErrorCodeList.UNAUTHORIZED),
    forbidden: constructErrorFunction(ErrorCodeList.FORBIDDEN),
    internalError: constructErrorFunction(ErrorCodeList.INTERNAL_ERROR),
    userError: constructErrorFunction(ErrorCodeList.USER_ERROR),
    notFound: constructErrorFunction(ErrorCodeList.NOT_FOUND)
}

export default errorHandlers