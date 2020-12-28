import React from 'react';

export default function useToggle(defaultValue = false) {
    const [value, setValue] = React.useState(defaultValue);
    const toggle = React.useCallback(() => {
        setValue(val => !val);
    }, []);
    return [value, toggle];
}