export function fold(s: string, n: number, useSpaces: boolean, a?: string[]): string[] {
  a = a || [];
  if (s.length <= n) {
    a.push(s);
    return a;
  }
  var line = s.substring(0, n);
  if (!useSpaces) { // insert newlines anywhere
    a.push(line);
    return fold(s.substring(n), n, useSpaces, a);
  }
  else { // attempt to insert newlines after whitespace
    var lastSpaceRgx = /\s(?!.*\s)/;
    var idx = line.search(lastSpaceRgx);
    var nextIdx = n;
    if (idx > 0) {
      line = line.substring(0, idx);
      nextIdx = idx;
    }
    a.push(line);
    return fold(s.substring(nextIdx), n, useSpaces, a);
  }
}