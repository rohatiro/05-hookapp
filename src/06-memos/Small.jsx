import { memo } from 'react';

export const Small = memo(({ value }) => {
    console.log('render Small');
    return (
        <small>{value}</small>
    )
});
