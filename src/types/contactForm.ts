import { zodResolver } from '@hookform/resolvers/zod'
import { UseControllerProps } from 'react-hook-form';
import { z } from 'zod'

const QueryType = {
    GeneralEnquiry: 'generalEnquiry',
    SupportRequest: 'supportRequest'
} as const;

const QueryTypeNativeEnum = z.nativeEnum(QueryType, { message: 'Please select a query type' });
type QueryTypeEnum = z.infer<typeof QueryTypeNativeEnum>;

export type RadioOption<TValue extends string> = {
    id: string;
    label: string;
    value: TValue;
}

type QueryTypeRadioOption = RadioOption<QueryTypeEnum>

export const formSchema = z.object({
    firstName: z.string().min(1, 'This field is required'),
    lastName: z.string().min(1, 'This field is required'),
    email: z.string().email('Please enter a valid email address'),
    message: z.string().min(1, 'This field is required'),
    consentContactByTheTeam: z.string().includes('true', { message: 'To submit this form, please consent to being contacted' }),
    queryType: QueryTypeNativeEnum
});

export const QueryTypeRadioOptions: [QueryTypeRadioOption, QueryTypeRadioOption] = [
    {
        id: 'QueryType1',
        label: 'General Enquiry',
        value: 'generalEnquiry'
    },
    {
        id: 'QueryType2',
        label: 'Support Request',
        value: 'supportRequest'
    }
]

export type ContactFormSchema = z.infer<typeof formSchema>;
export type ControlledPropsContactForm = UseControllerProps<ContactFormSchema>;

export const contactFormZodResolver = zodResolver(formSchema);