import React from 'react';

const networkIcon = (
    fill: string,
    size: number,
    style?: React.CSSProperties,
) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <title>network icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.45455 4.63636C5.00268 4.63636 4.63636 5.00268 4.63636 5.45455V8.72727C4.63636 9.17914 5.00268 9.54545 5.45455 9.54545H18.5455C18.9973 9.54545 19.3636 9.17914 19.3636 8.72727V5.45455C19.3636 5.00268 18.9973 4.63636 18.5455 4.63636H5.45455ZM3 5.45455C3 4.09894 4.09894 3 5.45455 3H18.5455C19.9011 3 21 4.09894 21 5.45455V8.72727C21 10.0829 19.9011 11.1818 18.5455 11.1818H5.45455C4.09894 11.1818 3 10.0829 3 8.72727V5.45455Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1818 17.7273V10.3636H12.8182V17.7273H11.1818Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.27273 7.09091C6.27273 6.63904 6.63904 6.27273 7.09091 6.27273H7.09909C7.55096 6.27273 7.91727 6.63904 7.91727 7.09091C7.91727 7.54278 7.55096 7.90909 7.09909 7.90909H7.09091C6.63904 7.90909 6.27273 7.54278 6.27273 7.09091Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.54545 7.09091C9.54545 6.63904 9.91177 6.27273 10.3636 6.27273H10.3718C10.8237 6.27273 11.19 6.63904 11.19 7.09091C11.19 7.54278 10.8237 7.90909 10.3718 7.90909H10.3636C9.91177 7.90909 9.54545 7.54278 9.54545 7.09091Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 19.3636C12.4519 19.3636 12.8182 18.9973 12.8182 18.5455C12.8182 18.0936 12.4519 17.7273 12 17.7273C11.5481 17.7273 11.1818 18.0936 11.1818 18.5455C11.1818 18.9973 11.5481 19.3636 12 19.3636ZM12 21C13.3556 21 14.4545 19.9011 14.4545 18.5455C14.4545 17.1898 13.3556 16.0909 12 16.0909C10.6444 16.0909 9.54545 17.1898 9.54545 18.5455C9.54545 19.9011 10.6444 21 12 21Z"
            fill={fill}
        />
    </svg>
);
export default networkIcon;
