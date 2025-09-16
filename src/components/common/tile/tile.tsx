import "./tile.sass";
import { ReactElement } from "react";
import { Button } from '../button/button';

interface TileProps {
  className?: string;
  children: ReactElement;
  tileTag?: keyof JSX.IntrinsicElements;
  innerTag?: keyof JSX.IntrinsicElements;
  onClick?: () => void;
  isButton?: boolean;
  disabled?: boolean;
}

const Tile = ({
  children,
  className,
  tileTag = 'div',
  isButton = false,
  onClick = undefined,
  disabled,
}:TileProps) => {
  const Tag = tileTag;

  const renderWrapperContent = () => {
    return (
      <>
        <div className="tile__triangle tile__triangle--left" />
        <div className="tile__triangle tile__triangle--right" />
        <div className="tile__children-wrapper">{children}</div>
      </>
    )
  }

  const renderCorrectWrapper = () => {
    return isButton && onClick ? (
      <Button className="tile__inner" onClick={onClick} disabled={disabled}>
        {renderWrapperContent()}
      </Button> 
    ) : (
      <div className="tile__inner">
        {renderWrapperContent()}
      </div> 
    )
  }

  return (
    <Tag className={`tile ${className}`}>
      {renderCorrectWrapper()}
      <div className="tile__line-break-through" />
    </Tag>
  );
};

export default Tile;
