self.addEventListener("install", e=>{
  self.skipWaiting();
});

self.addEventListener("activate", e=>{
  clients.claim();
});

self.addEventListener("push", e=>{
  if (!e.data) return;

  const data = e.data.json();

  self.registration.showNotification(data.title,{
    body:data.body,
    icon:"/icon.png"
  });
});
