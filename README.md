# Task Management API

Basit bir task yönetim API’si geliştirdim. 
Backend tarafında Express.js kullandım ve JWT ile authentication yapısını kurdum.

## Yapılacaklar

- JWT authentication
- Task CRUD işlemleri
- Swagger dokümantasyonu

## Endpointler

- POST /task
- GET /tasks
- GET /tasks/:id
- PUT /tasks/:id
- DELETE /tasks/:id

## Yapay Zeka Kullanılan kısımlar
- Middleware yazarken exportu {} içerisinde yazıpı app.js içerisinde {} olmadan fonksiyon olarak çağırmayı deneyip hata alıyordum çözemeyince yapay zekadan destek aldım

## Proje Kurulumu && Test
```bash
npm install
npm start