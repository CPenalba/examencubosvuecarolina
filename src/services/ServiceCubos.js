import Global from "@/Global";
import axios from "axios";

export default class ServiceCubos {
  loadCubos() {
    return new Promise(function (resolve) {
      let cubos = [];
      let request = "api/cubos";
      let url = Global.urlApiCubos + request;
      console.log(url);
      axios.get(url).then((response) => {
        cubos = response.data;
        resolve(cubos);
      });
    });
  }

  findCuboById(id) {
    return new Promise(function (resolve) {
      let request = "api/cubos/" + id;
      let url = Global.urlApiCubos + request;
      let cubo = {};
      axios.get(url).then((response) => {
        cubo = response.data;
        resolve(cubo);
      });
    });
  }

  getComentariosCuboById(id) {
    return new Promise(function (resolve) {
      let request = "api/ComentariosCubo/GetComentariosCubo/" + id;
      let url = Global.urlApiCubos + request;
      let comentario = {};
      axios.get(url).then((response) => {
        comentario = response.data;
        resolve(comentario);
      });
    });
  }

  getMarcas() {
    return new Promise(function (resolve) {
      let marcas = [];
      let request = "api/cubos/marcas";
      let url = Global.urlApiCubos + request;
      console.log(url);
      axios.get(url).then((response) => {
        marcas = response.data;
        resolve(marcas);
      });
    });
  }

  getCubosMarca(marca) {
    return new Promise(function (resolve) {
      let request = "api/Cubos/CubosMarca/" + marca;
      let url = Global.urlApiCubos + request;
      let cubos = [];
      axios.get(url).then((response) => {
        cubos = response.data;
        resolve(cubos);
      });
    });
  }

  login(login) {
    return new Promise(function (resolve, reject) {
      let request = "api/Manage/Login";
      let url = Global.urlApiCubos + request;
      axios
        .post(url, login)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getPerfilUsuario() {
    return new Promise(function (resolve) {
      let request = "api/Manage/PerfilUsuario";
      let url = Global.urlApiCubos + request;
      let headers = {
        Authorization: `Bearer ${Global.token}`,
      };
      axios.get(url, { headers }).then((response) => {
        resolve(response);
      });
    });
  }

  getComprasUsuario() {
    return new Promise(function (resolve) {
      let request = "api/Compra/ComprasUsuario";
      let url = Global.urlApiCubos + request;
      let headers = {
        Authorization: `Bearer ${Global.token}`,
      };
      axios.get(url, { headers }).then((response) => {
        console.log(response);
        resolve(response.data);
      });
    });
  }
}
