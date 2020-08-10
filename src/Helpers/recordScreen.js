export const getScreenStream  = (callback) => {
    if (navigator.getDisplayMedia) {
        navigator.getDisplayMedia({
            video: true,
            audio: true
        }).then(screenStream => {
            callback(screenStream);
        });
    } else if (navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: true
        }).then(screenStream => {
            callback(screenStream);
        });
    } else {
        alert('getDisplayMedia API is not supported by this browser.');
    }
}

export const addStreamStopListener = (stream, callback) => {
    stream.addEventListener('ended', function() {
        callback();
        callback = function() {};
    }, false);
    stream.addEventListener('inactive', function() {
        callback();
        callback = function() {};
    }, false);
    stream.getTracks().forEach(function(track) {
        track.addEventListener('ended', function() {
            callback();
            callback = function() {};
        }, false);
        track.addEventListener('inactive', function() {
            callback();
            callback = function() {};
        }, false);
    });
}

