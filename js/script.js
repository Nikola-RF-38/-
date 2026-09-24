// ================== ДАННЫЕ МАШИН ==================
const carsData = [
    { name: "Volvo FH", plate: "А123БВ", mileage: "45 000 км", driver: "Иванов И.И." },
    { name: "КАМАЗ 5490", plate: "В456ГД", mileage: "120 000 км", driver: "Петров П.П." },
    { name: "ГАЗель Next", plate: "Е789ЖЗ", mileage: "15 000 км", driver: "Сидоров С.С." },
    { name: "Scania R440", plate: "И012КЛ", mileage: "89 000 км", driver: "Кузнецов К.К." },
    { name: "MAN TGX", plate: "К345МН", mileage: "60 000 км", driver: "Смирнов А.А." },
    { name: "Ford Transit", plate: "Л678ОП", mileage: "30 000 км", driver: "Морозов Д.Д." }
];

// ================== ОТРИСОВКА МАШИН ==================
const carGrid = document.getElementById('carGrid');
if (carGrid) {
    carsData.forEach(car => {
        const div = document.createElement('div');
        div.className = 'car-item fade-in';
        div.innerHTML = `
            <h4>🚗 ${car.name}</h4>
            <p>🔢 Гос. номер: ${car.plate}</p>
            <p>📏 Пробег: ${car.mileage}</p>
            <p>👤 Водитель: ${car.driver}</p>
        `;
        carGrid.appendChild(div);
    });
}

// ================== МОБИЛЬНОЕ МЕНЮ ==================
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Закрываем при клике на ссылку
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('open'));
    });
}

// ================== ПЛАВНОЕ ПОЯВЛЕНИЕ ==================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));