using Server.Domain.Entities;

namespace Server.Service.Templates;

public static class EmailTemplate
{
    public static string WelcomeEmail(User user)
    {
        return $$"""
              <!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <style>
                      @media only screen and (max-width: 620px) {


                                  .container {
                              width: 100% !important;
                              padding: 24px !important;
                          }

                          .hero-title {
                              font-size: 24px !important;
                          }

                          .feature-table {
                              display: block !important;
                          }

                          .feature-cell {
                              display: block !important;
                              width: 100% !important;
                              padding-left: 0 !important;
                              padding-right: 0 !important;
                              margin-bottom: 20px !important;
                          }
                      }
                  </style>
              </head>

              <body style="margin:0;padding:0;background-color:#fafafa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">

                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fafafa;">
                      <tr>
                          <td align="center" style="padding:40px 16px;">

                              <table role="presentation"
                                     class="container"
                                     width="600"
                                     cellpadding="0"
                                     cellspacing="0"
                                     border="0"
                                     style="background:#ffffff;border-radius:16px;border:1px solid #edf2f7;padding:48px;box-shadow:0 4px 20px rgba(0,0,0,0.04);">

                                  <!-- Logo -->
                                  <tr>
                                      <td align="left" style="padding-bottom:32px;">
                                          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                              <tr>
                                                  <td style="background:#eff6ff;border-radius:8px;padding:8px 12px;color:#2563eb;font-weight:700;font-size:18px;">
                                                      🧠 ClipMind
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>

                                  <!-- Hero -->
                                  <tr>
                                      <td>

                                          <h1 class="hero-title"
                                              style="margin:0 0 20px;color:#1e293b;font-size:30px;font-weight:800;line-height:1.2;">
                                              Your intelligent second brain is ready.
                                          </h1>

                                          <p style="margin:0 0 12px;font-size:16px;color:#475569;">
                                              Hi <strong>{{user.FirstName}}</strong>,
                                          </p>

                                          <p style="margin:0 0 32px;font-size:16px;color:#475569;line-height:1.7;">
                                              Welcome to <strong>ClipMind</strong>. Every piece of text you copy can now become
                                              part of a searchable, AI-powered knowledge base. Instead of losing valuable snippets,
                                              ideas, links, or code, ClipMind preserves them so you can retrieve and use them whenever
                                              you need.
                                          </p>

                                      </td>
                                  </tr>

                                  <!-- Divider -->
                                  <tr>
                                      <td style="border-top:1px solid #f1f5f9;padding-top:32px;padding-bottom:20px;">
                                          <h3 style="margin:0;color:#0f172a;font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">
                                              Core Capabilities
                                          </h3>
                                      </td>
                                  </tr>

                                  <!-- Features -->
                                  <tr>
                                      <td>

                                          <table role="presentation" class="feature-table" width="100%" cellpadding="0" cellspacing="0" border="0">

                                              <tr>

                                                  <td class="feature-cell" width="50%" valign="top" style="padding-right:16px;padding-bottom:28px;">
                                                      <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:#1e293b;">
                                                          📋 Infinite Capture
                                                      </p>

                                                      <p style="margin:0;font-size:14px;color:#64748b;line-height:1.6;">
                                                          Save text, code snippets, links, notes, and anything else you copy without
                                                          worrying about losing your clipboard history.
                                                      </p>
                                                  </td>

                                                  <td class="feature-cell" width="50%" valign="top" style="padding-left:16px;padding-bottom:28px;">
                                                      <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:#2563eb;">
                                                          🔍 Semantic Search
                                                      </p>

                                                      <p style="margin:0;font-size:14px;color:#64748b;line-height:1.6;">
                                                          Search using natural language instead of exact keywords and quickly find
                                                          information by meaning.
                                                      </p>
                                                  </td>

                                              </tr>

                                              <tr>

                                                  <td class="feature-cell" width="50%" valign="top" style="padding-right:16px;">
                                                      <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:#1e293b;">
                                                          ⚡ Zero Context Switching
                                                      </p>

                                                      <p style="margin:0;font-size:14px;color:#64748b;line-height:1.6;">
                                                          Spend less time digging through browser history, documents, and chats.
                                                          Everything stays organized in one place.
                                                      </p>
                                                  </td>

                                                  <td class="feature-cell" width="50%" valign="top" style="padding-left:16px;">
                                                      <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:#2563eb;">
                                                          🤖 Contextual AI Assistant
                                                      </p>

                                                      <p style="margin:0;font-size:14px;color:#64748b;line-height:1.6;">
                                                          Chat with your saved knowledge to summarize content, explain code,
                                                          generate insights, and retrieve information instantly.
                                                      </p>
                                                  </td>

                                              </tr>

                                          </table>

                                      </td>
                                  </tr>

                                  <!-- Closing -->
                                  <tr>
                                      <td style="border-top:1px solid #f1f5f9;padding-top:32px;">

                                          <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.7;">
                                              ClipMind is built to reduce cognitive overhead, preserve valuable information,
                                              and make knowledge instantly accessible whenever you need it.
                                          </p>

                                          <p style="margin:0;font-size:15px;font-weight:600;color:#1e293b;">
                                              — The ClipMind Team
                                          </p>

                                      </td>
                                  </tr>

                                  <!-- Footer -->
                                  <tr>
                                      <td align="center" style="padding-top:40px;">

                                          <p style="margin:0;font-size:12px;color:#94a3b8;">
                                              This is an automated email. Please do not reply to this message.
                                          </p>

                                      </td>
                                  </tr>

                              </table>

                          </td>
                      </tr>
                  </table>

              </body>
              </html>
              """;

    }

