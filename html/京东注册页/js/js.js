// JavaScript Document

$(document).ready(function(e){
	//姓名输入框
    $('#name-input').bind({
		//获得焦点时
		focus:function(){
			this.placeholder="";
				$('#name-pro-i').css("display","block");
				$('#name-pro-i').css("background-position","0 -100px");
				$('#name-pro span').text("支持中文、字母、数字、“-”、“_”、的组合4-20个字符;");
				$('#name-pro span').css("color","#999");
				$('#user-name').css("border-color","#999");
			}, 
		//失去焦点时
			blur:function(){ 
			var userName=/[\u4E00-\u9FFFa-zA-Z0-9-_]{4,20}/;
			if (this.value == ""||this.value.length==0){
			this.placeholder="你的账户名和登录密码";
			} 
			
			//用户名的判断
			if(!userName.exec($('#name-input').val())){
				$('#name-pro-i').css("background-position","-17px -100px");
				$('#user-name').css("border-color","red");
				$('#name-pro span').css("color","red");
				$('#user-name i').css("display","none");
				}
			else{
				$('#user-name i').css("display","block");
				$('#user-name').css("border-color","#999");
				$('#name-pro span').text("");
				$('#name-pro-i').css("display","none");
				}
			}
	});
	
	//密码输入框
	$('#pwd-input').bind({ 
		focus:function(){
			this.placeholder=""; 
			$('#pwd-pro-i').css("display","block");
			$('#pwd-pro-i').css("background-position","0 -100px");
			$('#pwd-pro span').text("建议使用字母、数字和符号两种及以上的组合4-20个字符;");
			$('#pwd-pro span').css("color","#999");
			$('#user-pwd').css("border-color","#999");
			}, 
		blur:function(){ 
			var userpwd=/^[a-zA-Z]\w{5,17}$/;
			if (this.value == ""||this.value.length==0){ 
			this.placeholder="建议至少使用两种字符组合"; 
			}
		   if(!userpwd.exec($('#pwd-input').val())){
				$('#pwd-pro span').text("支持中文、字母、数字、“-”、“_”、的组合4-20个字符;");
				$('#pwd-pro span').css("color","red");
				$('#user-pwd').css("border-color","red");
				$('#pwd-pro-i').css("background-position","-17px -100px");
				$('#user-pwd i').css("display","none");
			}
			else{
				$('#user-pwd i').css("display","block");
				$('#pwd-pro-i').css("display","none");
				$('#pwd-pro span').text("");	
				$('#user-pwd').css("border-color","#999");
				}
			}
	});
///确认密码
	$('#confirm-pwd-input').bind({ 
		focus:function(){
			this.placeholder=""; 
			$('#confirm-pwd-pro-i').css("display","block");
			$('#confirm-pwd-pro-i').css("background-position","0 -100px")
			$('#confirm-pwd-pro span').text("请再次输入;");
			$('#confirm-pwd-pro span').css("color","#999");
			$('#user-confirm-pwd').css("border-color","#999");
			
			}, 
			blur:function(){ 
			//两次输入的密码不相同
			if(this.value!=$('#pwd-input').val()||this.value == "")
			{
				$('#confirm-pwd-pro span').text("两次输入的密码不同;");
				$('#confirm-pwd-pro span').css("color","red");
				$('#confirm-pwd-pro-i').css("background-position","-17px -100px")
				$('#user-confirm-pwd').css("border-color","red");
				$('#user-confirm-pwd i').css("display","none");
				}
			else{
				$('#user-confirm-pwd i').css("display","block");
				$('#confirm-pwd-pro-i').css("display","none");
				$('#confirm-pwd-pro span').text("");
				$('#user-confirm-pwd').css("border-color","#999");
				}
			}
	});
	
    ///邮箱输入框
	$('#eml-input').bind({ 
		focus:function(){
			this.placeholder=""; 
			$('#eml-pro-i').css("display","block");
			$('#eml-pro-i').css("background-position","0 -100px");
			$('#eml-pro span').text("完成验证后你可以使用该邮箱登录和找回密码;");
			$('#eml-pro span').css("color","#999");
			$('#eml-validation').css("border-color","#999");
			}, 
		blur:function(){
			var email=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; 
			if (this.value == ""){ 
			this.placeholder="建议使用常用邮箱"; 
			} 
			if(!email.exec($('#eml-input').val())){
				$('#eml-pro-i').css("background-position","-17px -100px");
				$('#eml-pro span').text("请输入正确的邮箱;");
				$('#eml-pro span').css("color","red");
				$('#eml-validation').css("border-color","red");
				$('#eml-validation i').css("display","none");
				}
			else{
				$('#eml-validation i').css("display","block");
				$('#eml-pro-i').css("display","none");
				$('#eml-pro span').text("");
				$('#eml-validation').css("border-color","#999");
				}
	
			}
	});
///电话输入框
	$('#tel-input').bind({ 
		focus:function(){
			this.placeholder=""; 
			$('#tel-pro-i').css("display","block");
			$('#tel-pro-i').css("background-position","0 -100px");
			$('#tel-pro span').text("完成验证后你可以使用该电话登录和找回密码;");
			$('#tel-pro span').css("color","#999");
			$('#tel').css("border-color","#999");
		
			}, 
			blur:function(){ 
			var tel=/^0?(13|14|15|18)[0-9]{9}$/;
			if (this.value == ""){ 
			this.placeholder="建议使用常用电话"; 
			} 
			if(!tel.exec($('#tel-input').val())){
				$('#tel-pro-i').css("background-position","-17px -100px");
				$('#tel-pro span').text("请输入正确的电话号码;");
				$('#tel-pro span').css("color","red");
				$('#tel').css("border-color","red");
				$('#tel i').css("display","none");
				}
			else{
				$('#tel i').css("display","block");
				$('#tel-pro').text("");
				$('#tel-pro-i').css("display","none");
				$('#tel').css("border-color","#999");
				}
			}
	});
///验证码
	$('#code-input').bind({ 
		focus:function(){
			this.placeholder=""; 
			$('#code-pro').text("看不清？点击更换验证码");
			}, 
			blur:function(){ 
			if (this.value == ""){ 
			this.placeholder="请输入验证码"; 
			} 
			$('#code-pro').text("");
			}
	});
///手机验证
	$('#tel-validation-input').bind({ 
		focus:function(){
			this.placeholder=""; 
			}, 
			blur:function(){ 
			if (this.value == ""){ 
			this.placeholder="请输入手机验证码"; 
			} 
			}
	});
	//电话选择框
	$('#show').click(function(e) {
		if($('#phone-select').attr("display")!="block"){
			$('#phone-select').show();
			$('#phone-select').attr("display","block")
			}
		else{
			$('#phone-select').hide();
			$('#phone-select').attr("display","none")
			}	
    });
});

//自动获取验证码
function code(){
	var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
        var str = '';
        for(var i = 0 ; i < 4 ; i ++ ){
			str += ''+arr[Math.floor(Math.random() * arr.length)];
			} 
        var code=document.getElementById("code");
		code.innerHTML=str;
	}
//
/*function validatePhone(){
		emailWrap.style.display="none";
		phoneWrap.style.display="block";
	}*/
 
