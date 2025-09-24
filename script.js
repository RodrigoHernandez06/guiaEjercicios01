document.addEventListener('DOMContentLoaded', () => {
  const planes = [
    {
      nombre: "BASICO",
      precio: "$9.99",
      slogan: "Ideal para empezar",
      caracteristicas: [
        "1 usuario",
        "5 GB de almacenamiento",
        "Soporte básico",
        "Acceso limitado"
      ]
    },
    {
      nombre: "INTERMEDIO",
      precio: "$19.99",
      slogan: "Perfecto para equipos pequeños",
      caracteristicas: [
        "Hasta 5 usuarios",
        "50 GB de almacenamiento",
        "Soporte prioritario",
        "Acceso a funciones extra"
      ]
    },
    {
      nombre: "AVANZADO",
      precio: "$29.99 ",
      slogan: "Para empresas y profesionales",
      caracteristicas: [
        "Usuarios ilimitados",
        "500 GB de almacenamiento",
        "Soporte premium 24/7",
        "Todas las funciones incluidas"
      ]
    }
  ];

  const contenedor = document.getElementById("caja");

  const renderizarPlanes = () => {
    contenedor.innerHTML = planes.map(plan => `
        <div class="card">
        <div class="title">
          <p class="name">${plan.nombre}</p>
          <div>
          <h1 class="price">${plan.precio}</h1> <p class="mes">/mes</p>
          </div>
          <p class="slogan">${plan.slogan}</p>
        </div>
        <div class="body">
          <ul class="list">
            ${plan.caracteristicas.map(c => `<li>${c}</li>`).join("")}
          </ul>
          <button id="boton">Seleccionar</button>
        </div>
        </div>
      `).join("");
  };

  renderizarPlanes();
});
