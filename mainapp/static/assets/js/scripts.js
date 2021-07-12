var fullname = document.getElementById('form_names').value
var companyname = document.getElementById('form_company').value
var designationname = document.getElementById('form_designation').value
var departmentname = document.getElementById('form_department').value
var phonenumber = document.getElementById('form_phone').value
var emailname = document.getElementById('form_email').value
var websitename = document.getElementById('form_website').value
// var facebookicon = document.getElementById('form_facebook').value
var facebookicon = document.getElementById('form_facebook').value
var twittericon = document.getElementById('form_twitter').value
var linkedinicon = document.getElementById('form_linkedin').value
var youtubeicon = document.getElementById('form_youtube').value
var whatsappicon = document.getElementById('form_whatsapp').value
var githubicon = document.getElementById('form_github').value
var instagramicon = document.getElementById('form_instagram').value
var imageobj = document.getElementById('imagename').value

console.log(imageobj)

$('#form_names').on('input', function() {
    $('#names').text(this.value)
    fullname = this.value
  })
  $('#form_company').on('input', function() {
      $('#company').text(this.value)
      companyname = this.value
  })
$('#form_designation').on('input', function() {
    $('#designation').text(this.value)
    designationname = this.value
  })
$('#form_department').on('input', function() {
    $('#department').text(this.value)
    departmentname = this.value
  })
$('#form_phone').on('input', function() {
    $('#phone').text(this.value)
    phonenumber = this.value
  })
$('#form_email').on('input', function() {
    $('#email').text(this.value)
    emailname = this.value
  })
$('#form_website').on('input', function() {
    $('#website').text(this.value)
    websitename = this.value
  })
  $('#form_facebook').on('input', function() {
    $('#facebookid').text(this.value)
    facebookicon = this.value
  })
  $('#form_linkedin').on('input', function() {
    $('#linkedinid').text(this.value)
    linkedinicon = this.value
  })
  $('#form_twitter').on('input', function() {
    $('#twitterid').text(this.value)
    twittericon = this.value
  })
  $('#form_github').on('input', function() {
    $('#githubid').text(this.value)
    githubicon = this.value
  })
  $('#form_youtube').on('input', function() {
    $('#youtubeid').text(this.value)
    youtubeicon = this.value
  })
  $('#form_instagram').on('input', function() {
    $('#instagramid').text(this.value)
    instagramicon = this.value
  })
  $('#form_whatsapp').on('input', function() {
    $('#whatsappid').text(this.value)
    whatsappicon = this.value
  })
  $('#form_instagram').on('input', function() {
    $('#whatsappid').text(this.value)
    whatsappicon = this.value
  })



// var copyEmailBtn = document.querySelector('.js-emailcopybtn');
// copyEmailBtn.addEventListener('click', function(event) {
//   // Select the email link anchor text
//   var emailLink = document.querySelector('.js-emaillink');
//   var range = document.createRange();
//   range.selectNode(emailLink);
//   window.getSelection().addRange(range);

//   try {
//     // Now that we've selected the anchor text, execute the copy command
//     var successful = document.execCommand('copy');
//     var msg = successful ? 'successful' : 'unsuccessful';
//     console.log('Copy email command was ' + msg);
//   } catch(err) {
//     console.log('Oops, unable to copy');
//   }

//   // Remove the selections - NOTE: Should use
//   // removeRange(range) when it is supported
//   window.getSelection().removeAllRanges();
// });



var samplecopy = document.querySelector('.samplecopybtn');
samplecopy.addEventListener('click', function(event) {
  // Select the email link anchor text
  var emailLink = document.querySelector('.sample');
  window.getSelection().removeAllRanges();
  var range = document.createRange();
  range.selectNode(emailLink);
  window.getSelection().addRange(range);

  try {
    // Now that we've selected the anchor text, execute the copy command
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copy email command was ' + msg);
  } catch(err) {
    console.log('Oops, unable to copy');
  }

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported
  window.getSelection().removeAllRanges();
});


// new ClipboardJS('.copy', {
//     text: function() {
//         // based on your fiddle, you may need to replace this selector, too.
//         var htmlBlock = document.querySelector('.sample2');
//         return htmlBlock;
//     }
// });

