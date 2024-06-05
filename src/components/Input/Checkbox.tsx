import { FC } from 'react'
import { ControlledPropsContactForm } from '../../types/contactForm';
import { useController } from 'react-hook-form';
import { cn } from '../../utils/tw';
import { ErrorMessage } from './ErrorMessage';

type CheckboxProps = {
    label: string;
    id: string;
    isRequired: boolean;
} & ControlledPropsContactForm;

export const Checkbox: FC<CheckboxProps> = ({
    id, label, isRequired, ...props
}: CheckboxProps) => {

    const { field, fieldState } = useController({ ...props, defaultValue: '' });

    return (
        <>
            <div className='flex flex-row items-center gap-3'>
                <input
                    className='custom-checkbox'
                    {...field}
                    type='checkbox'
                    id={id}
                />
                <label
                    className={cn("text-contact-form-grey-900 text-base", { "after:content-['*'] after:ml-1.5 after:text-xs after:text-contact-form-green-600": isRequired })}
                    htmlFor={id}
                >{label}</label>
            </div>
            {
                fieldState.error && <ErrorMessage message={fieldState.error!.message ? fieldState.error!.message : `${field.name} has an error`} />
            }
        </>
    )
}
