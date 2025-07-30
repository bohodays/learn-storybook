interface IIconButtonProps {
  alt: string;
  iconPath: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton = ({ iconPath, alt, onClick }: IIconButtonProps) => {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
};

export default IconButton;
