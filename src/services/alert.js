import { createApp } from 'vue';
import Alert from '../components/Alert.vue';

class AlertService {
  constructor() {
    this.alerts = [];
  }

  show(options) {
    const {
      type = 'info',
      title,
      message,
      duration = 5000,
      autoClose = true,
      closeOnBackdrop = true
    } = options;

    console.log('AlertService.show called with:', options);

    // Create a unique ID for this alert
    const alertId = Date.now() + Math.random();
    
    // Create a container for the alert
    const container = document.createElement('div');
    container.id = `alert-${alertId}`;
    document.body.appendChild(container);

    console.log('Container created:', container);

    try {
      // Create Vue app for this alert
      const app = createApp(Alert, {
        type,
        title,
        message,
        duration,
        autoClose,
        closeOnBackdrop
      });

      console.log('Vue app created');

      // Mount the alert
      app.mount(container);
      
      console.log('Alert mounted to container');

      // Store alert reference
      this.alerts.push({
        id: alertId,
        app,
        container
      });

      // Set up auto-close if enabled
      if (autoClose && duration > 0) {
        setTimeout(() => {
          this.removeAlert(alertId, app, container);
        }, duration);
      }

      return alertId;
    } catch (error) {
      console.error('Error creating alert:', error);
      // Clean up container if there was an error
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
      throw error;
    }
  }

  removeAlert(alertId, app, container) {
    console.log('Removing alert:', alertId);
    
    // Unmount and remove
    if (app) {
      app.unmount();
    }
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
    
    // Remove from alerts array
    this.alerts = this.alerts.filter(alert => alert.id !== alertId);
  }

  // Convenience methods
  info(title, message, duration = 5000) {
    console.log('Showing info alert:', title, message);
    return this.show({ type: 'info', title, message, duration });
  }

  success(title, message, duration = 5000) {
    console.log('Showing success alert:', title, message);
    return this.show({ type: 'success', title, message, duration });
  }

  warning(title, message, duration = 5000) {
    console.log('Showing warning alert:', title, message);
    return this.show({ type: 'warning', title, message, duration });
  }

  error(title, message, duration = 5000) {
    console.log('Showing error alert:', title, message);
    return this.show({ type: 'error', title, message, duration });
  }

  // Close all alerts
  closeAll() {
    this.alerts.forEach(alert => {
      this.removeAlert(alert.id, alert.app, alert.container);
    });
  }
}

// Create singleton instance
const alertService = new AlertService();

export default alertService; 