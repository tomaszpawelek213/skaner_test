<template>
  <Layout>
    <template #headerSlot></template>
      Strona Starowa
      
      <div>
      Witamy w aplikacji obsługi parkingów.
      Prosimy zarejestrować się na stronie,
      Start with CemiPark <a target="_blank" rel="noopener noreferrer" href="https://serwis.cemi.pl">http://tm-parnter.pl</a>
      a następnie uzupełnij zakładkę Profil 
      </div>
      ----------------------------------------
      <div style="margin: 10px;">
      Aby wjechać na parking za pomocą aplikacji
       - Należy pobrać "Virtual Ticket"
      przejdź do zakładki i wprować nr urządzenia,
      pamiętaj po pobraniu biletu szlaban otworzy się automatycznie.
      Wieć pojazd musi znajdować się bezpośrednio przed szlabanem.
      </div>
      <div>
      lub prościej - użyć skanera w swoim smartfonie - zeskanuj kod QR który znajduje się na obudowie  urządzenia  
      </div>  
      
    <template #footerSlot></template>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
import { useIonRouter,IonPage,IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton} from '@ionic/vue';
const router = useIonRouter();




function konsola(){console.log('Zapisanie')}
</script>