import { cloneElement, Children } from 'react'

export function childrenWithProps(props) {
    return Children.map(props.children, child => {
        return cloneElement(child, {
            ...props,
            ...child.props
        });
    });
}