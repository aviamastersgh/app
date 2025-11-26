// push-service-worker.js

const ONE_HOUR = 60 * 60 * 1000;
const ONE_DAY = 24 * 60 * 60 * 1000;
const DB_NAME = 'push-db';
const LANDING_URL = 'https://1wgcmt.com/v3/3245/landing-universal-timer?p=6i9o&utm_source=push'; 

// --- Сообщения для сценария (ТОЛЬКО НА РУССКОМ, как запрошено) ---
const CRM_MESSAGES = {
    // 1 час после подписки
    '1h_registered': [
        {
            title: "⏳ Ваш приветственный бонус на исходе!",
            body: "Вы уже зарегистрировались? Быстрее заберите свой бонус, пока он не сгорел. Не упускайте возможность!",
            tag: "1h_reg_reminder"
        },
        {
            title: "🔥 Бонус ждет!",
            body: "Не откладывайте регистрацию! Ваш множитель депозита активен всего несколько часов.",
            tag: "1h_reg_bonus"
        }
    ],
    // 6 часов после подписки (фокусируемся на депозите)
    '6h_deposit': [
        {
            title: "💰 Активируйте свой первый депозит!",
            body: "Ваш приветственный бонус +500% станет активным, как только вы внесете первый депозит. Мы ждем!",
            tag: "6h_depo_offer"
        },
        {
            title: "⚡️ Секретный промокод внутри!",
            body: "Используйте код KOFI75 при первом пополнении и получите в 5 раз больше на счет!",
            tag: "6h_depo_promo"
        }
    ],
    // 1 день (первый возврат)
    '1d_return': [
        {
            title: "👋 Мы скучали!",
            body: "Прошел день, а вы не играли? Заходите, вас ждет персональный бонус на игру Aviator!",
            tag: "1d_return_game"
        },
        {
            title: "🎁 Ежедневный подарок",
            body: "Ваши бесплатные вращения доступны! Зайдите, чтобы активировать их.",
            tag: "1d_daily_gift"
        }
    ],
    // 3 дня (установка приложения)
    '3d_app': [
        {
            title: "📲 Наш секрет успеха:",
            body: "Установите приложение для стабильной работы и мгновенных выводов. Скачать APK.",
            tag: "3d_app_install"
        }
    ],
    // 7 дней (новые игры, возврат)
    '7d_new_game': [
        {
            title: "🆕 Свежие игры уже здесь!",
            body: "Попробуйте новую игру 'Tower Rush' с увеличенным коэффициентом выплат на этой неделе!",
            tag: "7d_new_game"
        }
    ]
};


// --------------------------------------------------------
// ЛОГИКА CRM-СЦЕНАРИЯ
// --------------------------------------------------------

function showCRMNotification(key) {
    const messages = CRM_MESSAGES[key];
    if (!messages || messages.length === 0) return;

    const message = messages[Math.floor(Math.random() * messages.length)];

    self.registration.showNotification(message.title, {
        body: message.body,
        icon: '/android-icon-192x192.png',
        tag: message.tag, 
        data: {
            url: LANDING_URL 
        }
    });
}

/**
 * Проверяет, какие уведомления по сценарию пора отправить.
 */
function checkAndTriggerCRM() {
    return new Promise(async (resolve) => {
        // Проверяем, было ли время регистрации сохранено
        const registrationTime = await getFlag('registration_time');
        if (!registrationTime) return resolve(); 

        const now = Date.now();
        const elapsed = now - registrationTime;
        
        // Сценарии: [Прошедшее время в ms, Ключ сообщения, Ключ флага]
        const checks = [
            [ONE_HOUR, '1h_registered', 'sent_1h'],
            [6 * ONE_HOUR, '6h_deposit', 'sent_6h'],
            [ONE_DAY, '1d_return', 'sent_1d'],
            [3 * ONE_DAY, '3d_app', 'sent_3d'],
            [7 * ONE_DAY, '7d_new_game', 'sent_7d']
        ];
        
        for (const [timeThreshold, messageKey, flagKey] of checks) {
            const hasSent = await getFlag(flagKey);

            // Проверяем: 
            // 1. Прошло ли достаточно времени (elapsed >= timeThreshold)
            // 2. Не прошло ли слишком много времени (для предотвращения отправки 1h пуша через 2 дня)
            // 3. Было ли уведомление уже отправлено
            if (elapsed >= timeThreshold && elapsed < timeThreshold + ONE_HOUR && !hasSent) {
                showCRMNotification(messageKey);
                await setFlag(flagKey, true);
                // После первого успешного срабатывания за цикл - выходим
                return resolve(); 
            }
        }

        resolve();
    });
}


// --------------------------------------------------------
// ЛОГИКА PUSH API И ХРАНЕНИЯ (Имитация)
// --------------------------------------------------------

// Обработчик сообщения от клиента (index.html)
self.addEventListener('message', function(event) {
    if (event.data && event.data.action === 'SET_REGISTRATION_TIME') {
        getFlag('registration_time').then(time => {
            if (!time) {
                // Устанавливаем время только один раз при первой подписке
                setFlag('registration_time', event.data.time);
                console.log('CRM Start Time Saved:', new Date(event.data.time));
            }
        });
    }
});

// Обработчик события 'push' (от внешнего сервера)
self.addEventListener('push', function(event) {
    const data = event.data.json ? event.data.json() : { title: 'Notification', body: 'New Update' };
    const options = {
        body: data.body,
        icon: data.icon || '/android-icon-192x192.png',
        data: { url: data.url || LANDING_URL }
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
});

// Обработчик события 'notificationclick'
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    const urlToOpen = event.notification.data.url;
    event.waitUntil(clients.openWindow(urlToOpen));
});


// Упрощенные функции для установки и получения флагов с использованием Cache API
async function setFlag(key, value) {
    return self.caches.open(DB_NAME).then(cache => {
        const json = { value: value, timestamp: Date.now() };
        const response = new Response(JSON.stringify(json), { headers: { 'Content-Type': 'application/json' } });
        return cache.put(key, response);
    });
}

async function getFlag(key) {
    return self.caches.open(DB_NAME).then(cache => {
        return cache.match(key).then(response => {
            if (response) {
                return response.json().then(data => data.value);
            }
            return null;
        });
    });
}


// --------------------------------------------------------
// ЛОГИКА АКТИВАЦИИ И СИНХРОНИЗАЦИИ
// --------------------------------------------------------

// 1. При активации/обновлении Service Worker
self.addEventListener('activate', function(event) {
    event.waitUntil(
        // Очищаем старые кэши (если необходимо)
        caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if (key !== DB_NAME) {
                    return caches.delete(key);
                }
            })
        )).then(() => {
            // Регистрируем периодическую синхронизацию (если поддерживается браузером)
            if ('periodicSync' in self.registration) {
                 self.registration.periodicSync.register('crm-check', {
                    minInterval: 24 * 60 * 60 * 1000 // Раз в день
                }).catch(e => console.error("Periodic Sync failed:", e));
            }
        })
    );
});

// 2. Периодическая проверка CRM-сценария
self.addEventListener('periodicsync', function(event) {
    if (event.tag === 'crm-check') {
        // Браузер гарантирует, что Service Worker будет запущен для этой проверки.
        event.waitUntil(checkAndTriggerCRM());
    }
});

// 3. Fallback: Проверка при каждом запросе (когда пользователь заходит на сайт)
self.addEventListener('fetch', function(event) {
    // Выполняем CRM-проверку в фоновом режиме, не блокируя основной запрос
    event.waitUntil(checkAndTriggerCRM());
});