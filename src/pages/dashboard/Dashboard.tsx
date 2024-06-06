import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Dashboard.css';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButton, IonPopover, IonGrid, IonRow, IonCol } from '@ionic/react';
import Home from "../home/Home";

const Dashboard: FC = () => {
    const history = useHistory();
    const [showHome, setShowHome] = useState(false);

    const toggleHome = () => setShowHome(!showHome);

    const goToHome = () => {
        history.push('/home');
    }

    return (
        <IonPage>
            <IonHeader mode='ios'>
                <IonToolbar className='ion-text-aling-center'>
                    <IonTitle>
                        Dashboard
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol className='center-col'>
                            <div className='dash-container'>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://lookerstudio.google.com/embed/reporting/c75c9f4d-9efe-4cf1-afda-3e76df869eb4/page/BMO2D"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                                ></iframe>
                            </div>
                        </IonCol>
                        {showHome && (
                            <IonCol size="5">
                                <Home />
                            </IonCol>
                        )}
                    </IonRow>
                </IonGrid>
            </IonContent>
            <IonFooter mode='ios'>
                <IonToolbar>
                    <IonPopover className='popover' trigger="click-trigger" triggerAction="click" arrow={true} reference="event" mode='ios' size='auto' side='top' alignment='start'>
                        <Home />
                    </IonPopover>
                    <IonButton slot="end" fill='clear' size='small' mode='ios' onClick={toggleHome}>
                        <img src={"img/bot.avif"} className="circular-image" />
                    </IonButton>
                    {/* <IonButton slot="end" fill='clear' size='small' mode='ios' id="click-trigger">
                        <img src={"img/bot.avif"} className="circular-image" />
                    </IonButton> */}
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
}

export default Dashboard;