import Cl_controlador from "./Cl_controlador.js";
import Cl_mInventario from "./Cl_mInventario.js";
import Cl_vInventario from "./Cl_vInventario.js";

export default class Cl_index {
    constructor() {
        let modelo = new Cl_mInventario();
        modelo.cargarInventario((error: string | false) => {
            if (error) alert(error);
            if (error) throw new Error(error);
            let vista = new Cl_vInventario();
            let controlador = new Cl_controlador(modelo, vista);
            vista.controlador = controlador;
            vista.refresh();
        });
    }
}
