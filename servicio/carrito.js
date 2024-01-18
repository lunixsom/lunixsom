import ModelFactory from '../model/DAO/carrito/carritoFactory.js'
import config from '../config.js'

import { preference } from './pago.js'

preference.create({ body: {
	items: [
		{
			id: '1',
			title: 'Mouse',
			quantity: 1,
			unit_price: 150
		}
	],
    back_urls: {
        "success": `http://localhost:${config.PORT}/api/carrito/mp/feedback`,
        "failure": `http://localhost:${config.PORT}/api/carrito/mp/feedback`,
        "pending": `http://localhost:${config.PORT}/api/carrito/mp/feedback`
    },
    auto_return: "approved",

} }).then(console.log).catch(console.log);


class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerCarrito = async _ => {
        const carrito = await this.model.obtenerCarrito()
        return carrito
    }

    guardarCarrito = async carrito => {
        const carritoGuardado = await this.model.guardarCarrito(carrito)
        return carritoGuardado
    }
}

export default Servicio

