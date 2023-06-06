

const HTML_TEMPLATE =(message)=>{
    return `
	<html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
	  <!--[if gte mso 9]>
		  <xml>
			  <o:OfficeDocumentSettings>
				  <o:AllowPNG/>
				  <o:PixelsPerInch>96</o:PixelsPerInch>
			  </o:OfficeDocumentSettings>
		  </xml>
		  <![endif]-->
	  <title>Test Email Sample</title>
	  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	  <meta name="format-detection" content="telephone=no">
	  <!--[if !mso]>
			  <!-->
	  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
	  <!--
				  <![endif]-->
	  <style>
		body {
		  margin: 0 !important;
		  padding: 0 !important;
		  -webkit-text-size-adjust: 100% !important;
		  -ms-text-size-adjust: 100% !important;
		  -webkit-font-smoothing: antialiased !important;
		  /*style only recognised by some browsers*/
		}
  
		img {
		  border: 0 !important;
		  outline: none !important;
		}
  
		p {
		  Margin: 0px !important;
		  /*Old versions of Outlook ignore margin if it is lower case as usual*/
		  padding: 0px !important;
		}
  
		table {
		  border-collapse: collapse;
		  mso-table-lspace: 0px;
		  /*Microsoft Office only styling*/
		  mso-table-rspace: 0px;
		  /*Microsoft Office only styling*/
		}
  
		td,
		a,
		span {
		  border-collapse: collapse;
		  mso-line-height-rule: exactly;
		  /*Microsoft Office only styling*/
		}
  
		.ExternalClass * {
		  line-height: 100%;
		}
  
		@media yahoo {
		  .em_img {
			min-width: 700px !important;
		  }
		}
  
		.em_img {
		  width: 700px !important;
		  height: auto !important;
		}
  
		/* Text decoration removed */
		.em_defaultlink a {
		  color: inherit !important;
		  text-decoration: none !important;
		}
  
		span.MsoHyperlink {
		  mso-style-priority: 99;
		  /*Microsoft Office only styling*/
		  color: inherit;
		}
  
		span.MsoHyperlinkFollowed {
		  mso-style-priority: 99;
		  /*Microsoft Office only styling*/
		  color: inherit;
		}
  
		/* Media Query for desktop layout */
		@media only screen and (min-width:481px) and (max-width:699px) {
		  .em_main_table {
			width: 100% !important;
		  }
  
		  .em_wrapper {
			width: 100% !important;
		  }
  
		  .em_hide {
			display: none !important;
		  }
  
		  .em_img {
			width: 100% !important;
			height: auto !important;
		  }
  
		  .em_h20 {
			height: 20px !important;
		  }
  
		  .em_padd {
			padding: 20px 10px !important;
		  }
		}
  
		/* Media Query for mobile layout */
		@media screen and (max-width: 480px) {
		  .em_main_table {
			width: 100% !important;
		  }
  
		  .em_wrapper {
			width: 100% !important;
		  }
  
		  .em_hide {
			display: none !important;
		  }
  
		  .em_img {
			width: 100% !important;
			height: auto !important;
		  }
  
		  .em_h20 {
			height: 20px !important;
		  }
  
		  .em_padd {
			padding: 20px 10px !important;
		  }
  
		  .em_text1 {
			font-size: 16px !important;
			line-height: 24px !important;
		  }
  
		  u+.em_body .em_full_wrap {
			width: 100% !important;
			width: 100vw !important;
		  }
		}
	  </style>
	</head>
	<body class="em_body" style="margin:0px; padding:0px;" bgcolor="#efefef">
	  <div style="box-sizing:border-box;display:block;max-width:600px;margin:0 auto;padding:10px;border: 2px solid brown;background: #070707;">
		<span style="color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;width:0">Create your username and password for your new Twilio SendGrid account.</span>
		<div style="box-sizing:border-box;width:100%;margin-bottom:30px;margin-top:15px">
		  <table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%">
			<tbody>
			  <tr>
				<td align="left" style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;text-align:left" valign="top">
				  <span>
					<a href="#" style="box-sizing:border-box;color:#348eda;font-weight:400;text-decoration:none" target="_blank">
					  <img alt="SendGrid" height="16" src="http://103.241.22.85/static/media/dashLogo.cf0603708bf96a506e07.png" style="max-width:100%;border-style:none;width:137px;height:30px" width="137" class="CToWUd" data-bit="iit">
					</a>
				  </span>
				</td>
			  </tr>
			</tbody>
		  </table </div>
		  <div style="box-sizing:border-box;width:100%;margin-bottom:30px;background:#070707;border:1px solid #070707">
			<table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%">
			  <tbody>
				<tr>
				  <td style="box-sizing:border-box;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;padding:30px" valign="top">
					<table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%">
					  <tbody>
						<tr>
						  <td style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top" valign="top">
							<h2 style="margin:0;margin-bottom:30px;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-weight:300;line-height:1.5;font-size:24px;color:#fff!important"> PBM Coin provides trade finance</h2>
							<p style="margin:0;margin-bottom:30px;color:#fff;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;font-weight:300"> Protect your account by requiring both your password and an authentication code when logging into Twilio SendGrid. Below is your secure link to start setting up Two-Factor Authentication for the account tied to this email address.</p>
						  </td>
						</tr>
						<tr>
						  <td style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top" valign="top">
							<table cellpadding="0" cellspacing="0" style="box-sizing:border-box;border-spacing:0;width:100%;border-collapse:separate!important" width="100%">
							  <tbody>
								<tr>
								  <td align="center" style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;padding-bottom:15px" valign="top">
									<table cellpadding="0" cellspacing="0" style="box-sizing:border-box;border-spacing:0;width:auto;border-collapse:separate!important"></table>
								  </td>
								</tr>
							  </tbody>
							</table>
						  </td>
						</tr>
					  </tbody>
					</table>
				  </td>
				</tr>
			  </tbody>
			</table>
		  </div>
		  <div style="box-sizing:border-box;clear:both;width:100%">
			<table style="box-sizing:border-box;width:100%;border-spacing:0;font-size:12px;border-collapse:separate!important" width="100%">
			  <tbody>
				<tr style="font-size:12px">
				  <td align="center" style="box-sizing:border-box;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;vertical-align:top;font-size:12px;text-align:center;padding:20px 0" valign="top">
					<span style="float:none;display:block;text-align:center">
					  <a href="#" style="box-sizing:border-box;color:#348eda;font-weight:400;text-decoration:none;font-size:12px" target="_blank">
						<img alt="SendGrid" height="16" src="http://103.241.22.85/static/media/dashLogo.cf0603708bf96a506e07.png" style="max-width:100%;border-style:none;font-size:12px;width:91px;height:20px" width="91" class="CToWUd" data-bit="iit">
					  </a>
					</span>
					<p style="color:#ffff;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;margin-bottom:5px;margin:10px 0 20px"> Send with Confidence</p>
					<p style="margin:0;color:#ffff;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-weight:300;font-size:12px;margin-bottom:5px"> © PBM Coin | All rights reserved.</p>
				  </td>
				</tr>
			  </tbody>
			</table>
		  </div>
		</div>
	  </div>
	</body>
  </html>
`
}

