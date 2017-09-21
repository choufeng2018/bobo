<?php
header('Content-type: text/html; charset=UTF8');
date_default_timezone_set("Asia/Shanghai");
function check_input($value)
{
// 去除斜杠
	if (get_magic_quotes_gpc())
	{
		$value = stripslashes($value);
	}
// 如果不是数字则加引号
	if (!is_numeric($value))
	{
		$value = "'" . mysql_real_escape_string($value) . "'";
	}
	return $value;
}

$con_name = 'sdfs';//addslashes($_POST['c_name']);
$con_position = '32';//addslashes($_POST['c_position']);
$con_tel = '13809098787';//addslashes($_POST['c_tel']);
$con_email = '232@qq.com';//$_POST['c_email'];
$con_city = 'dfd';//addslashes($_POST['c_city']);
$con_add = 'fdsd';//addslashes($_POST['c_add']);

// var_dump($con_name);
// var_dump($con_title);
// var_dump($con_email);
// var_dump($con_text);exit;
//

// function isemail($con_email) {
//  return strlen($con_email) > 8 && preg_match("/^[-_+.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+([a-z]{2,4})|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i", $con_email);
// }

// if(!isemail($con_email)) {
// 	echo "<script style='content:text/html; charset=utf-8;'>alert('请输入正确的邮箱地址!')</script>";
// 	echo '<script>location.href="/"</script>';
// 	exit();
// }
if (empty($con_name) or empty($con_position) or empty($con_email)) {
	echo "<script style='content:text/html'; charset='utf-8';>alert('请填写完整!')</script>";
	echo '<script>location.href="#"</script>';
	exit();
}

require_once ('inc/email.inc.php');
//##########################################
$smtpserver = "ssl://smtp.qq.com";//SMTP服务器
$smtpserverport = "465";//SMTP服务器端口
$smtpusermail = "395442161@qq.com";//SMTP服务器的用户邮箱
$smtpemailto = "service@xuebabobo.com";//发送给谁

$smtpuser = "395442161";//SMTP服务器的用户帐号
$smtppass = "ewvouxhcgngbcaef";//填写SMTP服务器的用户密码，不是qq密码
$mailsubject = "bobo官网邮件";//$con_name."发来的咨询";//邮件主题
$mailbody['name']="姓名：".$_POST['name']."<br>";
$mailbody['phone']="手机：".$_POST['phone']."<br>";
$mailbody['url']=$_POST['url'];
$stri = $mailbody['url'];

$str=implode($mailbody);
$mailbody=$str;
//$mailbody = "<a style='font-size:18px;color:#000;font-family:微软雅黑;text-decoration:none;'>姓名:".$con_name."<br/>职位:".$con_position."<br/>手机:".$con_tel."<br/>邮箱:".$con_email."<br/>所在城市:".$con_city."<br/>详细地址:<br/>".$con_add."</a><br/>";//邮件内容
$mailtype = "HTML";//邮件格式（HTML/TXT）,TXT为文本邮件
##########################################
$smtp = new smtp($smtpserver,$smtpserverport,true,$smtpuser,$smtppass);//这里面的一个true是表示使用身份验证,否则不使用身份验证.
$smtp->debug = false;//是否显示发送的调试信息
$smtp->sendmail($smtpemailto, $smtpusermail, $mailsubject, $mailbody, $mailtype);
echo "<script style='content:text/html'; charset='utf-8';>alert('预约成功，请稍后！')</script>";
echo "<script>location.href='".$stri."'</script>";

exit();

?>


