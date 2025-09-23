document.addEventListener('DOMContentLoaded', () => {
    const planes = [
        {
        nombre: "Básico",
        precio: "$9.99 / mes",
        slogan: "Ideal para empezar",
        caracteristicas: [
          "1 usuario",
          "5 GB de almacenamiento",
          "Soporte básico",
          "Acceso limitado"
        ]
      },
      {
        nombre: "Intermedio",
        precio: "$19.99 / mes",
        slogan: "Perfecto para equipos pequeños",
        caracteristicas: [
          "Hasta 5 usuarios",
          "50 GB de almacenamiento",
          "Soporte prioritario",
          "Acceso a funciones extra"
        ]
      },
      {
        nombre: "Avanzado",
        precio: "$29.99 / mes",
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
          <h2>${plan.nombre}</h2>
          <p class="price">${plan.precio}</p>
          <p class="slogan">${plan.slogan}</p>
          <ul>
            ${plan.caracteristicas.map(c => `<li>${c}</li>`).join("")}
          </ul>
          <button>Seleccionar</button>
        </div>
      `).join("");
    };

    renderizarPlanes();
});
