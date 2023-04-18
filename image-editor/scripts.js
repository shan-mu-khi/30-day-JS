function imageUpload(event)
{
    let uploadedImg=event.target.files[0];
    let imagePreview=document.getElementById('imagePreview');
    imagePreview.src= URL.createObjectURL(uploadedImg);
}