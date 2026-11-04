const WHATSAPP_CHAT_LINK = "https://api.whatsapp.com/message/WKT5HILUASINP1?autoload=1&app_absent=0"; // Enlace facilitado por el restaurante.
const products = [
  {id:1,name:"Hamburguesa clásica",category:"Hamburguesas",price:5,description:"Hamburguesa con vegetales y acompañamientos.",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"},
  {id:2,name:"Hamburguesa especial",category:"Hamburguesas",price:7,description:"Una opción especial para disfrutar.",image:"https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=800&q=85},
  {id:3,name:"Parrillada",category:"Parrillas",price:12,description:"Selección de carnes a la parrilla.",image:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"},
  {id:4,name:"Carne a la parrilla",category:"Parrillas",price:9,description:"Carne asada para disfrutar.",image:"https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80"},
  {id:5,name:"Papas fritas",category:"Acompañamientos",price:2.5,description:"Papas doradas y crujientes.",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"},
  {id:6,name:"Bebida",category:"Bebidas",price:1.5,description:"Bebida refrescante.",image:"https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80"}
];
let cart = [];
const money = value => "$" + value.toFixed(2);
const menuGrid = document.getElementById("menuGrid");
const cartItems = document.getElementById("cartItems");

function renderMenu(category="Todos"){
  const visible = category==="Todos" ? products : products.filter(p=>p.category===category);
  menuGrid.innerHTML = visible.map(p=>`
    <article class="menu-card">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="menu-card-body">
        <div class="menu-card-top"><h3>${p.name}</h3><span class="price">${money(p.price)}</span></div>
        <p>${p.description}</p>
        <button class="add-button" data-add="${p.id}">+ AGREGAR AL PEDIDO</button>
      </div>
    </article>`).join("");
}
function renderCart(){
  const count = cart.reduce((sum,item)=>sum+item.qty,0);
  const total = cart.reduce((sum,item)=>sum+item.price*item.qty,0);
  document.getElementById("cartCount").textContent=count;
  document.getElementById("cartItemsLabel").textContent=count+" productos";
  document.getElementById("cartTotal").textContent=money(total);
  if(!cart.length){cartItems.innerHTML='<p class="empty-cart">Todavía no agregas productos.</p>';return;}
  cartItems.innerHTML=cart.map(item=>`
    <div class="cart-row">
      <div><strong>${item.name}</strong><small>${money(item.price)} c/u · ${money(item.price*item.qty)}</small></div>
      <div class="quantity-controls">
        <button type="button" data-minus="${item.id}" aria-label="Restar">−</button><b>${item.qty}</b>
        <button type="button" data-plus="${item.id}" aria-label="Sumar">+</button>
        <button type="button" data-remove="${item.id}" aria-label="Quitar producto">×</button>
      </div>
    </div>`).join("");
}
menuGrid.addEventListener("click",event=>{
  const button=event.target.closest("[data-add]");if(!button)return;
  const product=products.find(p=>p.id===Number(button.dataset.add));
  const existing=cart.find(item=>item.id===product.id);
  if(existing)existing.qty++;else cart.push({...product,qty:1});
  renderCart();
});
cartItems.addEventListener("click",event=>{
  const b=event.target.closest("button");if(!b)return;
  const id=Number(b.dataset.plus||b.dataset.minus||b.dataset.remove);
  const item=cart.find(p=>p.id===id);if(!item)return;
  if(b.dataset.plus)item.qty++;
  if(b.dataset.minus)item.qty--;
  if(b.dataset.remove||item.qty<=0)cart=cart.filter(p=>p.id!==id);
  renderCart();
});
document.getElementById("categoryTabs").addEventListener("click",event=>{
  const button=event.target.closest("button[data-category]");if(!button)return;
  document.querySelectorAll(".category-tabs button").forEach(b=>b.classList.toggle("active",b===button));
  renderMenu(button.dataset.category);
});
document.getElementById("orderForm").addEventListener("submit",event=>{
  event.preventDefault();
  const message=document.getElementById("formMessage");
  if(!cart.length){message.textContent="Agrega al menos un producto antes de enviar tu pedido.";return;}
  const name=document.getElementById("customerName").value.trim();
  const address=document.getElementById("customerAddress").value.trim();
  const reference=document.getElementById("customerReference").value.trim();
  const notes=document.getElementById("customerNotes").value.trim();
  if(!name||!address){message.textContent="Completa tu nombre y dirección.";return;}
  const lines=cart.map(item=>`• ${item.name} x${item.qty} — ${money(item.price*item.qty)}`).join("\n");
  const total=cart.reduce((sum,item)=>sum+item.price*item.qty,0);
  const textMessage=`¡Hola! Quiero realizar este pedido en Houfetts Grills:\n\n${lines}\n\n*Total estimado: ${money(total)}*\n\n*Nombre:* ${name}\n*Dirección:* ${address}\n*Referencia:* ${reference||"No especificada"}\n*Notas:* ${notes||"Ninguna"}\n\n¿Me ayudan a confirmar el pedido? `;
  message.textContent="Tu pedido está listo. Copia el resumen y envíalo en el chat de WhatsApp que se abrirá.";
  const summary = document.createElement("textarea");
  summary.value = textMessage;
  summary.readOnly = true;
  summary.className = "order-summary-copy";
  summary.setAttribute("aria-label","Resumen de pedido para copiar");
  message.insertAdjacentElement("afterend", summary);
  summary.focus();
  summary.select();
  window.open(WHATSAPP_CHAT_LINK,"_blank","noopener");
});
const menuToggle=document.getElementById("menuToggle");
const mainNav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
mainNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>mainNav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
renderMenu();renderCart();
/* Optional short interface sounds: only after the visitor enables them. */
let soundEnabled = false;
let audioContext;
function playUiSound(kind="tap"){
  if(!soundEnabled) return;
  try{
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    if(audioContext.state === "suspended") audioContext.resume();
    const oscillator=audioContext.createOscillator();
    const gain=audioContext.createGain();
    oscillator.type="sine";
    oscillator.frequency.value=kind==="add" ? 660 : 440;
    gain.gain.setValueAtTime(0.045,audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001,audioContext.currentTime+0.09);
    oscillator.connect(gain);gain.connect(audioContext.destination);
    oscillator.start();oscillator.stop(audioContext.currentTime+0.09);
  }catch(error){/* Sound remains optional; UI continues without it. */}
}
const soundToggle=document.getElementById("soundToggle");
soundToggle.addEventListener("click",()=>{
  soundEnabled=!soundEnabled;
  soundToggle.setAttribute("aria-pressed",String(soundEnabled));
  soundToggle.innerHTML=soundEnabled ? "♫ <span>Sonido activado</span>" : "♫ <span>Sonido apagado</span>";
  if(soundEnabled) playUiSound("tap");
});
/* Reveal sections gently as they enter the viewport. */
if("IntersectionObserver" in window){
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target);}
    });
  },{threshold:0.12});
  document.querySelectorAll(".intro,.menu-section,.order-section,.location-section,.social-section").forEach(section=>{
    section.classList.add("reveal-on-scroll");revealObserver.observe(section);
  });
}
