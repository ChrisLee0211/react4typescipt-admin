import React from 'react';

export interface ComponentProps {

}

const NotFound: React.FC<ComponentProps> = (props: ComponentProps) => {
    return (
        <div>
            Page Not Found!
        </div>
    )
}

export default NotFound