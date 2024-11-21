import { useState, useEffect } from "react";

import PropTypes from 'prop-types'

import Icon from "./Icon";

const EmptyState = ({ searchKey }) => {
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (searchKey) {
            setErrorMessage(`Cannot find item '${searchKey}'`)
        } else {
            setErrorMessage('There are no items. Click \'Add new item\'.')
        }
    },[searchKey])

    return (
        <div className="empty-state">
            <div className="text-center">
                <Icon searchKey={searchKey} />
                <h2 className="mt-2 text-lg leading-6 font-medium text-gray-900">No Items Found</h2>
                <p className="mt-1 text-sm text-gray-500"> { errorMessage } </p>
            </div>
        </div>
    );

};

EmptyState.propTypes = {
    searchKey: PropTypes.string
}

export default EmptyState;
