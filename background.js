var clown = "https://media.gab.com/system/reaction_types/images/000/000/005/original/f3671ee770e64718.png"; 
var honk = "https://media.gab.com/system/custom_emojis/images/000/008/162/original/cd90e365395d1541.png";
var rules = [{
    "id" : 15032, 
    "action" : { 
        "type": 
        "redirect", 
        "redirect": {
            "url": honk}
        },
    "condition" : {
        "urlFilter": clown,
        "resourceTypes": ["main_frame", "image"]
    }
}];
chrome.declarativeNetRequest.updateDynamicRules({ "removeRuleIds": [15032] });
chrome.declarativeNetRequest.updateDynamicRules({"addRules": rules});
