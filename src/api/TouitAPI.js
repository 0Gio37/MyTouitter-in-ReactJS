// get touit
function getTouit (success, error){
    const request = new XMLHttpRequest();
    request.open("GET", "http://touiteur.cefim-formation.org/list?", true);
    request.addEventListener("readystatechange", function(){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                const response = JSON.parse(request.responseText);        
                success(response);             
            } else {
                error();
            }
        } 
    });
    request.send();
}


//post touit
function postTouit(user, message){
    const posted = new XMLHttpRequest();
    posted.open("POST", "http://touiteur.cefim-formation.org/send", true);
    posted.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    posted.addEventListener("readystatechange", function(){
        if (posted.readyState === XMLHttpRequest.DONE){
            if (posted.status != 200){
                console.log("error de requete")
            }
        } 
    });
    posted.send("name="+user+"&message="+message);
}

    //ajout like des touits
    function likeTouit(idIndex){
        let message_id = "message_id="+idIndex;
        const posted = new XMLHttpRequest();
        posted.open("PUT", "http://touiteur.cefim-formation.org/likes/send", true);
        posted.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        posted.send(message_id)
    }

    //remove like des touits
    function removeTouit(idIndex){
        let message_id = "message_id="+idIndex;
            const removed = new XMLHttpRequest();
            removed.open("DELETE", "http://touiteur.cefim-formation.org/likes/remove", true);
            removed.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            removed.send(message_id)
    }
    

//ajout des touits les plus likes
function getBestLikeTouit(success, error){
    const requestBest = new XMLHttpRequest();
    requestBest.open("GET", "http://touiteur.cefim-formation.org/likes/top?count="+ 5, true);
    requestBest.addEventListener("readystatechange", function(){
        if (requestBest.readyState === XMLHttpRequest.DONE){
            if (requestBest.status === 200){
                const response = JSON.parse(requestBest.responseText);
                success(response)
            } else {
                error();
            }
        } 
    });
    requestBest.send();
}

//ajout terme les + cités
function GetTrending (success, error){
    const requestTrend = new XMLHttpRequest();
    requestTrend.open("GET", "http://touiteur.cefim-formation.org/trending", true);
    requestTrend.addEventListener("readystatechange", function(){
        if (requestTrend.readyState === XMLHttpRequest.DONE){
            if (requestTrend.status === 200){
                const response = JSON.parse(requestTrend.responseText);
                success(response)
            } else {
                error();
            }
        } 
    });
    requestTrend.send();
}


//ajout liste influenceurs
function bestInfluent(success, error){
    const requestInf = new XMLHttpRequest();
    requestInf.open("GET", "http://touiteur.cefim-formation.org/influencers?count=5", true);
    requestInf.addEventListener("readystatechange", function(){
        if (requestInf.readyState === XMLHttpRequest.DONE){
            if (requestInf.status === 200){
                const response = JSON.parse(requestInf.responseText);
                success(response)
            } else {
                error();
            }
        } 
    });
    requestInf.send();
}






export { getTouit, postTouit, likeTouit, removeTouit, getBestLikeTouit, GetTrending, bestInfluent};