    public static string OtpEmail(int? otp)
    {
        return $"""
                 <!DOCTYPE html>
                 <html lang="en">
                 <head>
                     <meta charset="UTF-8" />
                     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                 </head>

                 <body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

                 <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;padding:40px 16px;">
                 <tr>
                 <td align="center">

                 <table role="presentation"
                        width="600"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:48px;">

                     <!-- Logo -->
                     <tr>
                         <td align="center" style="padding-bottom:32px;">
                             <div style="display:inline-block;background:#eff6ff;color:#2563eb;padding:10px 16px;border-radius:8px;font-size:20px;font-weight:700;">
                                 🧠 ClipMind
                             </div>
                         </td>
                     </tr>

                     <!-- Title -->
                     <tr>
                         <td align="center">
                             <h1 style="margin:0;color:#0f172a;font-size:28px;font-weight:800;">
                                 Reset Your Password
                             </h1>

                             <p style="margin:20px 0 0;font-size:16px;line-height:1.7;color:#475569;">
                                 We received a request to reset the password for your ClipMind account.
                                 Use the verification code below to continue.
                             </p>
                         </td>
                     </tr>

                     <!-- OTP -->
                     <tr>
                         <td align="center" style="padding:40px 0;">

                             <div style="
                                 display:inline-block;
                                 padding:18px 40px;
                                 border:2px dashed #2563eb;
                                 border-radius:12px;
                                 background:#eff6ff;
                                 font-size:36px;
                                 font-weight:800;
                                 letter-spacing:10px;
                                 color:#2563eb;">
                                 {otp}
                             </div>

                         </td>
                     </tr>

                     <!-- Info -->
                     <tr>
                         <td>

                             <p style="margin:0 0 12px;font-size:15px;color:#475569;line-height:1.7;">
                                 This verification code is valid for <strong>10 minutes</strong>.
                             </p>

                             <p style="margin:0;font-size:15px;color:#475569;line-height:1.7;">
                                 If you didn't request a password reset, you can safely ignore this email.
                                 Your account will remain secure.
                             </p>

                         </td>
                     </tr>

                     <!-- Footer -->
                     <tr>
                         <td align="center" style="padding-top:40px;border-top:1px solid #f1f5f9;">

                             <p style="margin:0;font-size:12px;color:#94a3b8;">
                                 This is an automated email from ClipMind. Please do not reply.
                             </p>

                         </td>
                     </tr>

                 </table>

                 </td>
                 </tr>
                 </table>

                 </body>
                 </html>
                 """;
    }
}