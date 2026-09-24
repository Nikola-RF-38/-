// ==================== ОБЩИЕ НАСТРОЙКИ ====================
Chart.defaults.color = '#9CA3AF';
Chart.defaults.font.family = "'Inter', 'Segoe UI', sans-serif";
Chart.defaults.font.size = 13;

const gridColor = 'rgba(255, 255, 255, 0.06)';

// ==================== 1. ГРАФИК ПРОБЕГА ====================
const mileageCtx = document.getElementById('mileageChart');
if (mileageCtx) {
    const gradient = mileageCtx.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(0, 212, 255, 0.6)');
    gradient.addColorStop(1, 'rgba(0, 212, 255, 0.05)');

    new Chart(mileageCtx, {
        type: 'bar',
        data: {
            labels: ['Volvo FH', 'КАМАЗ 5490', 'ГАЗель Next', 'Scania R440', 'MAN TGX', 'Ford Transit'],
            datasets: [{
                label: 'Пробег (км)',
                data: [45000, 120000, 15000, 89000, 60000, 30000],
                backgroundColor: gradient,
                borderColor: '#00D4FF',
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#fff', padding: 20, font: { size: 14, weight: '600' } }
                },
                tooltip: {
                    backgroundColor: '#1E1E1E',
                    titleColor: '#00D4FF',
                    bodyColor: '#fff',
                    borderColor: 'rgba(0, 212, 255, 0.3)',
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: (ctx) => ` ${ctx.parsed.y.toLocaleString('ru-RU')} км`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: gridColor },
                    ticks: {
                        color: '#9CA3AF',
                        callback: (v) => v.toLocaleString('ru-RU')
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#fff', font: { size: 12 } }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart'
            }
        }
    });
}

// ==================== 2. ГРАФИК РАСХОДОВ ====================
const fuelCtx = document.getElementById('fuelChart');
if (fuelCtx) {
    const gradient = fuelCtx.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(124, 58, 237, 0.5)');
    gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');

    new Chart(fuelCtx, {
        type: 'line',
        data: {
            labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            datasets: [{
                label: 'Расходы (руб)',
                data: [12000, 8500, 15200, 9800, 17500, 11000, 13500],
                borderColor: '#7C3AED',
                backgroundColor: gradient,
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#7C3AED',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 9,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#fff', padding: 20, font: { size: 14, weight: '600' } }
                },
                tooltip: {
                    backgroundColor: '#1E1E1E',
                    titleColor: '#7C3AED',
                    bodyColor: '#fff',
                    borderColor: 'rgba(124, 58, 237, 0.4)',
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: (ctx) => ` ${ctx.parsed.y.toLocaleString('ru-RU')} руб`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: gridColor },
                    ticks: {
                        color: '#9CA3AF',
                        callback: (v) => v.toLocaleString('ru-RU') + ' ₽'
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#fff' }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// ==================== 3. ГРАФИК ТО (полярный) ====================
const toCtx = document.getElementById('toChart');
if (toCtx) {
    new Chart(toCtx, {
        type: 'doughnut',
        data: {
            labels: ['Volvo FH', 'КАМАЗ 5490', 'ГАЗель Next', 'Scania R440', 'MAN TGX', 'Ford Transit'],
            datasets: [{
                label: 'До ТО',
                data: [75, 90, 20, 60, 45, 80],
                backgroundColor: [
                    'rgba(0, 212, 255, 0.85)',
                    'rgba(255, 107, 53, 0.85)',
                    'rgba(34, 197, 94, 0.85)',
                    'rgba(124, 58, 237, 0.85)',
                    'rgba(250, 204, 21, 0.85)',
                    'rgba(236, 72, 153, 0.85)'
                ],
                borderColor: '#0A0A0F',
                borderWidth: 4,
                hoverOffset: 12,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#fff',
                        padding: 16,
                        font: { size: 13 },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: '#1E1E1E',
                    titleColor: '#00D4FF',
                    bodyColor: '#fff',
                    borderColor: 'rgba(0, 212, 255, 0.3)',
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: (ctx) => ` ${ctx.parsed}% до ТО`
                    }
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1800,
                easing: 'easeOutQuart'
            }
        }
    });
}