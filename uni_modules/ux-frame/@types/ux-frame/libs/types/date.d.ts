export interface IUxDate {
}
export type UxDateUnit = 'years' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'weeks' | 'quarters';
export type UxDateInput = string | number | Date | IUxDate | null | undefined;
export type UxDateConfig = {
    locale: string;
    weekStart: number;
};
