import {
    IonButton,
    IonCard, IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader, IonModal,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Tab2.css';
import {useEffect, useRef, useState} from "react";
import UserDetailsForm from "../common/userDetailsForm";

const Tab2: React.FC = () => {
    const [userData, setUserData] = useState({})
    const [itemId, setItemId] = useState()
    const [userDetails, setUserDetails] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false)
    let data: any

    useEffect(() => {
        getUserDetails().then()
    }, [])

    const getUserDetails = async () => {
        // @ts-ignore
        data = JSON.parse(localStorage.getItem("userDetails"))
        setUserDetails(data)
    }
    useEffect(() => {
    }, [userData])

    const handleDelete = (e: any, item: any) => {
        let updatedUserDetails = userDetails?.filter((items: any) => items.id !== item.id)
        setUserDetails(updatedUserDetails)
        localStorage.setItem('userDetails', JSON.stringify(updatedUserDetails))
    }
    const handleClick = (item: any) => {
        let previousDetails = userDetails?.filter((items: any) => items.id !== itemId)
        previousDetails.push({id: itemId, userData: userData});
        localStorage.setItem('userDetails', JSON.stringify(previousDetails))
        getUserDetails().then()
        setShowModal(false)
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>User Details</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {userDetails?.length > 0 && userDetails.map((item: any, index: number) => {
                    return (<IonCard>
                        <IonCardHeader>
                            <IonCardTitle>{item.userData.firstName + " " + item.userData.lastName}</IonCardTitle>
                            <IonCardSubtitle>{item.userData.emailID}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>Date Of Birth {item.userData.dob ?? "Update DOB"}</IonCardContent>
                        <IonButton fill="clear" onClick={() => {
                            setUserData(item.userData);
                            setItemId(item.id)
                            setShowModal(true)
                        }}>Edit</IonButton>
                        <IonButton fill="clear" onClick={(e) => handleDelete(e, item)}>Delete</IonButton>
                    </IonCard>)
                })}
                {Object.keys(userData).length && <IonModal
                    isOpen={showModal}
                    // cssClass='my-custom-class'
                    swipeToClose={true}
                    style={{
                        height: "90%",
                        top: '5%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    // presentingElement={router || undefined}
                    onDidDismiss={() => setShowModal(false)}>
                    <div>
                        <IonButton slot="start" onClick={() => setShowModal(false)}>
                            Close Modal
                        </IonButton>
                    </div>
                    <UserDetailsForm userData={userData} setUserData={setUserData}
                                     handleClick={() => handleClick(userData)} type={"update"}/>
                </IonModal>}
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
