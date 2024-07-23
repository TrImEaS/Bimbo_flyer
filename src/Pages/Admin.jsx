import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [alert, setAlert] = useState(false);

  const fetchProducts = async () => {
    const response = await fetch('https://outletgolosinas.com.ar/admin_flyer/admin_page/getProducts.php');
    const data = await response.json();
    return data.products;
  };

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleEdit = (product) => {
    const { ID, MARCA, DESCRIPCION, DESCUENTOS, PRECIO, IMAGEN } = product;

    Swal.fire({
      title: 'Modificar Producto',
      html:
        `<input id="swal-input1" class="swal2-input" value="${MARCA}">` +
        `<input id="swal-input2" class="swal2-input" value="${DESCRIPCION}">` +
        `<input id="swal-input3" class="swal2-input" value="${DESCUENTOS}">` +
        `<input id="swal-input4" class="swal2-input" value="${PRECIO}">` +
        `<input id="swal-input5" type="file" class="swal2-input">`,
      focusConfirm: false,
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const newMarca = document.getElementById('swal-input1').value;
        const newDescripcion = document.getElementById('swal-input2').value;
        const newDescuentos = document.getElementById('swal-input3').value;
        const newPrecio = document.getElementById('swal-input4').value;
        const newImagenFile = document.getElementById('swal-input5').files[0];

        if (
          newMarca === MARCA &&
          newDescripcion === DESCRIPCION &&
          newDescuentos === DESCUENTOS &&
          newPrecio === PRECIO &&
          !newImagenFile
        ) {
          Swal.showValidationMessage('Este producto no recibió modificaciones');
          return false;
        }

        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const updatedProduct = {
              id: ID,
              marca: newMarca,
              descripcion: newDescripcion,
              descuentos: newDescuentos,
              precio: newPrecio,
              imagen: newImagenFile ? reader.result.replace('data:', '').replace(/^.+,/, '') : IMAGEN,
            };

            fetch('https://outletgolosinas.com.ar/admin_flyer/admin_page/setProducts.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedProduct),
            })
              .then(response => response.json())
              .then(data => {
                if (data.status === 'success') {
                  resolve('Producto actualizado correctamente');
                } else {
                  reject(data.message);
                }
              })
              .catch(error => reject(error));
          };

          if (newImagenFile) {
            reader.readAsDataURL(newImagenFile);
          } else {
            reader.onloadend();
          }
        });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡Éxito!',
          text: result.value,
          icon: 'success',
          timer: 3000, // 3 segundos antes de cerrar
          timerProgressBar: true,
          didClose: () => {
            // Actualiza la vista de los productos después de mostrar la alerta
            fetchProducts().then(setProducts);
            setAlert(true)
          },
        });
      }
    }).catch(error => {
      Swal.fire({
        title: 'Error',
        text: error,
        icon: 'error',
      });
    });
  };

  return (
    <div className="flex flex-col items-center gap-3 min-h-screen w-full bg-[#111] text-white py-10">
      {alert ? <p className='h-10 my-5 w-[75%]'>Para ver el cambio de imagen inmediatamente debe de reiniciar la pagina con los siguientes botones: CTRL+SHIFT+R</p> : ''}
      {products.map(product => (
        <div key={product.ID} className="flex items-center gap-3 p-5 bg-gray-800 rounded-sm w-[75%]">
          <img src={product.IMAGEN} alt={product.MARCA} className="w-[45%] h-[200px] object-cover rounded-sm" />
          <div className="flex flex-col gap-2">
            <span><b>Marca:</b> {product.MARCA}</span>
            <span><b>Descripción:</b> {product.DESCRIPCION}</span>
            <span><b>Descuentos:</b> {product.DESCUENTOS == 0 ? 'No tiene' : product.DESCUENTOS}</span>
            <span><b>Precio:</b> ${product.PRECIO}</span>
          </div>
          <button onClick={() => handleEdit(product)} className="ml-auto hover:bg-yellow-300 duration-300 bg-yellow-500 text-black px-2 py-1 rounded-sm">
            Editar
          </button>
        </div>
      ))}
    </div>
  );
}
