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
    <section className="relative flex bg-blue-600 flex-col max-sm:px-5 justify-center items-center gap-3 w-full text-white py-5">
      <div className="flex gap-3 z-10 max-[780px]:flex-col">
        {/*Locations*/}
        <section className="flex flex-col w-full gap-3">
          <a target="_blank" href="https://www.google.com/maps/place/Piedra+Buena+6059,+B1757BRU+Gregorio+de+Laferrere,+Provincia+de+Buenos+Aires/@-34.7479216,-58.5855061,17z/data=!4m6!3m5!1s0x95bcc5a4fefa92a9:0x99f7dbdacc71f017!8m2!3d-34.7479303!4d-58.585655!16s%2Fg%2F11fz963qk0?entry=ttu" className="flex hover:scale-105 duration-300 items-center max-w-[400px] w-full p-4 rounded-lg shadow-lg border-2 gap-2">
            <img aria-hidden="true" alt="location icon" src={mobile_icon} className="w-14 h-14" />
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white">PIEDRA BUENA 6059, GREGORIO DE LAFERRERE</h2>
            </div>
          </a>
          <a target="_blank" href="https://www.google.com/maps/place/Victorino+de+la+Pl.+1095,+B1755ACU+Rafael+Castillo,+Provincia+de+Buenos+Aires/@-34.7002434,-58.6314094,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc6c3a62c3bb3:0x9554ebe49da62724!8m2!3d-34.7002479!4d-58.6265385!16s%2Fg%2F11h553td5f?entry=ttu" className="flex hover:scale-105 duration-300 items-center max-w-[400px] w-full p-4 rounded-lg shadow-lg border-2 gap-2">
            <img aria-hidden="true" alt="location icon" src={mobile_icon} className="w-14 h-14" />
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white">VICTORINO DE LA PLAZA 1095, RAFAEL CASTILLO</h2>
            </div>
          </a>
          <a target="_blank" href="https://www.google.com/maps/place/Outlet+Panificados+%26+Golosinas/@-34.7134188,-58.4955985,20.75z/data=!4m14!1m7!3m6!1s0x95bcceddac97550b:0x7d8fff4e7986b7d9!2sBuenos+Aires+Central+Market!8m2!3d-34.7089502!4d-58.500517!16s%2Fg%2F120j3kz8!3m5!1s0x95bccf0be3a590ef:0x53f281e80b285e5f!8m2!3d-34.7133725!4d-58.4952592!16s%2Fg%2F11t29q39g4?entry=ttu" className="flex hover:scale-105 duration-300 items-center max-w-[400px] w-full p-4 rounded-lg shadow-lg border-2 gap-2">
            <img aria-hidden="true" alt="location icon" src={mobile_icon} className="w-14 h-14" />
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white">MERCADO CENTRAL LOCAL 61 PANIFICADOS</h2>
            </div>
          </a>
          <a target="_blank" href="https://www.google.com/maps/place/Outlet+Panificados+%26+Golosinas/@-34.7134188,-58.4955985,20.75z/data=!4m14!1m7!3m6!1s0x95bcceddac97550b:0x7d8fff4e7986b7d9!2sBuenos+Aires+Central+Market!8m2!3d-34.7089502!4d-58.500517!16s%2Fg%2F120j3kz8!3m5!1s0x95bccf0be3a590ef:0x53f281e80b285e5f!8m2!3d-34.7133725!4d-58.4952592!16s%2Fg%2F11t29q39g4?entry=ttu" className="flex hover:scale-105 duration-300 items-center max-w-[400px] w-full p-4 rounded-lg shadow-lg border-2 gap-2">
            <img aria-hidden="true" alt="location icon" src={mobile_icon} className="w-14 h-14" />
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white">MERCADO CENTRAL LOCAL 121 GOLOSINAS</h2>
            </div>
          </a>
          <a target="_blank" href="https://www.google.com/maps/place/Guillermo+Marconi+3496,+B1765LEL+Isidro+Casanova,+Provincia+de+Buenos+Aires/@-34.7125326,-58.5959213,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc67bf13fa3b7:0xcb6e74c8058a287!8m2!3d-34.712537!4d-58.5933464?entry=ttu" className="flex hover:scale-105 duration-300 items-center max-w-[400px] w-full p-4 rounded-lg shadow-lg border-2 gap-2">
            <img aria-hidden="true" alt="location icon" src={mobile_icon} className="w-14 h-14" />
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white">GUILLERMO MARCONI 3496, ISIDRO CASANOVA</h2>
            </div>
          </a>
          <a target="_blank" href="https://www.google.com/maps/place/Rojas+127,+C1405AAC+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6188714,-58.4445689,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcca3f392e7c1f:0x60c547b136cdc8dd!8m2!3d-34.6188714!4d-58.441994!16s%2Fg%2F11bw44crth?entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D" className="flex hover:scale-105 duration-300 items-center max-w-[400px] w-full p-4 rounded-lg shadow-lg border-2 gap-2">
            <img aria-hidden="true" alt="location icon" src={mobile_icon} className="w-14 h-14" />
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white">ROJAS 127, CABALLITO</h2>
            </div>
          </a>
        </section>

        {/*Whatsapps*/}
        <section className="flex flex-col w-full gap-3">
          <a target="_blank" href="https://wa.me/+5491157999632?text=Hola me comunico desde la pagina de OutletGolosinas." className="flex duration-300 hover:scale-105 items-center max-w-[400px] w-full gap-2 p-4 rounded-lg shadow-lg border-2">
            <FaWhatsapp className="text-green-500 text-5xl font-bold"/>
            <div className="flex-1">
              <h2 className="text-lg font-bold">GREGORIO DE LAFERRE</h2>
              <p className="text-xl">11-5799-9632</p>
            </div>
          </a>
          <a target="_blank" href="https://wa.me/+5491164292377?text=Hola me comunico desde la pagina de OutletGolosinas." className="flex duration-300 hover:scale-105 items-center max-w-[400px] w-full gap-2 p-4 rounded-lg shadow-lg border-2">
            <FaWhatsapp className="text-green-500 text-5xl font-bold"/>
            <div className="flex-1">
              <h2 className="text-lg font-bold">RAFAEL CASTILLO</h2>
              <p className="text-xl">11-6429-2377</p>
            </div>
          </a>
          <a target="_blank" href="https://wa.me/+5491126180413?text=Hola me comunico desde la pagina de OutletGolosinas." className="flex duration-300 hover:scale-105 items-center max-w-[400px] w-full gap-2 p-4 rounded-lg shadow-lg border-2">
            <FaWhatsapp className="text-green-500 text-5xl font-bold"/>
            <div className="flex-1">
              <h2 className="text-lg font-bold">MERCADO CENTRAL GOLOSINAS</h2>
              <p className="text-xl">11-2618-0413</p>
            </div>
          </a>
          <a target="_blank" href="https://wa.me/+5491157092539?text=Hola me comunico desde la pagina de OutletGolosinas." className="flex duration-300 hover:scale-105 items-center max-w-[400px] w-full gap-2 p-4 rounded-lg shadow-lg border-2">
            <FaWhatsapp className="text-green-500 text-5xl font-bold"/>
            <div className="flex-1">
              <h2 className="text-lg font-bold">MERCADO CENTRAL PANIFICADOS</h2>
              <p className="text-xl">11-5709-2539</p>
            </div>
          </a>
        </section>
      </div>

      {/* Form container */}
      <article className="w-full z-10 max-w-[808px] max-[780px]:max-w-[400px] relative py-3 px-5 flex flex-col gap-5 rounded-lg border-2">
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

      <article className="flex z-10 flex-col justify-center items-center w-full max-[780px]:max-w-[400px] max-w-[808px] bg-page-gray-light">
        <p className="font-bold text-center p-2 w-full pb-4 border-2 h-10 max-[780px]:h-14 px-5 text-sm rounded-lg">
          LOS PRECIOS ESTAN SUJETOS A MODIFICACION SIN PREVIO AVISO
        </p>
      </article>

      <div className="flex z-0 text-transparent select-none absolute flex-wrap w-full h-full">
        <p>OUTLET</p>
        <p>PANIFICADOS</p>
        <p>GOLOSINAS</p>
        <p>BIMBO</p>
        <p>OUTLET</p>
        <p>PANIFICADOS</p>
        <p>GOLOSINAS</p>
        <p>BIMBO</p>
        <p>OUTLET</p>
        <p>PANIFICADOS</p>
        <p>GOLOSINAS</p>
        <p>BIMBO</p>
        <p>OUTLET</p>
        <p>PANIFICADOS</p>
        <p>GOLOSINAS</p>
        <p>BIMBO</p>
        <p>OUTLET</p>
        <p>PANIFICADOS</p>
        <p>GOLOSINAS</p>
        <p>BIMBO</p>
        <p>OUTLET</p>
        <p>PANIFICADOS</p>
        <p>GOLOSINAS</p>
        <p>BIMBO</p>
        <p>OUTLET</p>
        <p>PANIFICADOS</p>
        <p>GOLOSINAS</p>
        <p>BIMBO</p>
        <p>OUTLET</p>
        <p>PANIFICADOS</p>
        <p>GOLOSINAS</p>
        <p>BIMBO</p>
        <p>OUTLET</p>
        <p>PANIFICADOS</p>
        <p>GOLOSINAS</p>
        <p>BIMBO</p>
        <p>OUTLET</p>
        <p>PANIFICADOS</p>
        <p>GOLOSINAS</p>
        <p>BIMBO</p>
        <p>OUTLET</p>
        <p>PANIFICADOS</p>
        <p>GOLOSINAS</p>
        <p>BIMBO</p>
        <p>OUTLET</p>
        <p>PANIFICADOS</p>
        <p>GOLOSINAS</p>
        <p>BIMBO</p>
        <p>OUTLET</p>
        <p>PANIFICADOS</p>
        <p>GOLOSINAS</p>
        <p>BIMBO</p>
      </div>
    </section>
  );
}
