<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        
        <ion-title >
          <div class="toolbar-icons">
            <div style="display: flex; flex-direction: column;">
              <img width="60" height="35" alt="Zeskanuj KOD" style="float:left; margin-left:15px;" :src="ImageHome" @click="()=> router.push('/home')" />
              <div style="text-align: center; font-size: x-small;  margin-left:15px; margin-top: -4px;">Home</div>
            </div>
            
            <div style="display: flex; flex-direction: column;">
              <img width="60" height="35"  style="float:left; margin-left:30px;"  :src="ImageBudynek"  @click="()=> router.push('/firmy')"/>          
              <div style="text-align: center; font-size: x-small;  margin-left:30px; margin-top: -4px;">Operator</div>
            </div>
            
            <div style="display: flex; flex-direction: column;">
              <img width="60" height="35"  style="float:left; margin-left:30px;"  :src="ImageP"  @click="()=> router.push('/parkingi')" />
              <div style="text-align: center; font-size: x-small;  margin-left:30px; margin-top: -4px;">Parking</div>
            </div> 
           
            <div style="display: flex; flex-direction: column;">
              <img width="60" height="35"  style="float:left; margin-left:30px;"  :src="ImageProfilUser"  @click="()=> router.push('/tmp')"/>
              <div style="text-align: center; font-size: x-small;  margin-left:30px; margin-top: -3px;">tmp</div>
            </div>  
              <slot name="headerSlot"></slot>
            </div>
        </ion-title>
          
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
   
      <div id="container">
        
        <slot name="conntentSlot"></slot>
        <slot></slot>

      </div>
    </ion-content>

    <IonFooter>
        <ion-toolbar>
          <ion-title>
            <div class="toolbar-icons">
                    <div style="display: flex; flex-direction: column;">
                      <img width="60" height="35"  alt="Zeskanuj KOD" style="float:left; margin-left:15px;" :src="ImageQRcode" @click="()=> router.push('/uskaner')" />
                      <div style="text-align: center; font-size: x-small;  margin-left:15px; margin-top: -3px;">Quick Scan</div>
                    </div>
                      <div style="display: flex; flex-direction: column;">
                      <img width="60" height="35"  style="float:left; margin-left:30px;"  :src="ImageBilet" @click="()=> router.push('/ubilety')"/>
                      <div style="text-align: center; font-size: x-small;  margin-left:30px; margin-top: -3px;">Virtual Ticket</div>
                    </div>
                      <div style="display: flex; flex-direction: column;">
                      <img width="60" height="35"  style="float:left; margin-left:30px;"  :src="ImageNotatki" @click="()=> router.push('/uwiadomosci')"/>
                      <div style="text-align: center; font-size: x-small;  margin-left:30px; margin-top: -3px;">Historia</div>
                    </div>
                      <div style="display: flex; flex-direction: column;">
                      <img width="60" height="35"  style="float:left; margin-left:30px;"  :src="ImageProfilUser" @click="()=> router.push('/uprofil')"/>
                      <div style="text-align: center; font-size: x-small;  margin-left:30px; margin-top: -3px;">Profil</div>
                    </div>
            </div>

           
            <div id="container">
            <slot name="footerSlot"></slot>
            </div>
            
          </ion-title>
        </ion-toolbar>
      </IonFooter>
  </ion-page>
</template>

<script setup>
import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar,IonItem, } from '@ionic/vue';
import { useIonRouter, IonButton, onIonViewWillEnter } from '@ionic/vue';
import ImageQRcode from '../res/barcode_scanner_FILL0_wght400_GRAD0_opsz24.svg';
import ImageBilet from '../res/shoppingmode_FILL0_wght400_GRAD0_opsz24.svg';
import ImageNotatki from '../res/note_stack_FILL0_wght400_GRAD0_opsz24.svg';
import ImageProfilUser from '../res/badge_FILL0_wght400_GRAD0_opsz24.svg';
import ImageBudynek from '../res/domain_FILL0_wght400_GRAD0_opsz24.svg';
import ImageHome from '../res/home_FILL0_wght400_GRAD0_opsz24.svg';
import ImageP from '../res/local_parking_FILL0_wght400_GRAD0_opsz24.svg';

const router = useIonRouter();


function konsola(){console.log('Zapisanie')}


</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

.toolbar-icons{
  display: flex;
  justify-content: center;

}

</style>
