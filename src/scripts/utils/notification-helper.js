const NotificationHelper = {
    sendNotification({ title, options }) {
        // mengecek ketersediaan notifikasi di browser
        if(!this._checkAvailability()) {
            console.log('Notification not supported in this browser');
            return;
        }
        // mengecek perizinan notifikasi. jika tidak di izinkan, kirim request
        if(!this._checkPermission()) {
            console.log('User did not yet granted permission');
            this._requestPermission();
            return;
        }
        // menampilkan notifikasi
        this._showNotification({ title, options });
    },

    _checkAvailability() {
        return 'Notification' in window;
    },

    _checkPermission() {
        return Notification.permission === 'granted';
    },

    async _requestPermission() {
        const status = await Notification.requestPermission();

        if(status === 'denied') {
            console.log('Notification Denied');
        }

        if(status === 'default') {
            console.log('Permission closed')
        }
    },

    async _showNotification({ title, options }) {
        const serviceWorkerRegistration = await navigator.serviceWorker.ready;
        serviceWorkerRegistration.showNotification(title, options);
    },
};

export default NotificationHelper;