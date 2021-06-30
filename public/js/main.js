Notification.requestPermission(status => {
    console.log('Notification permission status:', status);
});

if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(reg => {

        const options = {
            body: 'First notification!',
            // icon: 'images/notification-flat.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            },
            actions: [
                {
                    action: 'explore', title: 'Go to the site',
                    icon: 'images/checkmark.png'
                },
                {
                    action: 'close', title: 'Close the notification',
                    icon: 'images/xmark.png'
                },
            ]

            // TODO 2.5 - add actions to the notification

            // TODO 5.1 - add a tag to the notification

        };

        reg.showNotification('Hello world!', options);
    });
}