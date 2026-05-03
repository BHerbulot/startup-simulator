function Button(props: { label: string; onClick: () => void; icon?: string }) {
  return (
    <button
      className="py-2 px-4 flex items-center gap-2 bg-secondary hover:brightness-225 hover:text-light-900 rounded-lg cursor-pointer"
      onClick={props.onClick}
    >
      {props.label}
      {props.icon && <i className={props.icon}></i>}
    </button>
  );
}

export default Button;
