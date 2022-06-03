const checkObj ={
    
    "gender" : false,

}
//아이디
document.getElementById("memberId").addEventListener("change",function(){
    
    const regExp=/^[\w\-\_]{6,14}$/;

    if(regExp.test(this.value)){

        this.style.backgroundColor="green";
    }else{

        this.style.backgroundColor="red";
        this.style.color="white";

    }

});


//전화번호

const memberTel = document.getElementById("memberTel");

function validate(){
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}$/;
    if(!regExp.test(memberTel.value)){
        alert("전화번호의 형식이 올바르지 않습니다");
        return false;

    }
}

memberTel.addEventListener("input",function(){
    if(memberTel.value.length==0){
        alert('전화번호의 형식이 올바르지 않습니다');
        
    }
});

// 성별 
function vaildate(){
    const gender = document.getElementsByName("gender");
    if(!gender[0].checked&&!gender[1].checkde){
        alert("성별을 선택해주세요");
        checkObj.gender = false;
        
        return false;
    }else{
        checkObj.gender = true;
    }
    

}


// 이름 유효성 검사
document.getElementById("memberName").addEventListener("input", function(){



    const span = document.getElementById("inputNameResult");

    const regExp = /^[가-힣]{2,5}$/;

   

    // 유효성 검사
    if(  regExp.test(this.value)  ){
        // #inputName에 작성된 값이 유효한 경우
        span.innerText = "정상입력.";
        span.style.color = "green";

    }else{
        span.innerText = "한글만 입력하세요.";
        span.style.color = "red";
        
    }


});




// 비밀번호
const memberPw =document.getElementById("memberPw");
const confirmPw =document.getElementById("confirmPw");
const pwMessage = document.getElementById("pwMessage");



confirmPw.addEventListener("keyup",function(){
    
  
    if(memberPw.value.trim().length==0){
        
        alert("비밀번호를 입력해주세요");   
        confirmPw.value="";
        memberPw.focus(); 
        return false ;
    }


        if(memberPw.value == confirmPw.value){
            pwMessage.innerText="비밀번호 일치";
            pwMessage.classList.add("confirm");
            pwMessage.classList.remove("error");
            pwMessage.style.color="green";
           
        }else{
            pwMessage.innerText="비밀번호 불일치";
            pwMessage.classList.add("error");
            pwMessage.classList.remove("confirm");
            pwMessage.style.color="red";

        }
    
    return true;
});

