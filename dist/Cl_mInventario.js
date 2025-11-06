export default class Cl_mInventario {
    dispositivos = [];
    agregarDispositivo({ dispositivo, callback, }) {
        const id = this.dispositivos.find((d) => d.id === dispositivo.id);
        if (id) {
            callback("El ID ya existe");
            return;
        }
        const serial = this.dispositivos.find((d) => d.serial === dispositivo.serial);
        if (serial) {
            callback("El serial ya existe");
            return;
        }
        this.dispositivos.push(dispositivo);
        callback(false);
    }
    listarDispositivos() {
        let dispositivos = [];
        this.dispositivos.forEach((d) => {
            dispositivos.push(d.toJSON());
        });
        return dispositivos;
    }
}
