import Servicio from '../servicio/carrito.js'

class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    obtenerCarrito = async (req,res) => {
        const carrito = await this.servicio.obtenerCarrito()
        res.json(carrito)
    }

    guardarCarrito = async (req,res) => {
        try {
            const carrito = req.body
            const carritoGuardado = await this.servicio.guardarCarrito(carrito)
            res.json(carritoGuardado)
        }
        catch(error) {
            res.json({ errMsg: error.message })
        }
    }

    feedback = async (req,res) => {
        const info = req.query
        console.log(info)

        res.redirect('http://localhost:3000/carrito')
    }
}


export default Controlador