const HTML_TRMPLET_OTP = (message)=>{
	return `
	<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2;border: 3px solid brown;background-color: black;">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #975743;text-decoration:none;font-weight:600">Welcome PBM coin</a>
      </div>
      <p style="font-size:1.1em;color:#fff;">${message.first_Name} ${message.last_Name}</p>
      <p style="color:#fff">Thank you for choosing Your PBM coin. Use the following OTP to complete your Sign Up procedures</p>
      <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;display: inline;">${message.otp}</h2>
      <p style="font-size:0.9em;color:#fff;">Regards,<br />Your PBM coin</p>
    </div>
  </div>
	`
}


const HTML_TEMPLATE_SUBSCRIBE = (message)=>{
return `
<html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
	  <!--[if gte mso 9]>
		  <xml>
			  <o:OfficeDocumentSettings>
				  <o:AllowPNG/>
				  <o:PixelsPerInch>96</o:PixelsPerInch>
			  </o:OfficeDocumentSettings>
		  </xml>
		  <![endif]-->
	  <title>Test Email Sample</title>
	  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	  <meta name="format-detection" content="telephone=no">
	  <!--[if !mso]>
			  <!-->
	  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
	  <!--
				  <![endif]-->
	  <style>
		body {
		  margin: 0 !important;
		  padding: 0 !important;
		  -webkit-text-size-adjust: 100% !important;
		  -ms-text-size-adjust: 100% !important;
		  -webkit-font-smoothing: antialiased !important;
		  /*style only recognised by some browsers*/
		}
  
		img {
		  border: 0 !important;
		  outline: none !important;
		}
  
		p {
		  Margin: 0px ;
		  /*Old versions of Outlook ignore margin if it is lower case as usual*/
		  padding: 0px ;
		}
  
		table {
		  border-collapse: collapse;
		  mso-table-lspace: 0px;
		  /*Microsoft Office only styling*/
		  mso-table-rspace: 0px;
		  /*Microsoft Office only styling*/
		}
  
		td,
		a,
		span {
		  border-collapse: collapse;
		  mso-line-height-rule: exactly;
		  /*Microsoft Office only styling*/
		}
  
		.ExternalClass * {
		  line-height: 100%;
		}
  
		@media yahoo {
		  .em_img {
			min-width: 700px !important;
		  }
		}
  
		.em_img {
		  width: 700px !important;
		  height: auto !important;
		}
  
		/* Text decoration removed */
		.em_defaultlink a {
		  color: inherit !important;
		  text-decoration: none !important;
		}
  
		span.MsoHyperlink {
		  mso-style-priority: 99;
		  /*Microsoft Office only styling*/
		  color: inherit;
		}
  
		span.MsoHyperlinkFollowed {
		  mso-style-priority: 99;
		  /*Microsoft Office only styling*/
		  color: inherit;
		}
  
		/* Media Query for desktop layout */
		@media only screen and (min-width:481px) and (max-width:699px) {
		  .em_main_table {
			width: 100% !important;
		  }
  
		  .em_wrapper {
			width: 100% !important;
		  }
  
		  .em_hide {
			display: none !important;
		  }
  
		  .em_img {
			width: 100% !important;
			height: auto !important;
		  }
  
		  .em_h20 {
			height: 20px !important;
		  }
  
		  .em_padd {
			padding: 20px 10px !important;
		  }
		}
  
		/* Media Query for mobile layout */
		@media screen and (max-width: 480px) {
		  .em_main_table {
			width: 100% !important;
		  }
  
		  .em_wrapper {
			width: 100% !important;
		  }
  
		  .em_hide {
			display: none !important;
		  }
  
		  .em_img {
			width: 100% !important;
			height: auto !important;
		  }
  
		  .em_h20 {
			height: 20px !important;
		  }
  
		  .em_padd {
			padding: 20px 10px !important;
		  }
  
		  .em_text1 {
			font-size: 16px !important;
			line-height: 24px !important;
		  }
  
		  u+.em_body .em_full_wrap {
			width: 100% !important;
			width: 100vw !important;
		  }
		}
		.e_text{
		    margin:0;
		    margin-bottom:14px;
		    color:#fff;
		    font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;
		    font-size:16px;
		    font-weight:300;
		    
		}
	  </style>
	</head>
	<body class="em_body" style="margin:0px; padding:0px;" bgcolor="#efefef">
	  <div style="box-sizing:border-box;display:block;max-width:900px;margin:0 auto;padding:10px;border: 2px solid brown;background: #070707;">
		<span style="color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;width:0">Create your username and password for your new Twilio SendGrid account.</span>
		<div style="box-sizing:border-box;width:100%;margin-bottom:30px;margin-top:15px">
		  <table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%">
			<tbody>
			  <tr>
				<td align="left" style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;text-align:left" valign="top">
				  <span>
					<a href="#" style="box-sizing:border-box;color:#348eda;font-weight:400;text-decoration:none" target="_blank">
					  <img alt="PBMCoin" height="16" src="http://103.241.22.85/static/media/dashLogo.cf0603708bf96a506e07.png" style="max-width:100%;border-style:none;width:135px;height:62px" width="137" class="CToWUd" data-bit="iit">
					</a>
				  </span>
				</td>
			  </tr>
			</tbody>
		  </table </div>
		  <div style="box-sizing:border-box;width:100%;margin-bottom:30px;background:#070707;border:1px solid #070707">
			<table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%">
			  <tbody>
				<tr>
				  <td style="box-sizing:border-box;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;padding:30px" valign="top">
					<table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%">
					  <tbody>
						<tr>
						  <td style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top" valign="top">
							<h2 style="margin:0;margin-bottom:30px;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-weight:300;line-height:1.5;font-size:24px;color:#fff!important"> Subscribe to PBM Coin</h2>
							<h3 style="margin:0;margin-bottom:30px;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-weight:300;line-height:1.5;font-size:18px;color:#fff!important">Dear sir/ma'am,</h3>
							<p class="e_text" style="">We're excited to invite you to subscribe to our newsletter and join our vibrant community 
at [PBM Coin]! By subscribing, you'll gain exclusive access to the latest news,updates, and
valuable content related to decentralized finance (DeFi). Get ready to stay informed and 
make the most of your DeFi journey.</p>
<p class="e_text">Here's what you can expect by subscribing to our newsletter:</p>
<p class="e_text">PBMC Insights: Receive insightful articles, analysis, and market trends that will keep you 
informed about the evolving PBMC landscape. Stay ahead of the curve and explore the 
world of decentralized lending, borrowing, staking, yield farming, liquidity pools, and
much more.</p>
<p class="e_text">Platform Updates: Be the first to know about new features, enhancements, 
and exciting developments happening on our PBMC platform. Stay up to
date with our latest offerings and learn how you can optimize your 
DeFi strategies.</p>
<p class="e_text">Educational Content: Expand your knowledge of DeFi with our educational 
content. Discover guides, tutorials, and resources designed to help you
navigate the intricacies of decentralized finance. Empower yourself to make
well-informed decisions in your PBMC endeavors.</p>
<p class="e_text">Exclusive Promotions: Enjoy special promotions, rewards, and airdrops
exclusively available to our newsletter subscribers. Maximize the value of
your participation in our platform and unlock additional benefits for being
a part of our community.</p>
<p class="e_text">
Community Events: Join us for virtual events, webinars, and workshops 
where you can engage with industry experts and like-minded individuals.
Participate in insightful discussions, ask questions, and expand your 
network within the PBMC ecosystem. </p>
							
						  </td>
						</tr>
						<tr>
						  <td style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top" valign="top">
							<table cellpadding="0" cellspacing="0" style="box-sizing:border-box;border-spacing:0;width:100%;border-collapse:separate!important" width="100%">
							  <tbody>
								<tr>
								  <td align="center" style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;padding-bottom:15px" valign="top">
									<table cellpadding="0" cellspacing="0" style="box-sizing:border-box;border-spacing:0;width:auto;border-collapse:separate!important"></table>
								  </td>
								</tr>
							  </tbody>
							</table>
						  </td>
						</tr>
					  </tbody>
					</table>
				  </td>
				</tr>
			  </tbody>
			</table>
		  </div>
		  <div style="box-sizing:border-box;clear:both;width:100%">
			<table style="box-sizing:border-box;width:100%;border-spacing:0;font-size:12px;border-collapse:separate!important" width="100%">
			  <tbody>
				<tr style="font-size:12px">
				  <td align="center" style="box-sizing:border-box;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;vertical-align:top;font-size:12px;text-align:center;padding:20px 0" valign="top">
					<span style="float:none;display:block;text-align:center">
					  <a href="#" style="box-sizing:border-box;color:#348eda;font-weight:400;text-decoration:none;font-size:12px" target="_blank">
						<img alt="PBMCoin" height="16" src="http://103.241.22.85/static/media/dashLogo.cf0603708bf96a506e07.png" style="max-width:100%;border-style:none;font-size:12px;width:115px;height:50px" width="91" class="CToWUd" data-bit="iit">
					  </a>
					</span>
					<p style="color:#ffff;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;margin-bottom:5px;margin:10px 0 20px"> Send with Confidence</p>
					<p style="margin:0;color:#ffff;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-weight:300;font-size:12px;margin-bottom:5px"> © PBM Coin | All rights reserved.</p>
				  </td>
				</tr>
			  </tbody>
			</table>
		  </div>
		</div>
	  </div>
	</body>
  </html>
`
}





