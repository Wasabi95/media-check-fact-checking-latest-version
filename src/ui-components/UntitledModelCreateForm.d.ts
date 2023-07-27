/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UntitledModelCreateFormInputValues = {
    name?: string;
    date?: string;
    tags?: string;
    category?: string;
    afirmacion?: string;
    analisis?: string;
    veredicto?: string;
    imag?: string;
    description?: string;
};
export declare type UntitledModelCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    afirmacion?: ValidationFunction<string>;
    analisis?: ValidationFunction<string>;
    veredicto?: ValidationFunction<string>;
    imag?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UntitledModelCreateFormOverridesProps = {
    UntitledModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    afirmacion?: PrimitiveOverrideProps<TextFieldProps>;
    analisis?: PrimitiveOverrideProps<TextFieldProps>;
    veredicto?: PrimitiveOverrideProps<TextFieldProps>;
    imag?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UntitledModelCreateFormProps = React.PropsWithChildren<{
    overrides?: UntitledModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UntitledModelCreateFormInputValues) => UntitledModelCreateFormInputValues;
    onSuccess?: (fields: UntitledModelCreateFormInputValues) => void;
    onError?: (fields: UntitledModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UntitledModelCreateFormInputValues) => UntitledModelCreateFormInputValues;
    onValidate?: UntitledModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function UntitledModelCreateForm(props: UntitledModelCreateFormProps): React.ReactElement;
