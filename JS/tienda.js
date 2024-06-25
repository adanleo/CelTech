new Vue({
    el: '#app',
    data: {
        celulares: [
            { marca: 'Motorola', modelo: 'Edge 40', precio: 799*1200, imagen: '../Assets/celulares/Motorola_Edge_40.webp', procesador: 'Snapdragon 888', ram: '8GB', memoriaInterna: '128GB', camara: '108MP', bateria: '5000mAh' },
            { marca: 'Motorola', modelo: 'Razr 40 Ultra', precio: 999*1200, imagen: '../Assets/celulares/Motorola_Razr_40.webp', procesador: 'Snapdragon 888+', ram: '12GB', memoriaInterna: '256GB', camara: '108MP + 16MP Ultra-Wide', bateria: '3300mAh' },
            { marca: 'Samsung', modelo: 'A14', precio: 749*1200, imagen: '../Assets/celulares/Samsung_Galaxy_A14_5_G.webp', procesador: 'Exynos 2100', ram: '6GB', memoriaInterna: '128GB', camara: '64MP', bateria: '4500mAh' },
            { marca: 'Samsung', modelo: 'Z Fold', precio: 899*1200, imagen: '../Assets/celulares/Samsung_Galaxy_Z_Fold5.webp', procesador: 'Snapdragon 888', ram: '12GB', memoriaInterna: '256GB', camara: '120MP Telephoto', bateria: '4400mAh' },
            { marca: 'Samsung', modelo: 'A54', precio: 899*1200, imagen: '../Assets/celulares/A54_256_GB.webp', procesador: 'Exynos 9825', ram: '8GB', memoriaInterna: '128GB', camara: '64MP + 12MP Ultra-Wide', bateria: '5000mAh' },
            { marca: 'Samsung', modelo: 'Zflip 5', precio: 899*1200, imagen: '../Assets/celulares/Samsung_Galaxy_Z_Flip5.webp', procesador: 'Snapdragon 888+', ram: '8GB', memoriaInterna: '256GB', camara: '12MP + 12MP Ultra-Wide', bateria: '3300mAh' },
            { marca: 'Xiaomi', modelo: 'Redmi 13C', precio: 899*1200, imagen: '../Assets/celulares/Xiaomi_Redmi_13_C.webp', procesador: 'Snapdragon 680', ram: '6GB', memoriaInterna: '128GB', camara: '50MP + 8MP Ultra-Wide', bateria: '5000mAh' },
            { marca: 'ZTE', modelo: 'Blade A33', precio: 899*1200, imagen: '../Assets/celulares/ZTE_Blade_A33_Plus.webp', procesador: 'Unisoc SC9863A', ram: '2GB', memoriaInterna: '32GB', camara: '8MP', bateria: '3000mAh' }
        ], 
        carrito: [], 
        mostrarCarrito: false
    },
    computed: {
        totalCarrito() {
          return this.carrito.reduce((total, item) => total + item.precio, 0);
        }
      },
      methods: {
        agregarAlCarrito(celular) {
          this.carrito.push(celular);
        },
        quitarDelCarrito(item) {
            const index = this.carrito.findIndex(c => c.modelo === item.modelo);
            if (index !== -1) {
                this.carrito.splice(index, 1);
            }
        }
    }})