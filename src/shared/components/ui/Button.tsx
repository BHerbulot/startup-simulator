function Button(props: { label: string; onClick: () => void; icon?: string }) {
  return (
    <button className="ui-button" onClick={props.onClick}>
      {props.label}
      {props.icon && <i className={props.icon}></i>}
    </button>
  );
}

export default Button;
