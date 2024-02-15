import React from 'react';

// Define an interface for the component's props
interface IconProps {
    searchKey: string;
}

const Icon: React.FC<IconProps> = ({ searchKey }) => {
    return (
        <>
            {searchKey ? (
                <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            ) : (
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 11V13H4V11H20ZM15.5 8H20.5V10H15.5V8ZM15.5 14H20.5V16H15.5V14ZM13 6V18H11V6H13Z"></path>
                </svg>
            )}
        </>
    );
};

export default Icon;