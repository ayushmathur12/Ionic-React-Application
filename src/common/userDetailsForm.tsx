import {IonButton, IonInput, IonItem} from "@ionic/react";
import '../pages/login.css';
import {useEffect} from "react";

const UserDetailsForm = (params: any) => {
    const {setUserData, handleClick, item, userData, type} = params
    console.log("item :::: ", userData)
    useEffect(() => {
        // type == "update" && setUserData(item.userData)
    }, [])
    return (
        <div className={"mainScreen"}>
            <IonItem className={"textField"}>
                <IonInput label="First Name" placeholder="First Name" type={"text"}
                          value={userData?.firstName}
                          onIonInput={(e) =>
                              setUserData((prevState: any) => ({
                                  ...prevState,
                                  firstName: e.target.value
                              }))}/>
            </IonItem>
            <IonItem className={"textField"}>
                <IonInput label="Last Name" placeholder="Last Name" type={"text"}
                          value={userData?.lastName}
                          onIonInput={(e) => {
                              setUserData((prevState: any) => ({
                                  ...prevState,
                                  lastName: e.target.value
                              }))
                          }
                          }
                />
            </IonItem>
            <IonItem className={"textField"}>
                <IonInput label="Mobile Number" placeholder="Mobile Number" type={"number"}
                          value={userData?.mobileNumber}
                          onIonInput={(e) =>
                              setUserData((prevState: any) => ({
                                  ...prevState,
                                  mobileNumber: e.target.value
                              }))}
                />
            </IonItem>
            <IonItem className={"textField"}>
                <IonInput label="Email" placeholder="Email" type={"email"}
                          value={userData?.emailID}
                          onIonInput={(e) =>
                              setUserData((prevState: any) => ({
                                  ...prevState,
                                  emailID: e.target.value
                              }))}
                />
            </IonItem>
            <IonItem className={"textField"}>
                <IonInput label="DOB" placeholder="DOB" type={"date"}
                          value={userData?.dateOfBirth}
                          onIonInput={(e) =>
                              setUserData((prevState: any) => ({
                                  ...prevState,
                                  dateOfBirth: e.target.value
                              }))}
                />
            </IonItem>
            <div className={"buttonSection"}>
                <IonButton onClick={(e) => handleClick(e)} className={"submitDetails"}>Submit
                    Details</IonButton>
            </div>
        </div>
    )
}
export default UserDetailsForm