interface Vino {
  nombre: string;
  descripcion: string;
  imagen: string;
}

const vinos: Vino[] = [ { nombre: "Reserva del Alba",
                            descripcion: "Un vino tinto con notas de cereza, roble y recuerdos de fuego lento.", 
                            imagen: "https://images.unsplash.com/photo-1578684307085-ecf4f722afe8" },
                        { nombre: "Blanco de Luna",
                            descripcion: "Refrescante, frutal y suave como un susurro de medianoche.",
                            imagen: "https://images.unsplash.com/photo-1602524819195-efc3d1f0db8c"},
                        { nombre: "Rosado Silvestre",
                            descripcion: "Ligero, alegre y con la picardía de un beso robado.",
                            imagen: "https://images.unsplash.com/photo-1616488230944-b8ac1b41d2ac"} ];

function cargarVinos(): void { const contenedor = document.getElementById("vinos");
                                    if (!contenedor) return;
                                    
                                    vinos.forEach(vino => { const div = document.createElement("div");
                                                            div.className = "vino";
                                                            div.innerHTML = `
                                                            <img src="${vino.imagen}" alt="${vino.nombre}" />
                                                            <h3>${vino.nombre}</h3>
                                                            <p>${vino.descripcion}</p> `;
                                                            contenedor.appendChild(div); });
                            }

document.addEventListener("DOMContentLoaded", cargarVinos);
