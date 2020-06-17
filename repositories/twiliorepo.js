const Twilio = require('../models/twilio').getTwilioModel;

exports.find = (query, isSingle, is_lean_not_required, select_params, sort_params)=>{
    if(!select_params){
        select_params = {password: false, Salt: false};
    }
    if(select_params == '*'){
        select_params = null;
    }
    
    if(isSingle){
        if(is_lean_not_required){
            return Twilio.findOne(query)
                .select(select_params)
                .sort(sort_params)                
        }
        else{
            return Twilio.findOne(query)
                .select(select_params)
                .sort(sort_params)
                .lean()
        }
    }
    else{
        return Twilio.find(query)
                .select(select_params)
                .sort(sort_params)
                .lean()
    }    
}

exports.update = (query , update , opts ) => {
   return Twilio.update(query , update);
}

exports.create = (txn)=>{
    return Twilio.create(txn);
}