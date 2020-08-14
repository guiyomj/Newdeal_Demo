// 사이드 아코디언 기능
$('.toggle_wrap h3').click(function(){
    var targetElem = $(this).parent().children('ul')
    var length = targetElem.children().length
    if($(this).hasClass('open')) {
        $(this).removeClass('open')
        targetElem.css('height',0)
    } else {
        $(this).addClass('open')
        targetElem.css('height', length * 46 + "px")
    }
    
})

// 배지 클릭 시 좌측 메뉴 토글
$('.pull_bedge').click(function(){
    $('.filter_wrap').toggleClass('open')
    $('.pull_bedge').toggleClass('open')
})

$('.gnb li button').click(function(){
    var section = $(this).attr('data-section')
    $('.gnb li').removeClass('selected')
    $(this).parent().addClass('selected')

    // 탭 변경되면 체크되어 있는 항목 체크 해제
    $("#realm input[type=checkbox]").prop("checked",false);
    $("#skill input[type=checkbox]").prop("checked",false);
    $("#participation input[type=checkbox]").prop("checked",false);
    if(section !== "dsi") {
        // DSI 활동 거점 조회가 아닐 경우

        // 활용기술별 조회 숨기기
        $('#skill').css('transform','translateX(-100%)')
        $('#skill').css('opacity','0')
        
        // 참여 주제별 조회 숨기기
        $('#participation').css('transform','translateX(-100%)')
        $('#participation').css('opacity','0')

        // 활용기술별과 참여 주제별 아코디언 닫기
        $('#skill h3').removeClass('open')
        $('#skill ul').css('height',0)
        $('#participation h3').removeClass('open')
        $('#participation ul').css('height',0)
        
    } else {
        // DSI 활동 거점 조회일 경우
        // 활용기술별과 참여 주제별 표시하기
        $('#skill').css('transform','translateX(0)')
        $('#participation').css('transform','translateX(0)')
        $('#skill').css('opacity','1')
        $('#participation').css('opacity','1')
    }
})

// 슬라이더 줌인, 줌아웃
$('.zoom_out').click(function(){
    var beforeZoomOut = Number($('#zoom').val())
    if(beforeZoomOut%2 === 0) {
        $('#zoom').val(beforeZoomOut - 2)
    } else {
        $('#zoom').val(beforeZoomOut - 1)
    }
})

$('.zoom_in').click(function(){
    var beforeZoomIn = Number($('#zoom').val())
    if(beforeZoomIn%2 === 0) {
        $('#zoom').val(beforeZoomIn + 2)
    } else {
        $('#zoom').val(beforeZoomIn + 1)
    }
})