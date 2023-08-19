import { UserButton } from "@clerk/nextjs";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <p>Home page!! (Protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Homepage;
