import { Response } from "express";

export type CustomExpressErrorFunction = (res: Response, message?: string | Object) => void

interface ExpressErrors {
    unauthorized: CustomExpressErrorFunction,
    forbidden: CustomExpressErrorFunction,
    internalError: CustomExpressErrorFunction,
    userError: CustomExpressErrorFunction,
    notFound: CustomExpressErrorFunction
}

export default ExpressErrors