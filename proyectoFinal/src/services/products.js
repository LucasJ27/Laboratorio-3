import { setInLocalStorage } from "../persistence/localStorage";
import { handleGetProductsToStore, handleRenderList } from "../views/store";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import Swal from "sweetalert2";

//guardamos el producto
const acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener('click', ()=>{
    handleSaveOrModifyElements();
});
//funcion de guardar
const handleSaveOrModifyElements = ()=>{
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categoria = document.getElementById("categoria").value;
    let object = null
    if(productoActivo){
        object = {
            ... productoActivo,
            nombre,
            imagen,
            precio,
            categoria
        };
    }else{
     object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria
        };
    }
    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
      });

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
};

//eliminar elemento

export const handleDeleteProduct = ()=>{
    Swal.fire({
        title: "Desea eliminar elemento?",
        text: "Si lo eliminas sera permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el)=>el.id !== productoActivo.id);
            //seteamos el nuevo array
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }else{
            closeModal();
        }
      });
 }