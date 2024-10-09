import React from "react";
import { useAuth } from "../../hooks/useAuth";

const Pelatihanku: React.FC = () => {
  const { handleLogout } = useAuth();

  return (
    <section className="h-screen flex items-center justify-center">
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
};

export default Pelatihanku;
