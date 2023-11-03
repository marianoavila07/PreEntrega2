function filtroYcompra(){
    let productos = [ //1. arreglo con los productos
      {nombre: "camisa", precio: 1000 },
      {nombre: "remera", precio: 2050 },
      {nombre: "zapato", precio: 4400 },
      {nombre: "pantalon", precio: 5645 },
    ];
    
    let precio = Number(prompt("Ingrese un precio maximo por producto")); //2. pedimos el precio que se quiere filtar
    
    let filtrados = productos.filter((item) => item.precio < precio); //3. filtramos los resultados del precio pedido con un filter
    
    if(filtrados.length > 0){ //4. verificamos que hay productos que coincidan con el precio ingresado
    
        filtrados.forEach((item) => { //5. muestra los productos que coinciden con el precio ingresado
      alert(`
        Nombre: ${item.nombre}
        Precio: ${item.precio}
      `);
    });
    }else{//6. en caso de no coincidir arroja el mensaje no hay productos
        alert("No hay productos que coincidan")
    }

    let comprar = prompt("Desea comprar los productos filtrados: si/no");//.7 preguntamos al usuario si desea comprar los productos
    if(comprar.toLowerCase() === "si"){//8. Si desea comprar 
        let total = filtrados.reduce((acum, item) => acum + item.precio, 0);//.9 calculamos el total de los productos 
    alert(`Total a pagar por los productos: ${total}`); //.10 mostramos el total de los productos 
    }else{//11. no desea comprar
        alert("Usted no compro productos");//12. mostramos el mensaje no compro productos
    }
}
filtroYcompra();
