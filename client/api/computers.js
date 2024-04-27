import { BASE_URL } from "../constants";

export async function getComputers() {
  const res = await fetch(`${BASE_URL}/computers`);
  const computers = await res.json();

  const html = computers.map((computer) => `
    <div class="computer-wrapper">
      <div class="room-type room-type_${computer.type}">
        <p class="room-type-text">
          <span class="room-type-main-text">${computer.type}</span> room
        </p>
      </div>
      <div class="computer-container">
        <div class="computer-img-container">
          <img src="${computer.image}" alt="PC from ${computer.type} room"/>
        </div>
        <div class="characteristics-container">
          <ul class="characteristics-${computer.type}">
            <li>
              <p class="characteristic-title">Graphic card:</p>
              <p class="characteristic-subtitle">${computer.graphicCard}</p>
            </li>
            <li>
              <p class="characteristic-title">Processor:</p>
              <p class="characteristic-subtitle">${computer.processor}</p>
            </li>
            <li>
              <p class="characteristic-title">Monitor:</p>
              <p class="characteristic-subtitle">${computer.monitor}</p>
            </li>
            <li>
              <p class="characteristic-title">RAM:</p>
              <p class="characteristic-subtitle">${computer.ram}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `).join('');

  const computersContainerNode = document.querySelector('.computers-container');
  computersContainerNode.innerHTML = html;
}