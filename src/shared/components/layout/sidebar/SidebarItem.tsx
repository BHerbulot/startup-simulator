function SidebarItem(props: { label: string; icon: string }) {
  return (
    <div className="py-2 px-4 flex items-center gap-2 bg-primary hover:brightness-225 hover:text-light-900 rounded-lg cursor-pointer">
      <i className={props.icon}></i>
      <button>{props.label}</button>
    </div>
  );
}

export default SidebarItem;
