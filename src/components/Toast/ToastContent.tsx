import { FC } from 'react'
import { CheckIcon } from '../assets/icons';

type ToastContentProps = {
    title: string;
    message: string;
}

export const ToastContent: FC<ToastContentProps> = ({
    title, message
}) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-2 items-center'>
                <CheckIcon color='white' /> <p className='text-white font-semibold' >{title}</p>
            </div>
            <p className='text-white font-medium text-sm'>{message}</p>
        </div>
    )
}
