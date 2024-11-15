import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import IniciarSesionComponent from "./components/IniciarSesionComponent.vue";
import DetallesComponent from "./components/DetallesComponent.vue";
import CubosMarcaComponent from "./components/CubosMarcaComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";

const myRoutes = [
  { path: "/", component: HomeComponent },
  { path: "/login", component: IniciarSesionComponent },
  { path: "/detalles/:id", component: DetallesComponent },
  { path: "/cubosmarca/:nombremarca", component: CubosMarcaComponent },
  { path: "/perfil", component: PerfilComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
