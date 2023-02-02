export function secureEmail(email) {
  var parts = email.split("@");
  var visiblePart = parts[0].substring(0, 4) + "*********";
  return visiblePart + "@" + parts[1];
}
