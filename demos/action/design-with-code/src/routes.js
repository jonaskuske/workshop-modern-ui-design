import Feed from './views/Feed.vue'
import Preiswecker from './views/Preiswecker.vue'
import Profil from './views/Profil.vue'
import ProduktDetail from './views/ProduktDetail.vue'
import ProfilBearbeiten from './views/ProfilBearbeiten.vue'
import Einstellungen from './views/Einstellungen.vue'

export default [
  { path: '/', redirect: '/feed' },
  { path: '/feed', component: Feed },
  { path: '/preiswecker', component: Preiswecker },
  { path: '/profil', component: Profil },
  { path: '/profil/bearbeiten', component: ProfilBearbeiten },
  { path: '/einstellungen', component: Einstellungen },
  { path: '/produkte/:id', component: ProduktDetail, props: true },
]
