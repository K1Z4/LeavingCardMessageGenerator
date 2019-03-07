new Vue({
    el: "#vue",
    data: {
        name: "",
        output: ""
    },
    methods: {
        generate: function() {
            var message = this.getRandomMessage();
            var match = message.match(/\[([^/\n[\]]+)(?:\/(.+))?\]/)
            if (match) {
                var replacement = this.name ? match[1].replace("{name}", this.name) : (match[2] || "")
                message = message.replace(match[0], replacement)
            }

            this.output = message
        },
        getRandomMessage() {
            return window.messages[this.rng(0, window.messages.length -1)]
        },
        rng(min, max) {
            if (max === undefined) {
                max = min;
                min = 0;
            }
        
            return Math.round(Math.random() * (max-min) + min);
        }
    }
})