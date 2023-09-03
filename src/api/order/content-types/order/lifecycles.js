module.exports = {
  async afterUpdate(event) {
    var link = `https://andreahairvn.com/order-details?id=${event.result.id}`;
    try {
      await strapi
        .plugin("email")
        .service("email")
        .send({
          to: `${event.result.email}`,
          from: "noreply@andreahairvn.com",
          subject: `Andreahairvn ${event.result.status}`,
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
            <html
              xmlns="http://www.w3.org/1999/xhtml"
              xmlns:v="urn:schemas-microsoft-com:vml"
              xmlns:o="urn:schemas-microsoft-com:office:office"
            >
              <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>order success</title>
                <style type="text/css" emogrify="no">
                  #outlook a {
                    padding: 0;
                  }
                  .ExternalClass {
                    width: 100%;
                  }
                  .ExternalClass,
                  .ExternalClass p,
                  .ExternalClass span,
                  .ExternalClass font,
                  .ExternalClass td,
                  .ExternalClass div {
                    line-height: 100%;
                  }
                  table td {
                    border-collapse: collapse;
                    mso-line-height-rule: exactly;
                  }
                  .editable.image {
                    font-size: 0 !important;
                    line-height: 0 !important;
                  }
                  .nl2go_preheader {
                    display: none !important;
                    mso-hide: all !important;
                    mso-line-height-rule: exactly;
                    visibility: hidden !important;
                    line-height: 0px !important;
                    font-size: 0px !important;
                  }
                  body {
                    width: 100% !important;
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                    margin: 0;
                    padding: 0;
                  }
                  img {
                    outline: none;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                  }
                  a img {
                    border: none;
                  }
                  table {
                    border-collapse: collapse;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                  }
                  th {
                    font-weight: normal;
                    text-align: left;
                  }
                  *[class="gmail-fix"] {
                    display: none !important;
                  }
                </style>
                <style type="text/css" emogrify="no">
                  @media (max-width: 600px) {
                    .gmx-killpill {
                      content: " \u03D1";
                    }
                  }
                </style>
                <style type="text/css" emogrify="no">
                  @media (max-width: 600px) {
                    .gmx-killpill {
                      content: " \u03D1";
                    }
                    .r0-o {
                      border-style: solid !important;
                      margin: 0 auto 0 auto !important;
                      width: 320px !important;
                    }
                    .r1-i {
                      background-color: #ffffff !important;
                    }
                    .r2-c {
                      box-sizing: border-box !important;
                      text-align: center !important;
                      valign: top !important;
                      width: 100% !important;
                    }
                    .r3-o {
                      border-style: solid !important;
                      margin: 0 auto 0 auto !important;
                      width: 100% !important;
                    }
                    .r4-i {
                      padding-bottom: 0px !important;
                      padding-left: 15px !important;
                      padding-right: 15px !important;
                      padding-top: 0px !important;
                    }
                    .r5-c {
                      box-sizing: border-box !important;
                      display: block !important;
                      valign: top !important;
                      width: 100% !important;
                    }
                    .r6-o {
                      border-style: solid !important;
                      width: 100% !important;
                    }
                    .r7-i {
                      background-color: #313130 !important;
                      padding-bottom: 0px !important;
                      padding-left: 0px !important;
                      padding-right: 0px !important;
                      padding-top: 0px !important;
                    }
                    .r8-o {
                      border-style: solid !important;
                      margin: 0 auto 0 auto !important;
                      margin-top: 20px !important;
                      width: 100% !important;
                    }
                    .r9-i {
                      padding-bottom: 0px !important;
                      padding-left: 0px !important;
                      padding-right: 0px !important;
                      padding-top: 0px !important;
                    }
                    .r10-c {
                      box-sizing: border-box !important;
                      text-align: left !important;
                      valign: top !important;
                      width: 100% !important;
                    }
                    .r11-o {
                      border-style: solid !important;
                      margin: 0 auto 0 0 !important;
                      width: 100% !important;
                    }
                    .r12-i {
                      padding-top: 15px !important;
                      text-align: left !important;
                    }
                    .r13-c {
                      box-sizing: border-box !important;
                      padding: 0 !important;
                      text-align: center !important;
                      valign: top !important;
                      width: 100% !important;
                    }
                    .r14-o {
                      border-style: solid !important;
                      margin: 0 auto 0 auto !important;
                      margin-bottom: 15px !important;
                      margin-top: 15px !important;
                      width: 100% !important;
                    }
                    .r15-i {
                      padding: 0 !important;
                      text-align: center !important;
                    }
                    .r16-r {
                      background-color: #000000 !important;
                      border-color: #000000 !important;
                      border-radius: 4px !important;
                      border-width: 0px !important;
                      box-sizing: border-box;
                      height: initial !important;
                      padding: 0 !important;
                      padding-bottom: 12px !important;
                      padding-top: 12px !important;
                      text-align: center !important;
                      width: 100% !important;
                    }
                    .r17-i {
                      background-color: #eff2f7 !important;
                      padding-bottom: 20px !important;
                      padding-left: 15px !important;
                      padding-right: 15px !important;
                      padding-top: 20px !important;
                    }
                    .r18-i {
                      padding-left: 0px !important;
                      padding-right: 0px !important;
                    }
                    .r19-c {
                      box-sizing: border-box !important;
                      text-align: center !important;
                      width: 100% !important;
                    }
                    .r20-c {
                      box-sizing: border-box !important;
                      width: 100% !important;
                    }
                    .r21-i {
                      font-size: 0px !important;
                      padding-bottom: 15px !important;
                      padding-left: 85px !important;
                      padding-right: 85px !important;
                      padding-top: 15px !important;
                    }
                    .r22-c {
                      box-sizing: border-box !important;
                      width: 32px !important;
                    }
                    .r23-o {
                      border-style: solid !important;
                      margin-right: 8px !important;
                      width: 32px !important;
                    }
                    .r24-i {
                      padding-bottom: 5px !important;
                      padding-top: 5px !important;
                    }
                    .r25-o {
                      border-style: solid !important;
                      margin-right: 0px !important;
                      width: 32px !important;
                    }
                    .r26-i {
                      padding-bottom: 0px !important;
                      padding-top: 15px !important;
                      text-align: center !important;
                    }
                    .r27-i {
                      padding-bottom: 0px !important;
                      padding-top: 0px !important;
                      text-align: center !important;
                    }
                    .r28-i {
                      padding-bottom: 15px !important;
                      padding-left: 0px !important;
                      padding-right: 0px !important;
                      padding-top: 0px !important;
                    }
                    .r29-c {
                      box-sizing: border-box !important;
                      text-align: center !important;
                      valign: top !important;
                      width: 129px !important;
                    }
                    .r30-o {
                      border-style: solid !important;
                      margin: 0 auto 0 auto !important;
                      width: 129px !important;
                    }
                    body {
                      -webkit-text-size-adjust: none;
                    }
                    .nl2go-responsive-hide {
                      display: none;
                    }
                    .nl2go-body-table {
                      min-width: unset !important;
                    }
                    .mobshow {
                      height: auto !important;
                      overflow: visible !important;
                      max-height: unset !important;
                      visibility: visible !important;
                      border: none !important;
                    }
                    .resp-table {
                      display: inline-table !important;
                    }
                    .magic-resp {
                      display: table-cell !important;
                    }
                  }
                </style>
                <!--[if !mso]><!-->
                <style type="text/css" emogrify="no">
                  @import url("https://fonts.googleapis.com/css2?family=Roboto");
                </style>
                <!--<![endif]-->
                <style type="text/css">
                  p,
                  h1,
                  h2,
                  h3,
                  h4,
                  ol,
                  ul {
                    margin: 0;
                  }
                  a,
                  a:link {
                    color: #000000;
                    text-decoration: underline;
                  }
                  .nl2go-default-textstyle {
                    color: #3b3f44;
                    font-family: Arial;
                    font-size: 16px;
                    line-height: 1.5;
                    word-break: break-word;
                  }
                  .default-button {
                    color: #ffffff;
                    font-family: Arial;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: normal;
                    line-height: 1.15;
                    text-decoration: none;
                    word-break: break-word;
                  }
                  .default-heading1 {
                    color: #1f2d3d;
                    font-family: Arial;
                    font-size: 36px;
                    word-break: break-word;
                  }
                  .default-heading2 {
                    color: #1f2d3d;
                    font-family: Arial;
                    font-size: 32px;
                    word-break: break-word;
                  }
                  .default-heading3 {
                    color: #1f2d3d;
                    font-family: Arial;
                    font-size: 24px;
                    word-break: break-word;
                  }
                  .default-heading4 {
                    color: #1f2d3d;
                    font-family: Arial;
                    font-size: 18px;
                    word-break: break-word;
                  }
                  a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: inherit !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                  }
                  .no-show-for-you {
                    border: none;
                    display: none;
                    float: none;
                    font-size: 0;
                    height: 0;
                    line-height: 0;
                    max-height: 0;
                    mso-hide: all;
                    overflow: hidden;
                    table-layout: fixed;
                    visibility: hidden;
                    width: 0;
                  }
                </style>
                <!--[if mso
                  ]><xml>
                    <o:OfficeDocumentSettings>
                      <o:AllowPNG /> <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                  </xml><!
                [endif]-->
                <style type="text/css">
                  a:link {
                    color: #000;
                    text-decoration: underline;
                  }
                </style>
              </head>
              <body
                bgcolor="#ffffff"
                text="#3b3f44"
                link="#000000"
                yahoo="fix"
                style="background-color: #ffffff"
              >
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  role="presentation"
                  class="nl2go-body-table"
                  width="100%"
                  style="background-color: #ffffff; width: 100%"
                >
                  <tr>
                    <td>
                      <table
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        role="presentation"
                        width="600"
                        align="center"
                        class="r0-o"
                        style="table-layout: fixed; width: 600px"
                      >
                        <tr>
                          <td valign="top" class="r1-i" style="background-color: #ffffff">
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="center"
                              class="r3-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td class="r4-i">
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <th
                                        width="100%"
                                        valign="top"
                                        class="r5-c"
                                        style="
                                          background-color: #313130;
                                          font-weight: normal;
                                        "
                                      >
                                        <table
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          width="100%"
                                          class="r6-o"
                                          style="table-layout: fixed; width: 100%"
                                        >
                                          <tr>
                                            <td
                                              valign="top"
                                              class="r7-i"
                                              style="background-color: #313130"
                                            >
                                              <table
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                role="presentation"
                                              >
                                                <tr>
                                                  <td class="r2-c" align="center">
                                                    <table
                                                      cellspacing="0"
                                                      cellpadding="0"
                                                      border="0"
                                                      role="presentation"
                                                      width="108"
                                                      class="r3-o"
                                                      style="
                                                        table-layout: fixed;
                                                        width: 108px;
                                                      "
                                                    >
                                                      <tr>
                                                        <td
                                                          style="
                                                            font-size: 0px;
                                                            line-height: 0px;
                                                          "
                                                        >
                                                          <img
                                                            src="https://img.mailinblue.com/6454457/images/content_library/original/64eccab68d1345704f4abf02.png"
                                                            width="108"
                                                            border="0"
                                                            style="
                                                              display: block;
                                                              width: 100%;
                                                            "
                                                          />
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </th>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="center"
                              class="r8-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr class="nl2go-responsive-hide">
                                <td height="20" style="font-size: 20px; line-height: 20px">
                                  ­
                                </td>
                              </tr>
                              <tr>
                                <td class="r9-i">
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <th
                                        width="100%"
                                        valign="top"
                                        class="r5-c"
                                        style="font-weight: normal"
                                      >
                                        <table
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          width="100%"
                                          class="r6-o"
                                          style="table-layout: fixed; width: 100%"
                                        >
                                          <tr>
                                            <td valign="top" class="r9-i">
                                              <table
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                role="presentation"
                                              >
                                                <tr>
                                                  <td class="r10-c" align="left">
                                                    <table
                                                      cellspacing="0"
                                                      cellpadding="0"
                                                      border="0"
                                                      role="presentation"
                                                      width="100%"
                                                      class="r11-o"
                                                      style="
                                                        table-layout: fixed;
                                                        width: 100%;
                                                      "
                                                    >
                                                      <tr>
                                                        <td
                                                          align="left"
                                                          valign="top"
                                                          class="r12-i nl2go-default-textstyle"
                                                          style="
                                                            color: #3b3f44;
                                                            font-family: Arial;
                                                            font-size: 16px;
                                                            line-height: 1.5;
                                                            word-break: break-word;
                                                            padding-top: 15px;
                                                            text-align: left;
                                                          "
                                                        >
                                                          <div>
                                                            <h4
                                                              class="default-heading4"
                                                              style="
                                                                margin: 0;
                                                                color: #1f2d3d;
                                                                font-family: Arial;
                                                                font-size: 18px;
                                                                word-break: break-word;
                                                              "
                                                            >
                                                              <span
                                                                style="
                                                                  font-family: Arial;
                                                                  font-size: 16px;
                                                                "
                                                                >Hello
                                                                ${event.result.customer_full_name},</span
                                                              >
                                                            </h4>
                                                            <p style="margin: 0">
                                                              We've received you order and
                                                              will contact you as soon as
                                                              your package is shipped. You
                                                              can find your purchase
                                                              information bellow. 
                                                            </p>
                                                          </div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    class="r13-c"
                                                    align="center"
                                                    style="
                                                      align: center;
                                                      padding-bottom: 15px;
                                                      padding-top: 15px;
                                                      valign: top;
                                                    "
                                                  >
                                                    <table
                                                      cellspacing="0"
                                                      cellpadding="0"
                                                      border="0"
                                                      role="presentation"
                                                      width="300"
                                                      class="r14-o"
                                                      style="
                                                        background-color: #000000;
                                                        border-collapse: separate;
                                                        border-color: #000000;
                                                        border-radius: 4px;
                                                        border-style: solid;
                                                        border-width: 0px;
                                                        table-layout: fixed;
                                                        width: 300px;
                                                      "
                                                    >
                                                      <tr>
                                                        <td
                                                          height="18"
                                                          align="center"
                                                          valign="top"
                                                          class="r15-i nl2go-default-textstyle"
                                                          style="
                                                            word-break: break-word;
                                                            background-color: #000000;
                                                            border-radius: 4px;
                                                            color: #ffffff;
                                                            font-family: Arial;
                                                            font-size: 16px;
                                                            font-style: normal;
                                                            line-height: 1.15;
                                                            padding-bottom: 12px;
                                                            padding-top: 12px;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <a
                                                            href=${link}
                                                            class="r16-r default-button"
                                                            target="_blank"
                                                            data-btn="1"
                                                            style="
                                                              font-style: normal;
                                                              font-weight: normal;
                                                              line-height: 1.15;
                                                              text-decoration: none;
                                                              word-break: break-word;
                                                              word-wrap: break-word;
                                                              display: block;
                                                              -webkit-text-size-adjust: none;
                                                              color: #ffffff;
                                                              font-family: Arial;
                                                              font-size: 16px;
                                                            "
                                                          >
                                                            <span
                                                              ><strong
                                                                >ORDER STATUS</strong
                                                              ></span
                                                            ></a
                                                          >
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </th>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              role="presentation"
                              width="100%"
                              align="center"
                              class="r3-o"
                              style="table-layout: fixed; width: 100%"
                            >
                              <tr>
                                <td
                                  class="r17-i"
                                  style="
                                    background-color: #eff2f7;
                                    padding-bottom: 20px;
                                    padding-top: 20px;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    role="presentation"
                                  >
                                    <tr>
                                      <th
                                        width="100%"
                                        valign="top"
                                        class="r5-c"
                                        style="font-weight: normal"
                                      >
                                        <table
                                          cellspacing="0"
                                          cellpadding="0"
                                          border="0"
                                          role="presentation"
                                          width="100%"
                                          class="r6-o"
                                          style="table-layout: fixed; width: 100%"
                                        >
                                          <tr>
                                            <td
                                              valign="top"
                                              class="r18-i"
                                              style="
                                                padding-left: 15px;
                                                padding-right: 15px;
                                              "
                                            >
                                              <table
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                role="presentation"
                                              >
                                                <tr>
                                                  <td class="r19-c" align="center">
                                                    <table
                                                      cellspacing="0"
                                                      cellpadding="0"
                                                      border="0"
                                                      role="presentation"
                                                      width="570"
                                                      align="center"
                                                      class="r3-o"
                                                      style="
                                                        table-layout: fixed;
                                                        width: 570px;
                                                      "
                                                    >
                                                      <tr>
                                                        <td valign="top">
                                                          <table
                                                            width="100%"
                                                            cellspacing="0"
                                                            cellpadding="0"
                                                            border="0"
                                                            role="presentation"
                                                          >
                                                            <tr>
                                                              <td
                                                                class="r20-c"
                                                                style="
                                                                  display: inline-block;
                                                                "
                                                              >
                                                                <table
                                                                  cellspacing="0"
                                                                  cellpadding="0"
                                                                  border="0"
                                                                  role="presentation"
                                                                  width="570"
                                                                  class="r6-o"
                                                                  style="
                                                                    table-layout: fixed;
                                                                    width: 570px;
                                                                  "
                                                                >
                                                                  <tr>
                                                                    <td
                                                                      class="r21-i"
                                                                      style="
                                                                        padding-bottom: 15px;
                                                                        padding-left: 229px;
                                                                        padding-right: 229px;
                                                                        padding-top: 15px;
                                                                      "
                                                                    >
                                                                      <table
                                                                        width="100%"
                                                                        cellspacing="0"
                                                                        cellpadding="0"
                                                                        border="0"
                                                                        role="presentation"
                                                                      >
                                                                        <tr>
                                                                          <th
                                                                            width="40"
                                                                            class="r22-c mobshow resp-table"
                                                                            style="
                                                                              font-weight: normal;
                                                                            "
                                                                          >
                                                                            <table
                                                                              cellspacing="0"
                                                                              cellpadding="0"
                                                                              border="0"
                                                                              role="presentation"
                                                                              width="100%"
                                                                              class="r23-o"
                                                                              style="
                                                                                table-layout: fixed;
                                                                                width: 100%;
                                                                              "
                                                                            >
                                                                              <tr>
                                                                                <td
                                                                                  class="r24-i"
                                                                                  style="
                                                                                    font-size: 0px;
                                                                                    line-height: 0px;
                                                                                    padding-bottom: 5px;
                                                                                    padding-top: 5px;
                                                                                  "
                                                                                >
                                                                                  <a
                                                                                    href="https://www.facebook.com/profile.php?id=100087279692478"
                                                                                    target="_blank"
                                                                                    style="
                                                                                      color: #000;
                                                                                      text-decoration: underline;
                                                                                    "
                                                                                  >
                                                                                    <img
                                                                                      src="https://creative-assets.mailinblue.com/editor/social-icons/rounded_colored/facebook_32px.png"
                                                                                      width="32"
                                                                                      border="0"
                                                                                      style="
                                                                                        display: block;
                                                                                        width: 100%;
                                                                                      "
                                                                                  /></a>
                                                                                </td>
                                                                                <td
                                                                                  class="nl2go-responsive-hide"
                                                                                  width="8"
                                                                                  style="
                                                                                    font-size: 0px;
                                                                                    line-height: 1px;
                                                                                  "
                                                                                >
                                                                                  ­
                                                                                </td>
                                                                              </tr>
                                                                            </table>
                                                                          </th>
                                                                          <th
                                                                            width="40"
                                                                            class="r22-c mobshow resp-table"
                                                                            style="
                                                                              font-weight: normal;
                                                                            "
                                                                          >
                                                                            <table
                                                                              cellspacing="0"
                                                                              cellpadding="0"
                                                                              border="0"
                                                                              role="presentation"
                                                                              width="100%"
                                                                              class="r23-o"
                                                                              style="
                                                                                table-layout: fixed;
                                                                                width: 100%;
                                                                              "
                                                                            >
                                                                              <tr>
                                                                                <td
                                                                                  class="r24-i"
                                                                                  style="
                                                                                    font-size: 0px;
                                                                                    line-height: 0px;
                                                                                    padding-bottom: 5px;
                                                                                    padding-top: 5px;
                                                                                  "
                                                                                >
                                                                                  <a
                                                                                    href="https://www.instagram.com/andreahair_vietnam/"
                                                                                    target="_blank"
                                                                                    style="
                                                                                      color: #000;
                                                                                      text-decoration: underline;
                                                                                    "
                                                                                  >
                                                                                    <img
                                                                                      src="https://creative-assets.mailinblue.com/editor/social-icons/rounded_colored/instagram_32px.png"
                                                                                      width="32"
                                                                                      border="0"
                                                                                      style="
                                                                                        display: block;
                                                                                        width: 100%;
                                                                                      "
                                                                                  /></a>
                                                                                </td>
                                                                                <td
                                                                                  class="nl2go-responsive-hide"
                                                                                  width="8"
                                                                                  style="
                                                                                    font-size: 0px;
                                                                                    line-height: 1px;
                                                                                  "
                                                                                >
                                                                                  ­
                                                                                </td>
                                                                              </tr>
                                                                            </table>
                                                                          </th>
                                                                          <th
                                                                            width="32"
                                                                            class="r22-c mobshow resp-table"
                                                                            style="
                                                                              font-weight: normal;
                                                                            "
                                                                          >
                                                                            <table
                                                                              cellspacing="0"
                                                                              cellpadding="0"
                                                                              border="0"
                                                                              role="presentation"
                                                                              width="100%"
                                                                              class="r25-o"
                                                                              style="
                                                                                table-layout: fixed;
                                                                                width: 100%;
                                                                              "
                                                                            >
                                                                              <tr>
                                                                                <td
                                                                                  class="r24-i"
                                                                                  style="
                                                                                    font-size: 0px;
                                                                                    line-height: 0px;
                                                                                    padding-bottom: 5px;
                                                                                    padding-top: 5px;
                                                                                  "
                                                                                >
                                                                                  <a
                                                                                    href="https://api.whatsapp.com/message/KLAVCJPRMC6CC1?autoload=1&app_absent=0"
                                                                                    target="_blank"
                                                                                    style="
                                                                                      color: #000;
                                                                                      text-decoration: underline;
                                                                                    "
                                                                                  >
                                                                                    <img
                                                                                      src="https://creative-assets.mailinblue.com/editor/social-icons/rounded_colored/whatsapp_32px.png"
                                                                                      width="32"
                                                                                      border="0"
                                                                                      style="
                                                                                        display: block;
                                                                                        width: 100%;
                                                                                      "
                                                                                  /></a>
                                                                                </td>
                                                                              </tr>
                                                                            </table>
                                                                          </th>
                                                                        </tr>
                                                                      </table>
                                                                    </td>
                                                                  </tr>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td class="r10-c" align="left">
                                                    <table
                                                      cellspacing="0"
                                                      cellpadding="0"
                                                      border="0"
                                                      role="presentation"
                                                      width="100%"
                                                      class="r11-o"
                                                      style="
                                                        table-layout: fixed;
                                                        width: 100%;
                                                      "
                                                    >
                                                      <tr>
                                                        <td
                                                          align="center"
                                                          valign="top"
                                                          class="r26-i nl2go-default-textstyle"
                                                          style="
                                                            color: #3b3f44;
                                                            font-family: Arial;
                                                            word-break: break-word;
                                                            font-size: 18px;
                                                            line-height: 1.5;
                                                            padding-top: 15px;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <div>
                                                            <p style="margin: 0">
                                                              <span
                                                                style="
                                                                  font-family: Arial,
                                                                    helvetica, sans-serif;
                                                                "
                                                                ><strong
                                                                  >AndreaHair Online
                                                                  Team</strong
                                                                ></span
                                                              >
                                                            </p>
                                                          </div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td class="r10-c" align="left">
                                                    <table
                                                      cellspacing="0"
                                                      cellpadding="0"
                                                      border="0"
                                                      role="presentation"
                                                      width="100%"
                                                      class="r11-o"
                                                      style="
                                                        table-layout: fixed;
                                                        width: 100%;
                                                      "
                                                    >
                                                      <tr>
                                                        <td
                                                          align="center"
                                                          valign="top"
                                                          class="r27-i nl2go-default-textstyle"
                                                          style="
                                                            color: #3b3f44;
                                                            font-family: Arial;
                                                            word-break: break-word;
                                                            font-size: 18px;
                                                            line-height: 1.5;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <div>
                                                            <p
                                                              style="
                                                                margin: 0;
                                                                font-size: 14px;
                                                              "
                                                            >
                                                              <span
                                                                style="
                                                                  font-family: Arial,
                                                                    helvetica, sans-serif;
                                                                "
                                                                ><strong>Tel</strong></span
                                                              >: +84 356661273<br /><span
                                                                style="
                                                                  font-family: Arial,
                                                                    helvetica, sans-serif;
                                                                "
                                                                ><strong
                                                                  >Email</strong
                                                                ></span
                                                              >: andreahairvietnam@gmail.com
                                                            </p>
                                                          </div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td class="r19-c" align="center">
                                                    <table
                                                      cellspacing="0"
                                                      cellpadding="0"
                                                      border="0"
                                                      role="presentation"
                                                      width="100%"
                                                      align="center"
                                                      class="r3-o"
                                                      style="
                                                        table-layout: fixed;
                                                        width: 100%;
                                                      "
                                                    >
                                                      <tr>
                                                        <td
                                                          valign="top"
                                                          class="r28-i"
                                                          style="padding-bottom: 15px"
                                                        >
                                                          <table
                                                            width="100%"
                                                            cellspacing="0"
                                                            cellpadding="0"
                                                            border="0"
                                                            role="presentation"
                                                          >
                                                            <tr>
                                                              <td
                                                                class="r29-c"
                                                                align="center"
                                                              >
                                                                <table
                                                                  cellspacing="0"
                                                                  cellpadding="0"
                                                                  border="0"
                                                                  role="presentation"
                                                                  width="129"
                                                                  class="r30-o"
                                                                  style="
                                                                    table-layout: fixed;
                                                                  "
                                                                >
                                                                  <tr>
                                                                    <td
                                                                      height="48"
                                                                      style="
                                                                        font-size: 0px;
                                                                        line-height: 0px;
                                                                      "
                                                                    >
                                                                      <img
                                                                        src="https://creative-assets.mailinblue.com/rnb-assets/en.png"
                                                                        width="129"
                                                                        border="0"
                                                                        style="
                                                                          display: block;
                                                                          width: 100%;
                                                                        "
                                                                      />
                                                                    </td>
                                                                  </tr>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </th>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </body>
            </html>
            
          `,
        });
    } catch (err) {
      strapi.log.error(`Error sending email`, err);
    }
  },
};
