import "./tile.sass";
import React, { ComponentType, ReactElement } from "react";

interface TileProps {
  className?: string;
  children: ReactElement;
  tileTag?: ComponentType | keyof JSX.IntrinsicElements;
  innerTag?: ComponentType | keyof JSX.IntrinsicElements;
  onClick?: () => void;
  disabled?: boolean;
}

const Tile: React.FC<TileProps> = ({
  children,
  className,
  tileTag = 'div',
  innerTag = 'div',
  onClick = undefined,
  disabled = undefined,
}) => {
  const Tag = tileTag;
  const InnerTag = innerTag;

  return (
    <Tag className={`tile ${className}`}>
      <InnerTag className="tile__inner" onClick={onClick} disabled={disabled}>
        <div className="tile__triangle tile__triangle--left" />
        <div className="tile__triangle tile__triangle--right" />
        <div className="tile__children-wrapper">{children}</div>
      </InnerTag>
      <div className="tile__line-break-through" />
    </Tag>
  );
};

export default Tile;
