import { useEffect, useState } from 'react';
import { subscribe } from './notificationMessageBus';

export default function Notification() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const unsubscribe = subscribe((msg) => {
            setMessage(msg);
            setTimeout(() => setMessage(null), 5000);
        });
        return unsubscribe;
    }, []);

    if (!message) return null;

    return (
        <div style={styles.container}>
            <div style={styles.toast}>{message}</div>
        </div>
    );
}

const styles = {
    container: {
        position: 'fixed',
        bottom: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999, // 다른 UI보다 위에
        pointerEvents: 'none', // 클릭 방해 안 되게
    },
    toast: {
        background: '#333',
        maxWidth: '20vw',
        color: '#fff',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        opacity: 0.95,
        animation: 'fadeInOut 5s ease-in-out forwards',
    }
};