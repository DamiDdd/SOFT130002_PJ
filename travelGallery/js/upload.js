var fileInput = document.getElementById('file'),
    previewImg = document.getElementById('bigImg');
fileInput.addEventListener('change', function () {
    var file = this.files[0];
    var reader = new FileReader();
    // 监听reader对象的的onload事件，当图片加载完成时，把base64编码賦值给预览图片
    reader.addEventListener("load", function () {
        previewImg.src = reader.result;
    }, false);
    // 调用reader.readAsDataURL()方法，把图片转成base64
    reader.readAsDataURL(file);
}, false);