
const WHATSAPP_CHAT_LINK="https://api.whatsapp.com/message/WKT5HILUASINP1?autoload=1&app_absent=0";
const IMG={
 smash:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
 wings:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85",
 pizza:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
 fries:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
 grilled:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
 chicken:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
 sides:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
 combo:"https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=85"
};
const products=[
{id:1,name:"Vicio",category:"Smash",price:3,image:IMG.smash,description:"Pan brioche, 100 g de carne, mozzarella, cebolla caramelizada, pepinillo y tocino. Incluye papas y cebolla caramelizada."},
{id:2,name:"Bacon",category:"Smash",price:3.75,image:IMG.smash,description:"Pan, 100 g de carne, mozzarella, salsa bacon, dos tiras de tocino, pepinillo y salsas."},
{id:3,name:"Adictiva con Pretzel",category:"Smash",price:4.25,image:IMG.smash,description:"Pan de papa, 100 g de carne, cheddar, cebolla caramelizada, pepinillo y tocino."},
{id:4,name:"Adictiva con Vainiquilla",category:"Smash",price:4.25,image:IMG.smash,description:"Pan de papa, 100 g de carne, cheddar, cebolla caramelizada, pepinillo y tocino."},
{id:5,name:"Anillada",category:"Smash",price:3.5,image:IMG.smash,description:"Pan dorado, tres aros de cebolla, cebolla caramelizada, 100 g de carne, cheddar y toppings de tocino. Incluye papas."},
{id:6,name:"Viciosa Doble",category:"Smash",price:4,image:IMG.smash,description:"Pan dorado, 200 g de carne, cheddar, cebolla caramelizada, pepinillo y tocino."},
{id:7,name:"H-Awaiana",category:"Smash",price:3.75,image:IMG.smash,description:"Pan dorado, 100 g de carne, cheddar, piña, cebolla caramelizada, pepinillo y tocino."},
{id:8,name:"Sobredosis de Carne",category:"Smash",price:4,image:IMG.smash,description:"Pan dorado, 100 g de carne, mozzarella, cebolla caramelizada, pepinillo, salsa ranch y salsa chipotle."},
{id:9,name:"Tradicional",category:"Smash",price:3.5,image:IMG.smash,description:"Pan brioche, carne, mozzarella, lechuga, tomate, cebolla y huevo frito."},
{id:10,name:"Dosis de Pollo",category:"Smash",price:4,image:IMG.chicken,description:"Pan dorado, 120 g de pollo, salsa ranch, salsa chipotle y pepinillo."},
{id:11,name:"Adictiva con Cheddar",category:"Smash",price:6,image:IMG.smash,description:"Pan pretzel, 100 g de carne, cheddar, cebolla caramelizada, pepinillo, cheddar y toppings de tocino."},
{id:12,name:"Hero Smash",category:"Smash",price:6,image:IMG.smash,description:"Hero Smash. Salsas cheddar +$2,00. Doble carne +$1,00."},
{id:13,name:"5 Alitas",category:"Alitas",price:4.25,image:IMG.wings,description:"5 alitas con papas y salsas. Incluye 2 salsas opcionales."},
{id:14,name:"10 Alitas",category:"Alitas",price:8.5,image:IMG.wings,description:"10 alitas con papas y salsas. Incluye 2 salsas opcionales."},
{id:15,name:"15 Alitas",category:"Alitas",price:12.75,image:IMG.wings,description:"15 alitas con papas y salsas. Incluye 3 salsas opcionales."},
{id:16,name:"20 Alitas",category:"Alitas",price:17,image:IMG.wings,description:"20 alitas con papas y salsas. Incluye 4 salsas opcionales."},
{id:17,name:"25 Alitas",category:"Alitas",price:21.25,image:IMG.wings,description:"25 alitas con papas y salsas. Incluye 5 salsas opcionales."},
{id:18,name:"Alita adicional",category:"Alitas",price:.85,image:IMG.wings,description:"Unidad adicional de chicken wings."},
{id:19,name:"Pizza de Peperoni Clásica",category:"Pizzas",price:2.5,image:IMG.pizza,description:"Masa italiana, tomate, queso gratinado, peperoni y orégano."},
{id:20,name:"Pizza Mixta — Doble Sabor",category:"Pizzas",price:2.5,image:IMG.pizza,description:"Masa italiana, tomate, mozzarella gratinada, jamón de primera, peperoni y orégano."},
{id:21,name:"Pizza Hawaiana",category:"Pizzas",price:3,image:IMG.pizza,description:"Masa italiana, tomate, mozzarella gratinada, jamón de primera y orégano."},
{id:22,name:"Pizza Mixta — Triple Sabor",category:"Pizzas",price:3,image:IMG.pizza,description:"Masa italiana, tomate, mozzarella gratinada, jamón de primera, peperoni, piña y orégano."},
{id:23,name:"Chicken Tenders",category:"Extras",price:null,image:IMG.chicken,description:"Porción de papas, orégano, 3 tiras de pollo, 2 rebanadas de pan brioche, salsa rosada y salsa ranch. Precio no visible en el PDF."},
{id:24,name:"Promo de Viciosas",category:"Combos",price:6.2,image:IMG.combo,description:"Promoción de viciosas. Consulta los componentes exactos al confirmar."},
{id:25,name:"Promo de Adictivas",category:"Combos",price:8.9,image:IMG.combo,description:"Promoción de adictivas. Consulta los componentes exactos al confirmar."},
{id:26,name:"Promo de Wings",category:"Combos",price:10,image:IMG.wings,description:"Promoción de wings según la carta."},
{id:27,name:"Promo Wings — 15 + 5 alitas gratis",category:"Combos",price:14,image:IMG.wings,description:"Combo wings según la carta."},
{id:28,name:"Promo Trío",category:"Combos",price:14,image:IMG.combo,description:"Promo trío según la presentación del menú."},
{id:29,name:"Promo de El Pepe",category:"Combos",price:5.25,image:IMG.pizza,description:"Promoción El Pepe según la carta."},
{id:30,name:"Pizzaditas",category:"Combos",price:10,image:IMG.pizza,description:"Promoción de pizzaditas según la carta."},
{id:31,name:"Promo alitas: paga 6 y lleva 8",category:"Combos",price:5.1,image:IMG.wings,description:"Promoción de miércoles. 3 salsas opcionales."},
{id:32,name:"Promo alitas: paga 8 y lleva 12",category:"Combos",price:6.8,image:IMG.wings,description:"Promoción de miércoles. 3 salsas opcionales."},
{id:33,name:"Promo alitas: paga 12 y lleva 16",category:"Combos",price:10.2,image:IMG.wings,description:"Promoción de miércoles. 4 salsas opcionales."},
{id:34,name:"Promo alitas: paga 16 y lleva 20",category:"Combos",price:13.6,image:IMG.wings,description:"Promoción de miércoles. 5 salsas opcionales."},
{id:35,name:"Salchicha",category:"Extras",price:.5,image:IMG.grilled,description:"1 salchicha."},
{id:36,name:"Papas fritas — BP",category:"Extras",price:1,image:IMG.fries,description:"Porción de papas fritas, tamaño BP."},
{id:37,name:"Papas fritas — BM",category:"Extras",price:1.5,image:IMG.fries,description:"Porción de papas fritas, tamaño BM."},
{id:38,name:"Papas fritas — BG",category:"Extras",price:2,image:IMG.fries,description:"Porción de papas fritas, tamaño BG."},
{id:39,name:"Pollo frito — PP",category:"Extras",price:1.25,image:IMG.chicken,description:"1 presa de pollo frito, tamaño PP."},
{id:40,name:"Pollo frito — PG",category:"Extras",price:1.5,image:IMG.chicken,description:"1 presa de pollo frito, tamaño PG."},
{id:41,name:"Huevo frito",category:"Extras",price:.5,image:IMG.sides,description:"1 huevo frito."},
{id:42,name:"Toppings de tocino",category:"Extras",price:1,image:IMG.grilled,description:"Porción de toppings de tocino."},
{id:43,name:"Cheddar con tocino",category:"Extras",price:2,image:IMG.fries,description:"Acompáñalo con tus papas o smash."},
{id:44,name:"Inyección de cheddar",category:"Extras",price:1,image:IMG.smash,description:"Extra de cheddar."},
{id:45,name:"Maduro con queso",category:"Extras",price:1.5,image:IMG.sides,description:"Maduro con queso gratinado."},
{id:46,name:"Patacones con queso",category:"Extras",price:1.5,image:IMG.sides,description:"7 patacones con queso gratinado."},
{id:47,name:"Morito de choclo",category:"Extras",price:4,image:IMG.sides,description:"Porción de risotto de choclo, chicloso y cremoso."},
{id:48,name:"Morito de lenteja",category:"Extras",price:4,image:IMG.sides,description:"Porción de risotto de lenteja, chicloso y cremoso."},
{id:49,name:"Proteína adicional",category:"Extras",price:2,image:IMG.grilled,description:"Opciones indicadas: pollo, chuleta, costilla o carne."},
{id:50,name:"Chuzo parrillero",category:"Extras",price:.75,image:IMG.grilled,description:"Chuzo parrillero."},
{id:51,name:"Pechuga asada con moro",category:"Parrillas",price:7,image:IMG.grilled,description:"Pechuga asada con moro de lenteja o moro de choclo. La carta muestra $7,00."},
{id:52,name:"Costilla de cerdo con moro",category:"Parrillas",price:9,image:IMG.grilled,description:"Costilla de cerdo con moro de lenteja o moro de choclo. La carta muestra $9,00."},
{id:53,name:"Chicken Tenders (porción)",category:"Parrillas",price:null,image:IMG.chicken,description:"La carta no muestra un precio legible para esta porción. Consultar."},
{id:54,name:"Pechuga asada + patacones/papas y ensalada",category:"Parrillas",price:2,image:IMG.grilled,description:"Acompañamiento indicado en la carta: patacones o papas fritas y ensalada. Precio que aparece junto a la opción: $2,00; confirmar si es adicional."},
{id:55,name:"Pechuga asada + arroz con menestra",category:"Parrillas",price:null,image:IMG.grilled,description:"La carta muestra dos valores $2,50 / $3,50 para arroz con menestra. Confirmar cuál corresponde al tamaño."},
{id:56,name:"Costilla + patacones/papas y ensalada",category:"Parrillas",price:2.5,image:IMG.grilled,description:"Acompañamiento indicado en la carta: patacones o papas fritas y ensalada. Precio que aparece junto a la opción: $2,50; confirmar si es adicional."},
{id:57,name:"Costilla + arroz con menestra",category:"Parrillas",price:null,image:IMG.grilled,description:"La carta muestra dos valores $3,50 / $5,00 para arroz con menestra. Confirmar cuál corresponde al tamaño."}
];
let cart=[];
const money=v=>"$"+Number(v).toFixed(2);
const menuGrid=document.getElementById("menuGrid");
const cartItems=document.getElementById("cartItems");
const deliveryMode=document.getElementById("deliveryMode");
const deliveryZone=document.getElementById("deliveryZone");
const deliveryZoneWrap=document.getElementById("deliveryZoneWrap");
const fees={florida:2,urdesa:3,centro:4};
function deliveryInfo(){
 if(deliveryMode.value!=="delivery")return {label:"Retiro en el local",cost:0,known:true};
 if(deliveryZone.value==="near")return {label:"Lugares cerca: $0,75–$1,00 (confirmar)",cost:null,known:false};
 const cost=fees[deliveryZone.value]??0;
 const labels={florida:"Florida Norte",urdesa:"Urdesa",centro:"Centro de la ciudad"};
 return {label:(labels[deliveryZone.value]||"Delivery")+" — "+money(cost),cost,known:true};
}
function renderMenu(category="Todos"){
 const visible=category==="Todos"?products:products.filter(p=>p.category===category);
 if(category==="Bebidas"){
  menuGrid.innerHTML='<div class="menu-empty"><h3>Bebidas y cócteles</h3><p>La carta incluye una sección de bebidas, pero los nombres y precios aparecen cubiertos en el PDF. Consulta disponibilidad por WhatsApp.</p><a class="button button-primary" href="'+WHATSAPP_CHAT_LINK+'" target="_blank" rel="noopener">CONSULTAR DISPONIBILIDAD ↗</a></div>';
  return;
 }
 menuGrid.innerHTML=visible.map(p=>'<article class="menu-card"><img src="'+p.image+'" alt="'+p.name+'" loading="lazy"><div class="menu-card-body"><div class="menu-card-top"><h3>'+p.name+'</h3><span class="price">'+(p.price===null?"Consultar":money(p.price))+'</span></div><p>'+p.description+'</p>'+(p.price===null?'<a class="add-button consult-button" href="'+WHATSAPP_CHAT_LINK+'" target="_blank" rel="noopener">CONSULTAR POR WHATSAPP ↗</a>':'<button class="add-button" data-add="'+p.id+'" type="button">+ AGREGAR AL PEDIDO</button>')+'</div></article>').join("");
}
function renderCart(){
 const count=cart.reduce((s,i)=>s+i.qty,0);
 const subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0);
 const delivery=deliveryInfo();
 const total=subtotal+(delivery.known?delivery.cost:0);
 document.getElementById("cartCount").textContent=count;
 document.getElementById("cartItemsLabel").textContent=count+" productos";
 document.getElementById("cartSubtotal").textContent=money(subtotal);
 document.getElementById("deliveryCost").textContent=delivery.known?money(delivery.cost):"Por confirmar";
 document.getElementById("cartTotal").textContent=delivery.known?money(total):money(subtotal)+" + delivery";
 if(!cart.length){cartItems.innerHTML='<p class="empty-cart">Todavía no agregas productos.</p>';return;}
 cartItems.innerHTML=cart.map(item=>'<div class="cart-row"><div><strong>'+item.name+'</strong><small>'+money(item.price)+' c/u · '+money(item.price*item.qty)+'</small></div><div class="quantity-controls"><button type="button" data-minus="'+item.id+'" aria-label="Restar">−</button><b>'+item.qty+'</b><button type="button" data-plus="'+item.id+'" aria-label="Sumar">+</button><button type="button" data-remove="'+item.id+'" aria-label="Quitar producto">×</button></div></div>').join("");
}
menuGrid.addEventListener("click",event=>{
 const button=event.target.closest("[data-add]");if(!button)return;
 const product=products.find(p=>p.id===Number(button.dataset.add));if(!product)return;
 const existing=cart.find(i=>i.id===product.id);
 if(existing)existing.qty++;else cart.push({...product,qty:1});
 renderCart();playUiSound("add");
});
cartItems.addEventListener("click",event=>{
 const b=event.target.closest("button");if(!b)return;
 const id=Number(b.dataset.plus||b.dataset.minus||b.dataset.remove);
 const item=cart.find(p=>p.id===id);if(!item)return;
 if(b.dataset.plus)item.qty++;
 if(b.dataset.minus)item.qty--;
 if(b.dataset.remove||item.qty<=0)cart=cart.filter(p=>p.id!==id);
 renderCart();playUiSound("tap");
});
document.getElementById("categoryTabs").addEventListener("click",event=>{
 const button=event.target.closest("button[data-category]");if(!button)return;
 document.querySelectorAll(".category-tabs button").forEach(b=>b.classList.toggle("active",b===button));
 renderMenu(button.dataset.category);playUiSound("tap");
});
deliveryMode.addEventListener("change",()=>{
 deliveryZoneWrap.hidden=deliveryMode.value!=="delivery";
 renderCart();
});
deliveryZone.addEventListener("change",renderCart);
document.getElementById("orderForm").addEventListener("submit",event=>{
 event.preventDefault();
 const message=document.getElementById("formMessage");
 if(!cart.length){message.textContent="Agrega al menos un producto antes de enviar tu pedido.";return;}
 const name=document.getElementById("customerName").value.trim();
 const address=document.getElementById("customerAddress").value.trim();
 const reference=document.getElementById("customerReference").value.trim();
 const notes=document.getElementById("customerNotes").value.trim();
 const payment=document.getElementById("paymentMethod").value;
 const delivery=deliveryInfo();
 if(!name||!address){message.textContent="Completa tu nombre y dirección.";return;}
 const lines=cart.map(i=>"• "+i.name+" x"+i.qty+" — "+money(i.price*i.qty)).join("\n");
 const subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0);
 const total=delivery.known?money(subtotal+delivery.cost):money(subtotal)+" + delivery por confirmar";
 const textMessage="¡Hola! Quiero realizar este pedido en Houfetts Grill:\n\n"+lines+"\n\n*Subtotal:* "+money(subtotal)+"\n*Entrega:* "+delivery.label+"\n*Total estimado:* "+total+"\n\n*Nombre:* "+name+"\n*Dirección:* "+address+"\n*Referencia:* "+(reference||"No especificada")+"\n*Notas:* "+(notes||"Ninguna")+"\n*Forma de pago:* "+payment+"\n\n¿Me ayudan a confirmar disponibilidad y el total final?";
 message.textContent="Se abrirá WhatsApp. Revisa el resumen y envíalo para confirmar tu pedido.";
 const summary=document.createElement("textarea");summary.value=textMessage;summary.readOnly=true;summary.className="order-summary-copy";summary.setAttribute("aria-label","Resumen del pedido para copiar");message.insertAdjacentElement("afterend",summary);summary.focus();summary.select();
 window.open(WHATSAPP_CHAT_LINK,"_blank","noopener");playUiSound("add");
});
const menuToggle=document.getElementById("menuToggle");
const mainNav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));playUiSound("tap");});
mainNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mainNav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
renderMenu();renderCart();
/* Interface sounds are opt-in and only play after the visitor enables them. */
let soundEnabled=false;let audioContext;
function playUiSound(kind="tap"){
 if(!soundEnabled)return;
 try{
  audioContext ||= new (window.AudioContext||window.webkitAudioContext)();
  if(audioContext.state==="suspended")audioContext.resume();
  const oscillator=audioContext.createOscillator(),gain=audioContext.createGain();
  oscillator.type="sine";oscillator.frequency.value=kind==="add"?660:440;
  gain.gain.setValueAtTime(.035,audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001,audioContext.currentTime+.085);
  oscillator.connect(gain);gain.connect(audioContext.destination);oscillator.start();oscillator.stop(audioContext.currentTime+.085);
 }catch(e){}
}
const soundToggle=document.getElementById("soundToggle");
soundToggle.addEventListener("click",()=>{soundEnabled=!soundEnabled;soundToggle.setAttribute("aria-pressed",String(soundEnabled));soundToggle.innerHTML=soundEnabled?"♫ <span>Sonido activado</span>":"♫ <span>Sonido apagado</span>";if(soundEnabled)playUiSound("tap");});
if("IntersectionObserver" in window){
 const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");reveal.unobserve(e.target);}}),{threshold:.1});
 document.querySelectorAll(".intro,.menu-section,.order-section,.location-section,.social-section,.legal-section").forEach(s=>{s.classList.add("reveal-on-scroll");reveal.observe(s);});
 const links=[...document.querySelectorAll("#mainNav .nav-link")];
 const sections=[...document.querySelectorAll("main section[id],#privacidad,#redes")];
 const active=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id));}),{rootMargin:"-28% 0px -62% 0px"});
 sections.forEach(s=>active.observe(s));
}
