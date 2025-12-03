import { NavLink, Outlet } from "react-router-dom";

export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div>
      {profiles.map((profile) => (
        <NavLink
          key={profile}
          to={`/profiles/${profile}`}
          className={({ isActive }) => {
            return isActive ? "red" : "";
          }}
          style={{ display: "block", marginBottom: "8px" }}
        >
          Profile {profile}
        </NavLink>
      ))}
      <Outlet></Outlet>
    </div>
  );
}
