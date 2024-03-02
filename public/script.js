document.addEventListener("DOMContentLoaded", function() {
    let $number = document.getElementById('number');
    let $text = document.getElementById('text');
    let $numberPreview = document.getElementById('numberPreview');
    let $textPreview = document.getElementById('textPreview');
    let $sectionPreview = document.getElementById('sectionPreview');
    let $linkArea = document.getElementById('linkArea');
    let $link = document.getElementById('link');
    let $copyButton = document.getElementById('copyButton');
    let $qrcode = document.getElementById('qrcode');
    let $qrCodeAREA = document.getElementById('qrCodeAREA');
    let result = ''
    
    
    document.getElementById('myForm').addEventListener('submit', handleSubmit);
    
    
    function UpdateQRCode(val){
        document.getElementById("qrcode").setAttribute("src","https://api.mimfa.net/qrcode?value="+encodeURIComponent(val)+"&as=value");
    
        document.addEventListener("DOMContentLoaded", function(){
        UpdateQRCode(document.getElementById("qrcode").value);
    });       
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!$number.value){
            return;
        }
    
        result = ''
        $numberPreview.innerHTML = `+55${$number.value}`;   
    
        if (!$text.value){
            $textPreview.classList.add('hidden');
        }else{
            $textPreview.classList.remove('hidden');
            $textPreview.innerHTML = $text.value;  
        }
        window.scrollTo({
            top:$sectionPreview.offsetTop,
            behavior:"smooth"
        
        })
        result = `https://api.whatsapp.com/send?phone=55${$number.value}&text=${$text.value}`
        $linkArea.classList.remove('hidden');
        $link.innerHTML = result;
        UpdateQRCode(result);
        $qrCodeAREA.classList.remove("hidden");
    
    }   
    
    $copyButton.addEventListener('click', (()=>{
    if (result){
        navigator.clipboard.writeText(result);
    }else{
        return;
    }
    }))
})
