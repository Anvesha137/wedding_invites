# Google Sheets connection (placeholder, not deployed)

1. Create your Google Sheet. Open Extensions > Apps Script and paste `google-sheets.gs`.
2. In Project Settings > Script properties, add `SPREADSHEET_ID` using the ID between `/d/` and `/edit` in the Sheet URL.
3. Deploy as a Web app, executing as the Sheet owner. Set access so your intended guests can submit. Follow Google's authorization flow yourself.
4. Copy the deployed `/exec` URL into `wedding.rsvpEndpoint` in `src/wedding-config.js`.
5. Rebuild and deploy the website. Submit a test RSVP from the actual website origin and verify both a success confirmation and a matching row in the Sheet before sharing with guests.

The frontend sends a normal URL-encoded POST, waits for readable JSON and requires `{ok:true}`. It never treats an opaque request or a failed response as success. If your deployment/account blocks cross-origin responses, use a same-origin server proxy; do not switch to `no-cors` and report an unverified success.

The script validates basic fields, escapes spreadsheet formulas, locks concurrent writes and deduplicates retried requests. It is a starter integration; this package has no live Google account or Sheet connection. Empty endpoint keeps all forms explicitly in local demo mode.

Official documentation:
- https://developers.google.com/apps-script/guides/web
- https://developers.google.com/apps-script/reference/spreadsheet/sheet
- https://developers.google.com/apps-script/reference/lock/lock-service
