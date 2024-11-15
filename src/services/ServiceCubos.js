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
}
