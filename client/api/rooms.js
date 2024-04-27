import { BASE_URL } from "../constants";

export async function getRooms() {
  const res = await fetch(`${BASE_URL}/rooms`);
  const rooms = await res.json();

  const html = await Promise.all(rooms.map(async (room) => {
    const res = await fetch(`${BASE_URL}/prices/${room.ID}`);
    const roomPrices = await res.json();

    return `
      <div class="room-wrapper">
        <h3 class="room-type-title room-type-title_${room.type}">
          <span class="room-type-main-text">${room.type}</span> room
        </h3>
        <div class="room-container">
          <div class="room-image-container room-image-container_${room.type}">
            <img src="${room.room_image}" alt="${room.type} room view" />
          </div>
          <div class="room-description">
            <div class="computer-wrapper">
              <div class="room-type room-type_${room.type}">
                <p class="room-type-text">Computer</p>
              </div>
              <div class="computer-container">
                <div class="computer-img-container">
                  <img src="${room.image}" alt="PC from ${room.type} room"/>
                </div>
                <div class="characteristics-container">
                  <ul class="characteristics-${room.type}">
                    <li>
                      <p class="characteristic-title">Graphic card:</p>
                      <p class="characteristic-subtitle">${room.graphicCard}</p>
                    </li>
                    <li>
                      <p class="characteristic-title">Processor:</p>
                      <p class="characteristic-subtitle">${room.processor}</p>
                    </li>
                    <li>
                      <p class="characteristic-title">Monitor:</p>
                      <p class="characteristic-subtitle">${room.monitor}</p>
                    </li>
                    <li>
                      <p class="characteristic-title">RAM:</p>
                      <p class="characteristic-subtitle">${room.ram}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="prices-wrapper">
              <div class="room-type room-type_${room.type}">
                <p class="room-type-text">Prices</p>
              </div>
              <div class="prices-container">
                ${roomPrices.map(roomPrice => `
                  <div class="price-container price-container_${room.type}">
                    <p class="price-title">${roomPrice.title}</p>
                    <p class="price">${roomPrice.price}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }));

  const roomsContainerNode = document.querySelector('.rooms-container');
  roomsContainerNode.innerHTML = html.join('');
}