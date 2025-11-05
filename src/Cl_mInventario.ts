import Cl_mDispositivo, {iDispositivo} from "./Cl_mDispositivo.js";

export default class Cl_mInventario {
    private dispositivos: Cl_mDispositivo[] = [];

    agregarDispositivo({
        dispositivo,
        callback,
    }: {
        articulo: Cl_mDispositivo;
        callback: (error: string | false) => void;
    }): void {

        const id = this.dispositivos.find(
            (d) => d.id === articulo.id
        );
        if (id) {
            callback("El ID ya existe");
            return;
        }

        const serial = this.dispositivos.find(
            (d) => d.serial === articulo.serial
        );
        if (serial) {
            callback("El serial ya existe");
            return;
        }

        this.dispositivos.push(articulo);
        callback(false);
    }

    listarDispositivos(): iDispositivo[] {
        let dispositivos: iDispositivo[] = [];
        this.dispositivos.forEach((d) => {
            dispositivos.push(d.toJSON());
        });
        return dispositivos;
    }
}
