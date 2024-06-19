const axios = require('axios');

/**
 * Represents a Discord webhook.
 * @class
*/
class Webhook {
    /**
     * Creates a new instance of the Webhook class.
     * @constructor
     * @param {string} link - The URL link of the webhook.
     */
    constructor(link) {
        this.link = link;
    }

    /**
     * Sends a message through the webhook.
     * @param {string|object} message - The message to be sent. Can be a string for simple messages or an object for more complex messages.
     * @returns {Promise<void>} - A promise that resolves when the message is sent.
    */
    async send(message) {
        const isObject = typeof message === 'object';
        const data = isObject ? message : { content: message };

        return await axios.post(this.link, data);
    }
}

module.exports = Webhook;