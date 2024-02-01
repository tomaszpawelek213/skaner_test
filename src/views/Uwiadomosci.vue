<template>
  <Layout>
    <template #headerSlot></template>
    
      <ion-card-header>
        <ion-card-title>Bilety</ion-card-title>
        <ion-card-subtitle>Historia lista:</ion-card-subtitle>
      </ion-card-header>
    
  

      
      <ion-list style="margin-right: 15px;">
          <ion-item button detail="true">
            <ion-thumbnail slot="start"><img alt="Parking" :src="ImageBilet" /></ion-thumbnail>
              <ion-label>
              Parking Równica   
              </ion-label>
          </ion-item>

          <ion-item button detail="true">
            <ion-thumbnail slot="start"><img alt="Parking" :src="ImageBilet" /></ion-thumbnail>
              <ion-label>
              Parking Równica   
              </ion-label>
          </ion-item>

          <ion-item button detail="true">
            <ion-thumbnail slot="start"><img alt="Parking" :src="ImageBilet" /></ion-thumbnail>
              <ion-label>
              DW SWIERK   
              </ion-label>
          </ion-item>

          <ion-item button detail="true">
            <ion-thumbnail slot="start"><img alt="Parking" :src="ImageBilet" /></ion-thumbnail>
              <ion-label>
              Wisła Parafia   
              </ion-label>
          </ion-item>

      </ion-list>
    <template #footerSlot></template>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useIonRouter, IonButton, onIonViewWillEnter,IonItem,IonList,IonThumbnail,IonLabel,IonCardHeader,IonCardTitle,IonCardSubtitle } from '@ionic/vue';
import ImageBilet from '../res/shoppingmode_FILL0_wght400_GRAD0_opsz24.svg';
const router = useIonRouter();




function konsola(){console.log('Zapisanie')}
</script>