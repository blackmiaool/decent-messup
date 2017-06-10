$(function () {
    const inputWindow = $("#input")[0].contentWindow;
    const outputWindow = $("#output")[0].contentWindow;
    const $errorOutput = $("#error-output");
    let setOutputReady;
    const outputReady = new Promise(function (resolve, reject) {
        setOutputReady = resolve;
    });
    const demoReady = new Promise(function (resolve, reject) {
        $.ajax({
            url:"demo.js",
            type:"GET",
            dataType:"text",
            success:resolve
        });
    });
    window.addEventListener('message', function ({
        source,
        data: {
            action,
            data
        }
    }) {
        switch (action) {
            case "ready":
                if (source === outputWindow) {
                    setOutputReady();
                } else if (source === inputWindow) {
                    demoReady.then(function (demoCode) {
                        inputWindow.postMessage({
                            action: "setValue",
                            data: demoCode
                        }, "*");
                    });

                }
                break;
            case "change":
                if (source === inputWindow) {
                    let code;
                    $errorOutput.empty();
                    try {
                        code = decentMessUp(data,{es6:true});
                    } catch (e) {
                        $errorOutput.text(e.message);
                        outputReady.then(function () {
                            outputWindow.postMessage({
                                action: "setValue",
                                data: ""
                            }, "*");
                        });
                        return;
                    }

                    outputReady.then(function () {
                        outputWindow.postMessage({
                            action: "setValue",
                            data: code
                        }, "*");
                    });
                }
                break;
        }

    });

});
