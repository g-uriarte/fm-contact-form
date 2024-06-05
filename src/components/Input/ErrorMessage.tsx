import { FC } from "react";

type ErrorMessageProps = {
    message: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({
    message
}) => {
    return (<p className='text-contact-form-red text-sm' >{message}</p>)
}