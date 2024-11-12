// MyInfo.jsx - This component serves as a personal information page for the user.
// It renders a single component, `MyInfoComp`, which displays the user's details.

import { MyInfoComp } from "../components/myInfo/MyInfoComp"; // Component for displaying user-specific information

export const MyInfo = () => {
  return (
    <div>
      {/* Renders the MyInfoComp component, which contains personal information */}
      <MyInfoComp />
    </div>
  );
};

// Summary:
// The MyInfo component is a simple functional component that displays the MyInfoComp component inside a div.
// This component provides a dedicated page for showing user information or details.
