<template>
  <Layout>
    <template #headerSlot></template>
      <p>Bilety</p>
    <template #footerSlot></template>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useIonRouter, IonButton, onIonViewWillEnter } from '@ionic/vue';
const router = useIonRouter();




function konsola(){console.log('Zapisanie')}
</script>