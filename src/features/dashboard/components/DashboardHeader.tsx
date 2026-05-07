import Button from "../../../shared/components/ui/Button";

function DashboardHeader() {
  return (
    <div className="m-4 bg-primary h-auto rounded-lg text-light-300 p-4">
      <h1>Dashboard</h1>
      <Button
        label="Ajouter une action"
        onClick={() => {}}
        icon="fas fa-plus"
      />
    </div>
  );
}

export default DashboardHeader;
