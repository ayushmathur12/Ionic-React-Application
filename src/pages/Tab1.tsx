import {IonButton, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab1.css';
import './Login.css';
import {useEffect, useState} from "react";
import {v4 as uuid} from 'uuid';
import UserDetailsForm from "../common/userDetailsForm";

const Tab1: React.FC = () => {
    const [userData, setUserData] = useState({})
    let prevUserDetails: any
    useEffect(() => {
        prevUserDetails = localStorage.getItem('userDetails')
    }, [userData])
    const handleClick = async (e: any) => {
        e.preventDefault()
        let storedData = localStorage.getItem('userDetails');
        let dataArray = storedData ? JSON.parse(storedData) : [];
        dataArray.push({id: uuid(), userData: userData});
        localStorage.setItem('userDetails', JSON.stringify(dataArray));
        setUserData({})
    }
    return (
        <div className={"loginSection"}>
            <IonPage>
                <IonContent fullscreen className={"loginPage"}>
                    <IonHeader collapse={"fade"}>
                        <IonToolbar>
                            <IonTitle size="large">Upload User Details</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <UserDetailsForm setUserData={setUserData} userData={userData} handleClick={handleClick}/>
                </IonContent>
            </IonPage>
        </div>
    );
};

export default Tab1;
