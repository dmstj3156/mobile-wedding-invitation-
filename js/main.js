/*main.js */
$(function(){
    /*
        갤러리 기능
            1.썸네일 이미지 클릭하면 이미지 큰화면에서 보기
                썸네일 이미지 주소 -> 큰이미지 주소
    */
   $('.galleryList a').click(function(){
       //버튼 이미지의 주소값 읽기
        var imgSrc = $(this).find('img').attr('src');
        console.log(imgSrc);

        // 메인 이미지에 imgSrc 주소값 쓰기
        $('#gallery figure img').attr('src', imgSrc)

        return false;//기본이벤트 해제
   });
})