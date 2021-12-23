var base64String = '';
function handleFiles() {

    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];

        var fileReader = new FileReader();

        fileReader.onload = function (fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64
            base64String = srcData;

            var newImage = document.createElement('img');
            newImage.src = srcData;

            document.getElementById("imgUpload").innerHTML = newImage.outerHTML;
            console.log("base64 is: " + base64String);
            document.getElementById("base64").value = base64String;

        }
        fileReader.readAsDataURL(fileToLoad);
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const base64 = data.get('base64');

    let jsonData = {"base64": `${base64}`};

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:8080/pic/grayscale', true);
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8");
    console.log(jsonData);
    xhr.send(JSON.stringify(jsonData));
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);