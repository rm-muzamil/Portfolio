// components/Profile.tsx
import Image from "next/image";
import "../../styles/Profile.css";

export default function Profile() {
  return (
    <>
      <div className="background-lines" />
      <div className="profile-container">
        <div className="profile-bg">
          <Image
            src="/rm.png"
            width={100}
            height={100}
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </>
  );
}
