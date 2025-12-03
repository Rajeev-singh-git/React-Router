import { Link } from "react-router-dom";

export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div>
      {profiles.map((profile) => (
        <Link
          key={profile}
          to={`/profiles/${profile}`}
          style={{ display: "block", marginBottom: "8px" }}
        >
          Profile {profile}
        </Link>
      ))}
    </div>
  );
}
