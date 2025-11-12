export default class Cl_mDispositivo {
    _id = 0;
    _tipo = "";
    _serial = "";
    _marca = "";
    _modelo = "";
    constructor({ id, tipo, serial, marca, modelo, }) {
        this._id = id;
        this._tipo = tipo;
        this._serial = serial;
        this._marca = marca;
        this._modelo = modelo;
    }
    set id(id) {
        this._id = +id;
    }
    get id() {
        return this._id;
    }
    set tipo(tipo) {
        this._tipo = tipo.trim().toLocaleUpperCase();
    }
    get tipo() {
        return this._tipo;
    }
    set serial(serial) {
        this._serial = serial.trim().toLocaleUpperCase();
    }
    get serial() {
        return this._serial;
    }
    set marca(marca) {
        this._marca = marca.trim().toLocaleUpperCase();
    }
    get marca() {
        return this._marca;
    }
    set modelo(modelo) {
        this._modelo = modelo.trim().toLocaleUpperCase();
    }
    get modelo() {
        return this._modelo;
    }
    toJSON() {
        return {
            id: this.id,
            tipo: this.tipo,
            serial: this.serial,
            marca: this.marca,
            modelo: this.modelo,
        };
    }
}
