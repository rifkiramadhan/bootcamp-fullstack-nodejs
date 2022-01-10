const Wine = require('../models/Wine');
const WineView = require('../views/WineView');

class WineController {
    static help(){
        WineView.help()
    }

    static wines(){
        const wines = Wine.wines()
        WineView.wines(wines)
    }

    static add(params){
        const feedback = Wine.add(params)
        WineView.message(feedback)
    }   

    static sell(params){
        const feedback = Wine.sell(params)
        WineView.message(feedback)
    }

    static rename(params){
        const feedback = Wine.rename(params)
        WineView.message(feedback)
    }

    static findById(params){
        const feedback = Wine.findById(params)
        WineView.message(feedback)
    }

    static message(msg){
        WineView.message(msg)
    }
}

module.exports = WineController