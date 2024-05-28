import './tile.sass'
import React, {ComponentType, ReactElement} from "react";

interface TileProps {
    className: string,
    children: ReactElement,
    tileTag: ComponentType | keyof JSX.IntrinsicElements,
}

const Tile = ({children, className, tileTag}: TileProps) => {
    const Tag = tileTag;
    return (
        <Tag className={`tile ${className}`}>
            <div className='tile__inner'>
                <div className='tile__children-wrapper'>
                    {children}
                </div>
            </div>
            <div className='tile__line-break-through'/>
        </Tag>
    )
}

export default Tile