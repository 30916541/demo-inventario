import Cl_mDispositivo, {iDispositivo} from "./Cl_mDispositivo.js";
import Cl_mInventario from "./Cl_mInventario.js";
import Cl_vInventario from "./Cl_vInventario.js";

export default class Cl_controlador {
    public modelo: Cl_mInventario;
    public vista: Cl_vInventario;

    constructor(modelo: Cl_mInventario, vista: Cl_vInventario) {
        this.modelo = modelo;
        this.vista = vista;
    }

    agregarDispositivo({
        dispositivoData,
        callback,
    }: {
        dispositivoData: iDispositivo;
        callback: Function;
    }): void {
        this.modelo.agregarDispositivo({
            dispositivo: new Cl_mDispositivo({
                ...dispositivoData,
                modelo: dispositivoData.modelo ?? "",
            }),
            
            callback: (error: string | false) => {
                callback(error);
            },
        });
    }
    listarDispositivos(): iDispositivo[] {
        return this.modelo.listarDispositivos();
    }
}