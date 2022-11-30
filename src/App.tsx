import { UserCard } from "./components/UesrCard";
import "./styles.css";

const user = {
  id: 1,
  name: "加藤",
  email: "12456@aa.com",
  address: "東京都目黒区"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
