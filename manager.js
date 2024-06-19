const Webhook = require('./webhook');

class WebhookOptions {
    constructor(options) {
        // You arent really meant to use this contructor it moreso serves as a type but if you really want to the option is here
        if (options) this = options;
    }
}

class WebhookManager {
    /**
     * 
     * @param {Array<Webhook>} children 
     * @param {WebhookOptions} options
     */
    constructor(children, options) {
        this.children = children;
        this.options = options;

        const rl = {};

        rl.timeSinceHit = 0;
        rl.hitsSinceLimit = 0;
        rl.reset = '';

        this.rateLimiter = rl;
    }

    send(webhook, data) {
        /**
         * @type {Webhook}
        */
        let hook = null;
        if (webhook.link) {
            // Webhook object
            hook = webhook;
        } else {
            // Probably a webhook url
            hook = new Webhook(webhook)
        }

        hook.send(data)
    }
}