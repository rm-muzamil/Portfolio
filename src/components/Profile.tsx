// components/Profile.tsx
import Image from "next/image";
import "../../styles/Profile.css";

export default function Profile() {
  return (
    <>
      <div className="background-lines" />
      <div className="profile-container">
        <div className="profile-bg">
          <Image src="/rm.png" alt="Profile" className="profile-image" />
        </div>
      </div>
    </>
  );
}
