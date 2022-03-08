module.exports = {
    Plugin: [
        require("postcss-uncss")({
            html: [
                './index.html'
            ]
        })
    ]
}