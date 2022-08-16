import "./App.css";
import AppRoute from "./component/Admin/Routes/AppRoute";
// import { UserProvider } from "./component/Admin/CustomeContext/ApplicationContext";

function App() {
  return (
    <div className="App">
      {/* <UserProvider> */}
      <AppRoute />
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
