import "./tile.sass";
import { ReactElement } from "react";

interface TileProps {
  className?: string;
  children: ReactElement;
  tileTag?: keyof JSX.IntrinsicElements;
  innerTag?: keyof JSX.IntrinsicElements;
  onClick?: () => void;
}

const Tile = ({
  children,
  className,
  tileTag = 'div',
  innerTag = 'div',
  onClick = undefined,
}:TileProps) => {
  const Tag = tileTag;
  const InnerTag = innerTag;

  return (
    <Tag className={`tile ${className}`}>
      <InnerTag className="tile__inner" onClick={onClick} >
        <div className="tile__triangle tile__triangle--left" />
        <div className="tile__triangle tile__triangle--right" />
        <div className="tile__children-wrapper">{children}</div>
      </InnerTag>
      <div className="tile__line-break-through" />
    </Tag>
  );
};

export default Tile;
