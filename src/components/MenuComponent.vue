<template>
  <div>
    <nav
      class="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div class="container-fluid">
        <img
          src="https://i.pinimg.com/originals/98/d3/99/98d399fee26c1c5b749516e214dbd7f7.jpg"
          width="90px"
          height="90px"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/"> Home </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                Iniciar Sesión
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/modificar"
                >Registrarse</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/modificar"
                >Cerrar sesión</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marcas
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <!-- <li v-for="s in series" :key="s">
                    <router-link
                      class="dropdown-item"
                      :to="'/detalles/' + s.idSerie"
                      >{{ s.nombre }}</router-link
                    >
                  </li> -->
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style></style>
