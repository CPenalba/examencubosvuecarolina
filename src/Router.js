import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import IniciarSesionComponent from "./components/IniciarSesionComponent.vue";
import DetallesComponent from "./components/DetallesComponent.vue";

const myRoutes = [
  { path: "/", component: HomeComponent },
  { path: "/login", component: IniciarSesionComponent },
  { path: "/detalles/:id", component: DetallesComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