function oneworld(id) {
    console.log(fullname)
    var bigdiv = document.getElementById("sample2")
    if (id==1){
        bigdiv.innerHTML = `<div class="sample">
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
            <tbody>
                <tr>
                    <td valign="top" width="60" style="width:45.0pt; padding:0in 5.4pt 0in 5.4pt">
                        <p class="x_MsoNormal"><span style="font-size:8.0pt"><img
                                    src="${imageobj}"
                                    style="height:64px; width: 64px; border-radius:10px"></span></p>
                    </td>
                    <td valign="top" width="250" style="width:187.45pt; padding:0in 5.4pt 0in 5.4pt">
                        <p class="x_MsoNormal"><b><span
                                    style="font-size:11.0pt; font-family:&quot;Arial&quot;,sans-serif; color:#7FC41C">${fullname}</span></b><b><span
                                    style="font-family:&quot;Arial&quot;,sans-serif; color:#7FC41C"></span></b></p>
                        <p class="x_MsoNormal"><span
                                style="font-size:8.0pt; font-family:&quot;Arial&quot;,sans-serif">${designationname} at ${companyname}</span>
                        </p>
                        <table border="0" width="100" cellpadding="0" cellspacing="0" class="x_MsoNormalTable"
                            style="width:75.0pt">
                            <tbody>
                                <tr>
                                    <td style="padding:3.75pt 3.75pt 0in 0in;">
                                        <p class="x_MsoNormal"><a href="${linkedinicon}" target="_blank"
                                                rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="0"
                                                data-ogsc="" style="color: rgb(228, 159, 255) !important; display: ${linkedinicon?`block`:`none`}"><span
                                                    style="font-size: 13.5pt; font-family: Times; color: rgb(222, 152, 255) !important; text-decoration: none;"
                                                    data-ogsc="blue"><img id="linkedinid" naturalheight="0" naturalwidth="0"
                                                        src="https://img.icons8.com/material-rounded/50/000000/linkedin--v1.png"
                                                        border="0" style="width: 0.25in; height: 0.25in; display: ${linkedinicon?`block`:`none`}"></span></a><span
                                                style="font-size: 13.5pt; font-family: Times; color: rgb(255, 255, 255) !important;"
                                                data-ogsc="black"></span></p>
                                    </td>
                                    <td style="padding:3.75pt 3.75pt 0in 0in">
                                        <p class="x_MsoNormal"><a href="${twittericon}" target="_blank"
                                                rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="1"
                                                data-ogsc=""
                                                style="color: rgb(228, 159, 255) !important; display:${twittericon?`block`:`none`}"><span
                                                    style="font-size: 13.5pt; font-family: Times; color: rgb(222, 152, 255) !important; text-decoration: none;"
                                                    data-ogsc="blue"><img id="twitterid" naturalheight="0" naturalwidth="0"
                                                        src="https://img.icons8.com/material-rounded/50/000000/twitter.png"
                                                        border="0" style="width: 0.25in; height: 0.25in; display: ${twittericon?`block`:`none`}"></span></a><span
                                                style="font-size: 13.5pt; font-family: Times; color: rgb(255, 255, 255) !important;"
                                                data-ogsc="black"></span></p>
                                    </td>
                                    <td style="padding:3.75pt 3.75pt 0in 0in">
                                        <p class="x_MsoNormal"><a href="${facebookicon}" target="_blank"
                                                rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="1"
                                                data-ogsc=""
                                                style="color: rgb(228, 159, 255) !important; display:${facebookicon?`block`:`none`}"><span
                                                    style="font-size: 13.5pt; font-family: Times; color: rgb(222, 152, 255) !important; text-decoration: none;"
                                                    data-ogsc="blue"><img id="facebookid" naturalheight="0" naturalwidth="0"
                                                        src="https://img.icons8.com/material-rounded/50/000000/facebook.png"
                                                        border="0" style="width: 0.25in; height: 0.25in; display: ${facebookicon?`block`:`none`}"></span></a><span
                                                style="font-size: 13.5pt; font-family: Times; color: rgb(255, 255, 255) !important;"
                                                data-ogsc="black"></span></p>
                                    </td>
                                    <td style="padding:3.75pt 3.75pt 0in 0in">
                                        <p class="x_MsoNormal"><a href="${youtubeicon}" target="_blank"
                                                rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="1"
                                                data-ogsc="" style="color: rgb(228, 159, 255) !important; display: ${youtubeicon?`block`:`none`}"><span
                                                    style="font-size: 13.5pt; font-family: Times; color: rgb(222, 152, 255) !important; text-decoration: none;"
                                                    data-ogsc="blue"><img id="youtubeid" naturalheight="0" naturalwidth="0"
                                                        src="https://img.icons8.com/material-rounded/50/000000/youtube-play.png"
                                                        border="0" style="width: 0.25in; height: 0.25in; display:${youtubeicon?`block`:`none`}"></span></a><span
                                                style="font-size: 13.5pt; font-family: Times; color: rgb(255, 255, 255) !important;"
                                                data-ogsc="black"></span></p>
                                    </td>
                                    <td style="padding:3.75pt 3.75pt 0in 0in">
                                        <p class="x_MsoNormal"><a href="${whatsappicon}" target="_blank"
                                                rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="1"
                                                data-ogsc="" style="color: rgb(228, 159, 255) !important; display: ${whatsappicon?`block`:`none`}"><span
                                                    style="font-size: 13.5pt; font-family: Times; color: rgb(222, 152, 255) !important; text-decoration: none;"
                                                    data-ogsc="blue"><img id="whatsappid" naturalheight="0" naturalwidth="0"
                                                        src="https://img.icons8.com/material-rounded/40/000000/whatsapp.png"
                                                        border="0" style="width: 0.25in; height: 0.25in; display:${whatsappicon?`block`:`none`}"></span></a><span
                                                style="font-size: 13.5pt; font-family: Times; color: rgb(255, 255, 255) !important;"
                                                data-ogsc="black"></span></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="x_MsoNormal"><b><span lang="FR-CA" style="font-size: 8pt; color: rgb(255, 169, 59) !important;"
                    data-ogsc="rgb(225, 127, 0)">Mobile</span></b><b><span lang="FR-CA"
                    style="font-size:8.0pt">:</span></b><span lang="FR-CA" style="font-size:8.0pt">
                ${phonenumber}&nbsp; <b><span style="color: rgb(255, 169, 59) !important;"
                        data-ogsc="rgb(225, 127, 0)">Email</span>:</b> <a href="mailto:${emailname}" target="_blank"
                    rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5" data-ogsc=""
                    style="color: rgb(228, 159, 255) !important;"><span style="color: rgb(138, 184, 255) !important;"
                        data-ogsc="rgb(5, 99, 193)">${emailname}</span></a> </span></p>
        <hr width="100%" style="border: 2px solid #7FC41C; float:left; clear:both;"><br>
        <p class="x_MsoNormal"><b><span style="font-size: 8pt; color: rgb(255, 169, 59) !important;"
                    data-ogsc="rgb(225, 127, 0)">Web</span></b><b><span style="font-size:8.0pt">:</span></b><span
                style="font-size:8.0pt"> <a href="${websitename}" target="_blank" rel="noopener noreferrer"
                    data-auth="NotApplicable" data-linkindex="6" data-ogsc=""
                    style="color: rgb(228, 159, 255) !important;"><span style="color: rgb(138, 184, 255) !important;"
                        data-ogsc="rgb(5, 99, 193)">${websitename}</span></a> &nbsp;</p>
    </div>`
    } else if (id==2){
        bigdiv.innerHTML = `            <div id="two" class="o-signature-preview sample two tab-pane">
        <div>
            <div>
                <table cellspacing="0" width="500" cellpadding="0" border="0">
                    <tr>
                        <td valign="middle" width="133" style="padding: 0px 15px 0px 0px; vertical-align: middle;"><img
                                alt="created with MySignature.io" width="133"
                                style="width:133px;max-width:133px;moz-border-radius:30%;khtml-border-radius:30%;o-border-radius:30%;webkit-border-radius:30%;ms-border-radius:30%;border-radius:30%;"
                                src="${imageobj}">
                        </td>
                        <td valign="middle" width="37"
                            style="vertical-align: middle; padding: 0px 0px 0px 0px; font-family: Arial;">
                            <table cellspacing="0" cellpadding="0" border="0" style="line-height: 1;">
                                <tbody>
                                    <tr>
                                        <td style="margin: 0.1px;padding: 4px 0 0 0;"><a target="_blank"
                                                class="social_link  facebook" href="${facebookicon}"
                                                style="border-radius: 15%;width:22px;height:22px;text-align: center;line-height:1; background-color: #854416; display: ${facebookicon?`block`:`none`}"><img
                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                alt="facebook" color="#6A78D1" height="24"
                                                class="sc-bRBYWo ccSRck"
                                                style="background-color: #ff7f00; max-width: 135px; display:${facebookicon?`block`:`none`};"></a></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px;padding: 4px 0 0 0;"><a target="_blank"
                                                class="social_link  twitter" href="${twittericon}"
                                                style="border-radius: 15%;width:22px;height:22px;text-align: center;line-height:1; background-color: #854416; display: ${twittericon?`block`:`none`}"><img
                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                alt="twitter" color="#6A78D1" height="24"
                                                class="sc-bRBYWo ccSRck"
                                                style="background-color: #ff7f00; max-width: 135px; display:${twittericon?`block`:`none`};"></a></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px;padding: 4px 0 0 0;"><a target="_blank"
                                                class="social_link  linkedin" href="${linkedinicon}"
                                                style=" display: ${linkedinicon?`block`:`none`};border-radius: 15%;width:22px;height:22px;text-align: center;line-height:1; background-color: #854416;"><img
                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                alt="linkedin" color="#6A78D1" height="24"
                                                class="sc-bRBYWo ccSRck"
                                                style="background-color: #ff7f00; max-width: 135px; display:${linkedinicon?`block`:`none`};"></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td valign="middle" style="margin: 0.1px; font-size: 1em; vertical-align: middle;">
                            <table cellspacing="0" cellpadding="0" border="0"
                                style="width: 100%; max-width: 400px; line-height: 1.6; font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; font-size: 90%; color: rgb(0, 0, 1);">
                                <tr>
                                    <td
                                        style="margin: 0.1px; padding-bottom: 1px; font: 600 1.2em &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(133, 68, 22);" id="names">
                                        ${fullname}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="margin: 0.1px; padding-bottom: 5px; display: block;">
                                        <div
                                            style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">
                                            <span id="designation">${designationname}</span>
                                            at
                                            <span style="font-weight:bolder" id="company">${companyname}</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="margin: 0.1px; padding: 1px 0px;">
                                        <div
                                            style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">
                                            <a href="tel:${phonenumber}"
                                                style="text-decoration: none; color: rgb(0, 0, 1);" id="phone">${phonenumber}</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="margin: 0.1px; padding: 1px 0px;">
                                        <div
                                            style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">
                                            <a href="mailto:${emailname}" target="_blank"
                                                style="text-decoration: none; color: rgb(0, 0, 1);" id="email">${emailname}</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="margin: 0.1px; padding: 1px 0px;">
                                        <div
                                            style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">
                                            <a href="${websitename}"
                                                style="text-decoration: none;color:#000001;text-decoration: none;"
                                                target="_blank" id="website">${websitename}</a></div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        </div>`
    } else if (id==3){
        bigdiv.innerHTML = `<div data-v-2580504d="" class="preview-pane-content preview__content sample three" style="width: 600px;" id="three">
        <table style="direction: ltr; border-radius: 0; moz-border-radius: 0; khtml-border-radius: 0; o-border-radius: 0; webkit-border-radius: 0; ms-border-radius: 0;" class="main_html">
            <tbody>
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" class="ws-tpl" style="font-family: Arial; line-height: 1.15; color: #000;">
                            <tbody>
                                <tr>
                                    <td style="vertical-align: top; padding-right: 14px;">
                                        <table cellpadding="0" cellspacing="0" class="ws-tpl-photo" style="width: 94px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img
                                                            src="${imageobj}"
                                                            height="94"
                                                            width="94"
                                                            style="
                                                                width: 94px;
                                                                vertical-align: initial;
                                                                border-radius: 50%;
                                                                moz-border-radius: 50%;
                                                                khtml-border-radius: 50%;
                                                                o-border-radius: 50%;
                                                                webkit-border-radius: 50%;
                                                                ms-border-radius: 50%;
                                                                display: block;
                                                                height: 94px;
                                                            "
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td class="ws-tpl-separator" height="1" width="0" style="width: 0px; border-right-width: 2px; border-right-style: solid; border-right-color: #bdbdbd; height: 1px; font-size: 1pt;">&nbsp;</td>
                                    <td style="padding-left: 14px; vertical-align: top;" valign="top">
                                        <table cellpadding="0" cellspacing="0">
                                            <tbody>
                                                <tr>
                                                    <td style="line-height: 1.2; padding-bottom: 12px;">
                                                        <span class="ws-tpl-name" style="font-family: Arial; text-transform: initial; font-weight: bold;">
                                                            <span style="color: #646464; font-size: 15.600000000000001px;" data-acs="name" id="names"> ${fullname} </span>
                                                        </span>
                                                        <br />
                                                        <span class="ws-tpl-title" style="font-size: 13.200000000000001px; letter-spacing: 0px; font-family: Arial; text-transform: initial; font-weight: bold; color: #646464;" data-acs="title" id="designation">
                                                            ${designationname}
                                                        </span>,
                                                        <span
                                                            class="ws-tpl-company"
                                                            style="font-size: 13.200000000000001px; letter-spacing: 0px; font-family: Arial; text-transform: initial; font-weight: bold; color: #646464;"
                                                            data-acs="company"
                                                            id="company"
                                                        >
                                                            ${companyname}
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="line-height: 0;">
                                                        <table cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <table cellpadding="0" cellspacing="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="line-height: 0%; padding-bottom: 6px;">
                                                                                        <table class="ws-tpl-phone" cellpadding="0" cellspacing="0" style="line-height: 14px; font-size: 12px; font-family: Arial;">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="font-family: Arial; font-weight: bold; font-size: 12px; color: #45668e;">
                                                                                                        <img src="https://cdn.gifo.wisestamp.com/social/phone/45668E/13/trans.png" style="vertical-align: -2px; line-height: 1.2;" />
                                                                                                    </td>
                                                                                                    <td style="width: 5px; font-size: 1pt; line-height: 0;" width="5">&nbsp;</td>
                                                                                                    <td style="font-family: Arial; font-size: 12px;">
                                                                                                        <a href="tel:${phonenumber}" target="_blank" style="text-decoration: none; font-size: 12px; font-family: Arial;">
                                                                                                            <span id="phone" data-acs="phone" style="line-height: 1.2; color: #212121; font-family: Arial; white-space: nowrap; font-size: 12px;">
                                                                                                                ${phonenumber}
                                                                                                            </span>
                                                                                                        </a>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                    <td style="line-height: 0%; padding-bottom: 6px;">
                                                                                        <table class="ws-tpl-email" cellpadding="0" cellspacing="0" style="line-height: 14px; font-size: 12px; font-family: Arial;">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="padding: 0 6px;">
                                                                                                        <span style="font-family: Arial; font-weight: bold; font-size: 12px; color: #212121; vertical-align: 2px;"> | </span>
                                                                                                    </td>
                                                                                                    <td style="font-family: Arial; font-weight: bold; font-size: 12px; color: #45668e;">
                                                                                                        <img src="https://cdn.gifo.wisestamp.com/social/envelope/45668E/13/trans.png" style="vertical-align: -2px; line-height: 1.2;" />
                                                                                                    </td>
                                                                                                    <td style="width: 5px; font-size: 1pt; line-height: 0;" width="5">&nbsp;</td>
                                                                                                    <td style="font-family: Arial; font-size: 12px;">
                                                                                                        <a href="mailto:${emailname}" target="_blank" style="text-decoration: none; font-size: 12px; font-family: Arial;">
                                                                                                            <span id="email" data-acs="email" style="line-height: 1.2; color: #212121; font-family: Arial; white-space: nowrap; font-size: 12px;">
                                                                                                                ${emailname}
                                                                                                            </span>
                                                                                                        </a>
                                                                                                    </td>
                                                                                                    <td style="font-family: Arial; font-size: 12px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <table cellpadding="0" cellspacing="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="line-height: 0%; padding-bottom: 6px;">
                                                                                        <table class="ws-tpl-website" cellpadding="0" cellspacing="0" style="line-height: 14px; font-size: 12px; font-family: Arial;">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="font-family: Arial; font-weight: bold; font-size: 12px; color: #45668e;">
                                                                                                        <img src="https://cdn.gifo.wisestamp.com/social/browser/45668E/13/trans.png" style="vertical-align: -2px; line-height: 1.2;" />
                                                                                                    </td>
                                                                                                    <td style="width: 5px; font-size: 1pt; line-height: 0;" width="5">&nbsp;</td>
                                                                                                    <td style="font-family: Arial; font-size: 12px;">
                                                                                                        <a href="${websitename}" target="_blank" style="text-decoration: none; font-size: 12px; font-family: Arial;">
                                                                                                            <span id="website" data-acs="website" style="line-height: 1.2; color: #212121; font-family: Arial; white-space: nowrap; font-size: 12px;">
                                                                                                                ${websitename}
                                                                                                            </span>
                                                                                                        </a>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                <p class="pt-2">
                                                                                                <a href="${linkedinicon}" style="visibility: ${linkedinicon?``:`hidden`}"><i class="fab fa-linkedin" style="visibility: ${linkedinicon?``:`hidden`}"></i></a>
                                                                                                <a href="${twittericon}" style="visibility: ${twittericon?``:`hidden`}"><i class="fab fa-twitter-square" style="visibility: ${twittericon?``:`hidden`}"></i></a>
                                                                                                <a href="${facebookicon}" style="visibility: ${facebookicon?``:`hidden`}"><i class="fab fa-facebook-square" style="visibility: ${facebookicon?``:`hidden`}"></i></a>
                                                                                                <a href="${githubicon}" style="visibility: ${githubicon?``:`hidden`}"><i class="fab fa-github-square" style="visibility: ${githubicon?``:`hidden`}"></i></a>
                                                                                                <a href="${youtubeicon}" style="visibility: ${youtubeicon?``:`hidden`}"><i class="fab fa-youtube" style="visibility: ${youtubeicon?``:`hidden`}"></i></a>
                                                                                                <a href="${instagramicon}" style="visibility: ${instagramicon?``:`hidden`}"><i class="fab fa-instagram-square" style="visibility: ${instagramicon?``:`hidden`}"></i></a>
                                                                                                </p>
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
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <table style="opacity: 0 !important;">
            <tbody>
                <tr>
                    <td style="height: 1px !important; width: 1px !important;" height="1" width="1">.</td>
                </tr>
            </tbody>
        </table>
        </div>`
    } else if(id==4){
        bigdiv.innerHTML = `            <table cellpadding="0" id="one" cellspacing="0" class="sc-gPEVay eQYmiW sample one tab-pane"
        style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
        <tbody>
            <tr>
                <td>
                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                        style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                        <tbody>
                            <tr>
                                <td width="150" style="vertical-align: middle;"><span class="sc-kgAjT cuzzPp"
                                        style="margin-right: 20px; display: block;"><img
                                            src="${imageobj}"
                                            role="presentation" width="130" class="sc-cHGsZl bHiaRe"
                                            style="max-width: 130px;border-radius: 50%;"></span></td>
                                <td style="vertical-align: middle;">
                                    <h3 color="#000000" id="names"
                                        style="margin: 0px; font-size: 18px; color: rgb(0, 0, 0);">${fullname}</h3>
                                    <p color="#000000" font-size="medium" class="sc-fMiknA bxZCMx"
                                        style="margin: 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;">
                                        <span id="designation">${designationname}</span></p>
                                    <p color="#000000" font-size="medium" class="sc-dVhcbM fghLuF"
                                        style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;">
                                        <span id="department">${departmentname}</span><span>&nbsp;|&nbsp;</span><span id="company">${companyname}</span>
                                    </p>
                                </td>
                                <td width="30">
                                    <div style="width: 30px;"></div>
                                </td>
                                <td color="#ff7f00" direction="vertical" width="1" class="sc-jhAzac hmXDXQ"
                                    style="width: 1px; border-bottom: none; border-left: 1px solid rgb(255, 127, 0);"></td>
                                <td width="30">
                                    <div style="width: 30px;"></div>
                                </td>
                                <td style="vertical-align: middle;">
                                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                        style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                        <tbody>
                                            <tr height="25" style="vertical-align: middle;">
                                                <td width="30" style="vertical-align: middle;">
                                                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                                        style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                                        <tbody>
                                                            <tr>
                                                                <td style="vertical-align: bottom;"><span color="#ff7f00"
                                                                        width="11" class="sc-jlyJG bbyJzT"
                                                                        style="display: block; background-color: rgb(255, 127, 0);"><img
                                                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                                                            color="#ff7f00" width="13"
                                                                            class="sc-iRbamj blSEcj"
                                                                            style="display: block; background-color: rgb(255, 127, 0);"></span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td style="padding: 0px; color: rgb(0, 0, 0);"><a
                                                        href="tel:${phonenumber}" color="#000000" class="sc-gipzik iyhjGb"
                                                        style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span id="phone">${phonenumber}</span></a></td>
                                            </tr>
                                            <tr height="25" style="vertical-align: middle;">
                                                <td width="30" style="vertical-align: middle;">
                                                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                                        style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                                        <tbody>
                                                            <tr>
                                                                <td style="vertical-align: bottom;"><span color="#ff7f00"
                                                                        width="11" class="sc-jlyJG bbyJzT"
                                                                        style="display: block; background-color: rgb(255, 127, 0);"><img
                                                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                                                            color="#ff7f00" width="13"
                                                                            class="sc-iRbamj blSEcj"
                                                                            style="display: block; background-color: rgb(255, 127, 0);"></span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td style="padding: 0px;"><a href="mailto:${emailname}" color="#000000"
                                                        class="sc-gipzik iyhjGb"
                                                        style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span id="email">${emailname}</span></a>
                                                </td>
                                            </tr>
                                            <tr height="25" style="vertical-align: middle;">
                                                <td width="30" style="vertical-align: middle;">
                                                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                                        style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                                        <tbody>
                                                            <tr>
                                                                <td style="vertical-align: bottom;"><span color="#ff7f00"
                                                                        width="11" class="sc-jlyJG bbyJzT"
                                                                        style="display: block; background-color: rgb(255, 127, 0);"><img
                                                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                                                            color="#ff7f00" width="13"
                                                                            class="sc-iRbamj blSEcj"
                                                                            style="display: block; background-color: rgb(255, 127, 0);"></span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td style="padding: 0px;"><a href="${websitename}" color="#000000"
                                                        class="sc-gipzik iyhjGb"
                                                        style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span id="website">${websitename}</span></a>
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
            <tr>
                <td>
                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                        style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;">
                        <tbody>
                            <tr>
                                <td height="30"></td>
                            </tr>
                            <tr>
                                <td color="#ff7f00" direction="horizontal" height="1" class="sc-jhAzac hmXDXQ"
                                    style="width: 100%; border-bottom: 1px solid rgb(255, 127, 0); border-left: none; display: block;">
                                </td>
                            </tr>
                            <tr>
                                <td height="30"></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                        style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;">
                        <tbody>
                            <tr>
                                <td style="vertical-align: top;"><img
                                        src="https://drive.google.com/uc?id=1HJIOSoLSWunM_LRnxaV6rL5Bfj3tRutz"
                                        role="presentation" width="130" class="sc-cHGsZl bHiaRe"
                                        style="max-width: 130px; display: inline-block;"></td>
                                <td style="text-align: right; vertical-align: top;">
                                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                        style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; display: inline-block;">
                                        <tbody>
                                            <tr style="text-align: right;">
                                                <td><a href="${facebookicon}" color="#6A78D1"
                                                        class="sc-hzDkRC kpsoyz"
                                                        style="padding: 0px; background-color: rgb(106, 120, 209); display: ${facebookicon?`block`:`none`}"><img
                                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                            alt="facebook" color="#6A78D1" height="24"
                                                            class="sc-bRBYWo ccSRck"
                                                            style="background-color: rgb(106, 120, 209); max-width: 135px; display:${facebookicon?`block`:`none`}"></a>
                                                </td>
                                                <td width="5">
                                                    <div></div>
                                                </td>
                                                <td><a href="${twittericon}" color="#6A78D1"
                                                        class="sc-hzDkRC kpsoyz"
                                                        style=" display: ${twittericon?`block`:`none`}; padding: 0px; background-color: rgb(106, 120, 209);"><img
                                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                            alt="twitter" color="#6A78D1" height="24"
                                                            class="sc-bRBYWo ccSRck"
                                                            style="background-color: rgb(106, 120, 209); max-width: 135px; display:${twittericon?`block`:`none`};"></a>
                                                </td>
                                                <td width="5">
                                                    <div></div>
                                                </td>
                                                <td><a href="${linkedinicon}" color="#6A78D1"
                                                        class="sc-hzDkRC kpsoyz"
                                                        style=" display: ${linkedinicon?`block`:`none`}; padding: 0px; background-color: rgb(106, 120, 209);"><img
                                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                            alt="linkedin" color="#6A78D1" height="24"
                                                            class="sc-bRBYWo ccSRck"
                                                            style="background-color: rgb(106, 120, 209); max-width: 135px; display:${linkedinicon?`block`:`none`};"></a>
                                                </td>
                                                <td width="5">
                                                    <div></div>
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
        </table>`
    }
}
