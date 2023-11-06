import Image from 'react-bootstrap/Image';
import ProfilePicturePath from "../../../../assets/profil.png";

export function ProfilePicture(props: {isActive: boolean}) {
    const profilePictureStyle: React.CSSProperties = {
        transition: "1s ease",
        transform: props.isActive ? "translateX(0)" : "translateX(100vw)",
    };

    return(
        <Image style={profilePictureStyle} src={ProfilePicturePath} alt="Przemyslaw Klejno" roundedCircle fluid/>
    );
}