import Login from "./pages/AdminLogin";
import AdminLogin from "./pages/AdminLogin";
import AddCars from "./components/AddCars/Index";
import EditCars from "./components/EditCars/Index";
import DeleteCars from "./components/DeleteCars/Index";
function App() {
  return (
    <div className="App">
      <AdminLogin />
      <DeleteCars/>
      <AddCars />
      <EditCars />
    </div>
  );
}

export default App;
