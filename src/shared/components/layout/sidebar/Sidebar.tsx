import SidebarItem from "./SidebarItem.tsx";

function Sidebar() {
  const items = [
    { label: "Dashboard", icon: "fas fa-home" },
    { label: "Ma startup", icon: "fas fa-user" },
    { label: "Equipe", icon: "fas fa-cog" },
    { label: "Actions", icon: "fas fa-cog" },
    { label: "Investisseurs", icon: "fas fa-cog" },
    { label: "Événements", icon: "fas fa-cog" },
    { label: "Classements", icon: "fas fa-cog" },
    { label: "Paramètres", icon: "fas fa-cog" },
  ];

  return (
    <div className="m-4 bg-primary w-1/5 h-auto rounded-lg text-light-300 p-4">
      <div className="flex items-center justify-content">
        <img src="https://placehold.co/600x400" alt="" />
      </div>
      {items.map((item, index) => (
        <SidebarItem key={index} label={item.label} icon={item.icon} />
      ))}
    </div>
  );
}

export default Sidebar;