const HTML_TEMPLATE_FORGET_PASSWORD =(message)=>{
return `
<html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
	  <!--[if gte mso 9]>
		  <xml>
			  <o:OfficeDocumentSettings>
				  <o:AllowPNG/>
				  <o:PixelsPerInch>96</o:PixelsPerInch>
			  </o:OfficeDocumentSettings>
		  </xml>
		  <![endif]-->
	  <title>Test Email Sample</title>
	  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	  <meta name="format-detection" content="telephone=no">
	  <!--[if !mso]>
			  <!-->
	  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
	  <!--
				  <![endif]-->
	  <style>
		body {
		  margin: 0 !important;
		  padding: 0 !important;
		  -webkit-text-size-adjust: 100% !important;
		  -ms-text-size-adjust: 100% !important;
		  -webkit-font-smoothing: antialiased !important;
		  /*style only recognised by some browsers*/
		}
  
		img {
		  border: 0 !important;
		  outline: none !important;
		}
  
		p {
		  Margin: 0px !important;
		  /*Old versions of Outlook ignore margin if it is lower case as usual*/
		  padding: 0px !important;
		}
  
		table {
		  border-collapse: collapse;
		  mso-table-lspace: 0px;
		  /*Microsoft Office only styling*/
		  mso-table-rspace: 0px;
		  /*Microsoft Office only styling*/
		}
  
		td,
		a,
		span {
		  border-collapse: collapse;
		  mso-line-height-rule: exactly;
		  /*Microsoft Office only styling*/
		}
  
		.ExternalClass * {
		  line-height: 100%;
		}
  
		@media yahoo {
		  .em_img {
			min-width: 700px !important;
		  }
		}
  
		.em_img {
		  width: 700px !important;
		  height: auto !important;
		}
  
		/* Text decoration removed */
		.em_defaultlink a {
		  color: inherit !important;
		  text-decoration: none !important;
		}
  
		span.MsoHyperlink {
		  mso-style-priority: 99;
		  /*Microsoft Office only styling*/
		  color: inherit;
		}
  
		span.MsoHyperlinkFollowed {
		  mso-style-priority: 99;
		  /*Microsoft Office only styling*/
		  color: inherit;
		}
  
		/* Media Query for desktop layout */
		@media only screen and (min-width:481px) and (max-width:699px) {
		  .em_main_table {
			width: 100% !important;
		  }
  
		  .em_wrapper {
			width: 100% !important;
		  }
  
		  .em_hide {
			display: none !important;
		  }
  
		  .em_img {
			width: 100% !important;
			height: auto !important;
		  }
  
		  .em_h20 {
			height: 20px !important;
		  }
  
		  .em_padd {
			padding: 20px 10px !important;
		  }
		}
  
		/* Media Query for mobile layout */
		@media screen and (max-width: 480px) {
		  .em_main_table {
			width: 100% !important;
		  }
  
		  .em_wrapper {
			width: 100% !important;
		  }
  
		  .em_hide {
			display: none !important;
		  }
  
		  .em_img {
			width: 100% !important;
			height: auto !important;
		  }
  
		  .em_h20 {
			height: 20px !important;
		  }
  
		  .em_padd {
			padding: 20px 10px !important;
		  }
  
		  .em_text1 {
			font-size: 16px !important;
			line-height: 24px !important;
		  }
  
		  u+.em_body .em_full_wrap {
			width: 100% !important;
			width: 100vw !important;
		  }
		}
	  </style>
	</head>
	<body class="em_body" style="margin:0px; padding:0px;" bgcolor="#efefef">
	  <div style="box-sizing:border-box;display:block;max-width:600px;margin:0 auto;padding:10px;border: 2px solid brown;background: #070707;">
		<span style="color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;width:0">Create your username and password for your new Twilio SendGrid account.</span>
		<div style="box-sizing:border-box;width:100%;margin-bottom:30px;margin-top:15px">
		  <table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%">
			<tbody>
			  <tr>
				<td align="left" style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;text-align:left" valign="top">
				  <span>
					<a href="#" style="box-sizing:border-box;color:#348eda;font-weight:400;text-decoration:none" target="_blank">
					  <img alt="SendGrid" height="16" src="http://103.241.22.85/static/media/dashLogo.cf0603708bf96a506e07.png" style="max-width:100%;border-style:none;width:137px;height:30px" width="137" class="CToWUd" data-bit="iit">
					</a>
				  </span>
				</td>
			  </tr>
			</tbody>
		  </table </div>
		  <div style="box-sizing:border-box;width:100%;margin-bottom:30px;background:#070707;border:1px solid #070707">
			<table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%">
			  <tbody>
				<tr>
				  <td style="box-sizing:border-box;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;padding:30px" valign="top">
					<table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%">
					  <tbody>
						<tr>
						  <td style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top" valign="top">
							<h2 style="margin:0;margin-bottom:30px;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-weight:300;line-height:1.5;font-size:24px;color:#fff!important"> PBM Coin provides trade finance</h2>
							<p style="margin:0;margin-bottom:30px;color:#fff;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;font-weight:300"> Protect your account by requiring both your password and an authentication code when logging into Twilio SendGrid. Below is your secure link to start setting up Two-Factor Authentication for the account tied to this email address.</p>
						  </td>
						</tr>
						<tr>
						  <td style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top" valign="top">
							<table cellpadding="0" cellspacing="0" style="box-sizing:border-box;border-spacing:0;width:100%;border-collapse:separate!important" width="100%">
							  <tbody>
								<tr>
								  <td align="center" style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;padding-bottom:15px" valign="top">
									<table cellpadding="0" cellspacing="0" style="box-sizing:border-box;border-spacing:0;width:auto;border-collapse:separate!important"></table>
								  </td>
								</tr>
							  </tbody>
							</table>
						  </td>
						</tr>
					  </tbody>
					</table>
				  </td>
				</tr>
			  </tbody>
			</table>
		  </div>
		  <div style="box-sizing:border-box;clear:both;width:100%">
			<table style="box-sizing:border-box;width:100%;border-spacing:0;font-size:12px;border-collapse:separate!important" width="100%">
			  <tbody>
				<tr style="font-size:12px">
				  <td align="center" style="box-sizing:border-box;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;vertical-align:top;font-size:12px;text-align:center;padding:20px 0" valign="top">
					<span style="float:none;display:block;text-align:center">
					  <a href="#" style="box-sizing:border-box;color:#348eda;font-weight:400;text-decoration:none;font-size:12px" target="_blank">
						<img alt="SendGrid" height="16" src="http://103.241.22.85/static/media/dashLogo.cf0603708bf96a506e07.png" style="max-width:100%;border-style:none;font-size:12px;width:91px;height:20px" width="91" class="CToWUd" data-bit="iit">
					  </a>
					</span>
					<p style="color:#ffff;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;margin-bottom:5px;margin:10px 0 20px"> Send with Confidence</p>
					<p style="margin:0;color:#ffff;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-weight:300;font-size:12px;margin-bottom:5px"> © PBM Coin | All rights reserved.</p>
				  </td>
				</tr>
			  </tbody>
			</table>
		  </div>
		</div>
	  </div>
	</body>
  </html>
`

}


module.exports = {
    HTML_TEMPLATE,
	HTML_TRMPLET_OTP,
	HTML_TEMPLATE_SUBSCRIBE
};
