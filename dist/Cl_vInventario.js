import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vInventario extends Cl_vGeneral {
    btAgregarDispositivo;
    divDispositivosRegistrados;
    constructor() {
        super({ formName: "inventario" });
        this.btAgregarDispositivo = this.crearHTMLButtonElement("btAgregarDispositivo", {
            onclick: () => this.agregarDispositivo(),
        });
        this.divDispositivosRegistrados = this.crearHTMLElement("divDispositivosRegistrados", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarDispositivosRegistrados(),
        });
    }
    mostrarDispositivosRegistrados() {
        this.divDispositivosRegistrados.innerHTML = "";
        let dispositivos = this.controlador?.dispositivosRegistrados();
        if (!dispositivos)
            return;
        dispositivos.forEach((dispositivos) => {
            this.divDispositivosRegistrados.innerHTML += `<tr>
                <td>${dispositivos.id}</td>
                <td>${dispositivos.tipo.toLocaleUpperCase()}</td>
                <td>${dispositivos.serial.toLocaleUpperCase()}</td>
                <td>${dispositivos.marca.toLocaleUpperCase()}</td>
                <td>${dispositivos.modelo.toLocaleUpperCase()}</td>
            </tr>`;
        });
    }
    agregarDispositivo() {
        let id = parseInt(prompt("Ingrese el ID del dispositivo:") || "0");
        if (!id)
            return;
        let tipo = prompt("Ingrese el tipo de dispositivo:");
        if (!tipo)
            return;
        let serial = prompt("Ingrese el serial del dispositivo:");
        if (!serial)
            return;
        let marca = prompt("Ingrese la marca del dispositivo:");
        if (!marca)
            return;
        let modelo = prompt("Ingrese el modelo del dispositivo (opcional):");
        if (!modelo)
            return;
        this.controlador.agregarDispositivo({
            dispositivoData: {
                id: id,
                tipo: tipo,
                serial: serial,
                marca: marca,
                modelo: modelo,
            },
            callback: (error) => {
                if (error)
                    alert(error);
                this.refresh();
            },
        });
    }
}
