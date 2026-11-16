/** Placeholder integration. Deploy this in your Google Sheet's Apps Script project.
 * Set SPREADSHEET_ID under Project Settings > Script properties first.
 * No connection is made until rsvpEndpoint in src/wedding-config.js is configured.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var p = e.parameter || {};
    if (p.website) throw new Error('Invalid request');
    if (!p.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email || '')) throw new Error('Name and valid email required');
    if (!/^[a-z0-9-]{8,100}$/i.test(p.requestId || '')) throw new Error('Invalid request ID');
    if (!/^[a-z0-9-]{3,80}$/.test(p.theme || '')) throw new Error('Invalid theme');
    if (['yes','no'].indexOf(p.attending) === -1) throw new Error('Invalid attendance');
    var guests = p.attending === 'no' ? 0 : Number(p.guests);
    if (!Number.isInteger(guests) || guests < 0 || guests > 6 || (p.attending === 'yes' && guests < 1)) throw new Error('Invalid guest count');
    var sheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
    if (!sheetId) throw new Error('RSVP connection is not configured');
    lock.waitLock(10000);
    var book = SpreadsheetApp.openById(sheetId);
    var sheet = book.getSheetByName('RSVPs') || book.insertSheet('RSVPs');
    if (sheet.getLastRow() === 0) sheet.appendRow(['Request ID','Received','Theme','Name','Email','Attending','Guests','Events','Note']);
    // Retried network requests cannot create duplicate rows.
    if (sheet.getLastRow() > 1 && sheet.getRange(2,1,sheet.getLastRow()-1,1).createTextFinder(p.requestId).matchEntireCell(true).findNext()) return json_({ok:true});
    sheet.appendRow([p.requestId,new Date(),safeCell_(p.theme,80),safeCell_(p.name,100),safeCell_(p.email,150),p.attending,guests,safeCell_(p.attending==='no'?'':p.events,200),safeCell_(p.note,1000)]);
    SpreadsheetApp.flush();
    return json_({ok:true});
  } catch (error) {
    return json_({ok:false,error:'Unable to save this RSVP. Check the connection and submitted fields.'});
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}
function safeCell_(value,max) {
  var text = String(value || '').trim().slice(0,max);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}
function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}
