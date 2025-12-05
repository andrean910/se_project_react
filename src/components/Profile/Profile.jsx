import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ clothingItems }) {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection clothingItems={clothingItems} />
    </div>
  );
}

export default Profile;
