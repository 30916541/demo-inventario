import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php?v251110-2150";
import Cl_mDispositivo from "./Cl_mDispositivo.js";
export default class Cl_mInventario {
    inventario = [];
    db;
    tbDispositivos = "Mi.Inventario";
    constructor() {
        this.db = new Cl_dcytDb({ aliasCuenta: "THEGITGUARDIANS" });
    }
    agregarDispositivo({ dispositivo, callback, }) {
        const id = this.inventario.find((d) => d.id === dispositivo.id);
        if (id) {
            callback("El ID ya existe");
            return;
        }
        const serial = this.inventario.find((d) => d.serial === dispositivo.serial);
        if (serial) {
            callback("El serial ya existe");
            return;
        }
        this.db.addRecord({
            tabla: this.tbDispositivos,
            object: dispositivo.toJSON(),
            callback: ({ id, objects, error }) => {
                if (!error)
                    this.llenarInventario(objects);
                callback?.(error);
            },
        });
    }
    cargarInventario(callback) {
        this.db.listRecords({
            tabla: this.tbDispositivos,
            callback: ({ objects, error }) => {
                if (!error)
                    this.llenarInventario(objects || []);
                callback(false);
            },
        });
    }
    llenarInventario(inventario) {
        this.inventario = [];
        inventario.map((dispositivo) => this.inventario.push(new Cl_mDispositivo(dispositivo)));
    }
    listarInventario() {
        return this.inventario.map((dispositivo) => dispositivo.toJSON());
    }
}
