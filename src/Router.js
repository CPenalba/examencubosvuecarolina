import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import IniciarSesionComponent from "./components/IniciarSesionComponent.vue";
import DetallesComponent from "./components/DetallesComponent.vue";
import CubosMarcaComponent from "./components/CubosMarcaComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";
import MostrarComprasComponent from "./components/MostrarComprasComponent.vue";

const myRoutes = [
  { path: "/", component: HomeComponent },
  { path: "/login", component: IniciarSesionComponent },
  { path: "/detalles/:id", component: DetallesComponent },
  { path: "/cubosmarca/:nombremarca", component: CubosMarcaComponent },
  { path: "/perfil", component: PerfilComponent },
  { path: "/compras", component: MostrarComprasComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
