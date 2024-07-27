import { useState } from "react";
import { FaPhone, FaWhatsapp, FaAngleDown, FaAngleUp } from "react-icons/fa";
import Swal from "sweetalert2";
import mobile_icon from '../Assets/Logos/mobile-map-icon.png'
import withReactContent from "sweetalert2-react-content";
import 'sweetalert2/src/sweetalert2.scss';

const MySwal = withReactContent(Swal);

export default function Footer() {
  const [formContainer, setFormContainer] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    MySwal.fire({
      title: 'Confirmación',
      text: 'Por favor, confirme que es un humano.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        // Puedes agregar lógica de captcha aquí si tienes una solución captcha
        return new Promise((resolve) => {
          resolve();
        });
      }
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: 'Enviando...',
          text: 'Por favor, espere.',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          onBeforeOpen: () => {
            Swal.showLoading();
          }
        });

        // Enviar los datos del formulario usando fetch
        fetch('https://outletgolosinas.com.ar/admin_flyer/admin_page/admin_mail.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData).toString()
        })
        .then(response => response.text())
        .then(data => {
          Swal.close();
          MySwal.fire({
            title: 'Éxito',
            text: 'El formulario se ha enviado correctamente.',
            icon: 'success'
          });
        })
        .catch((error) => {
          Swal.close();
          MySwal.fire({
            title: 'Error',
            text: 'Hubo un error al enviar el formulario. Por favor, inténtelo nuevamente.',
            icon: 'error'
          });
        });
      }
    });
  };

  return (
    <section className="flex bg-blue-600 flex-col max-sm:px-5 justify-center items-center gap-3 w-full text-white py-5">
      <div className="flex gap-2 max-[780px]:flex-col">
        <section className="flex flex-col justify-center w-full gap-2">
          <article class="flex items-center max-w-[400px] w-full p-4 rounded-lg shadow-lg border-2 gap-2">
            <img aria-hidden="true" alt="location icon" src={mobile_icon} class="w-14 h-14" />
            <div class="flex-1">
              <h2 class="text-lg font-bold text-white">PIEDRA BUENA 6059, GREGORIO DE LAFERRERE</h2>
            </div>
          </article>
          <article class="flex items-center max-w-[400px] w-full p-4 rounded-lg shadow-lg border-2 gap-2">
            <img aria-hidden="true" alt="location icon" src={mobile_icon} class="w-14 h-14" />
            <div class="flex-1">
              <h2 class="text-lg font-bold text-white">VICTORINO DE LA PLAZA 1095, RAFAEL CASTILLO</h2>
            </div>
          </article>
          <article class="flex items-center max-w-[400px] w-full p-4 rounded-lg shadow-lg border-2 gap-2">
            <img aria-hidden="true" alt="location icon" src={mobile_icon} class="w-14 h-14" />
            <div class="flex-1">
              <h2 class="text-lg font-bold text-white">MERCADO CENTRAL LOCAL 61 Y 123, TAPIALES</h2>
            </div>
          </article>
        </section>

        <section className="flex flex-col justify-center w-full gap-2">
          <article class="flex items-center max-w-[400px] w-full gap-2 p-4 rounded-lg shadow-lg border-2">
            <FaWhatsapp className="text-green-500 text-5xl font-bold"/>
            <div class="flex-1">
              <h2 class="text-lg font-bold">GREGORIO DE LAFERRE</h2>
              <p class="text-xl">11-5799-9632</p>
            </div>
          </article>
          <article class="flex items-center max-w-[400px] w-full gap-2 p-4 rounded-lg shadow-lg border-2">
            <FaWhatsapp className="text-green-500 text-5xl font-bold"/>
            <div class="flex-1">
              <h2 class="text-lg font-bold">RAFAEL CASTILLO</h2>
              <p class="text-xl">11-6429-2377</p>
            </div>
          </article>
          <article class="flex items-center max-w-[400px] w-full gap-2 p-4 rounded-lg shadow-lg border-2">
            <FaWhatsapp className="text-green-500 text-5xl font-bold"/>
            <div class="flex-1 flex flex-wrap gap-x-3">
              <h2 class="text-lg font-bold w-full">MERCADO CENTRAL</h2>
              <p class="text-xl">11-2618-0413</p>
              <span className="max-md:hidden">/</span>
              <p class="text-xl">11-5709-2539</p>
            </div>
          </article>
        </section>
      </div>

      {/* Form container */}
      <article className="w-full max-w-[808px] max-[780px]:max-w-[400px] relative py-3 px-5 flex flex-col gap-5 rounded-lg border-2">
        <h1 className="font-bold text-xl text-center">Formulario de contacto</h1>
        {!formContainer ? (
          <FaAngleDown
            onClick={() => setFormContainer(!formContainer)}
            className="absolute w-[100px] max-[780px]:-right-4 cursor-pointer right-4 text-3xl"
          />
        ) : (
          <FaAngleUp
            onClick={() => setFormContainer(!formContainer)}
            className="absolute w-[100px] max-[780px]:-right-4 cursor-pointer right-4 text-3xl"
          />
        )}
        {!formContainer ? (
          <FaAngleDown
            onClick={() => setFormContainer(!formContainer)}
            className="absolute w-[100px] max-[780px]:-left-4 cursor-pointer left-4 text-3xl"
          />
        ) : (
          <FaAngleUp
            onClick={() => setFormContainer(!formContainer)}
            className="absolute w-[100px] max-[780px]:-left-4 cursor-pointer left-4 text-3xl"
          />
        )}
        <form
          onSubmit={handleSubmit}
          className={`${formContainer ? "flex" : "hidden"} flex-col gap-4 items-center text-black rounded-lg`}
        >
          <div className="flex w-full gap-x-2">
            <label htmlFor="name" className="flex w-full">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ingrese su nombre"
                required
                className="border p-2 rounded w-full"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="phone" className="flex w-full">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Ingrese celular (whatsapp)"
                required
                className="border p-2 rounded w-full"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
          </div>

          <label htmlFor="email" className="flex flex-col w-full">
            <input
              type="email"
              id="email"
              placeholder="Ingrese un mail (opcional)"
              name="email"
              className="border p-2 rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="subject" className="flex flex-col w-full">
            <textarea
              id="subject"
              name="subject"
              placeholder="Escriba su motivo de contacto"
              maxLength={400}
              required
              rows="3"
              className="border p-2 rounded"
              value={formData.subject}
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="bg-white text-gray-600 w-full py-2 px-4 rounded hover:bg-blue-400 hover:text-white duration-300"
          >
            Enviar
          </button>
        </form>
      </article>

      <article className="flex flex-col justify-center items-center w-full max-[780px]:max-w-[400px] max-w-[808px] bg-page-gray-light">
        <p className="font-bold text-center p-2 w-full pb-4 border-2 h-10 max-[780px]:h-14 px-5 text-sm rounded-lg">
          LOS PRECIOS ESTAN SUJETOS A MODIFICACION SIN PREVIO AVISO
        </p>
      </article>
    </section>
  );
}
