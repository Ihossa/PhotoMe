import { compact, isString } from 'lodash';

export const jc = (...arg: string[]) => {
    return compact(arg).join(' ');
};

export const abbr = (firstName?: string, lastName?: string) => {
    if (!firstName || !isString(firstName)) {
        return undefined;
    }

    const firstSymbol = firstName.slice(0, 1);
    const secondSymbol = lastName ? lastName.slice(0, 1) : '';
    return (firstSymbol + secondSymbol).toUpperCase();
};
