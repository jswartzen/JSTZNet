window.jstznet = window.jstznet || {}
window.jstznet.zones = [
  { id: 'Dateline Standard Time', utcOffset: 720, dst: false },
  { id: 'UTC-11', utcOffset: 660, dst: false },
  { id: 'Hawaiian Standard Time', utcOffset: 600, dst: false },
  { id: 'Alaskan Standard Time', utcOffset: 540, dst: true, start: [2015,3,8,3,1,480], end: [2015,11,1,3,1,540] },
  { id: 'Pacific Standard Time', utcOffset: 480, dst: true, start: [2015,3,8,3,1,420], end: [2015,11,1,3,1,480] },
  { id: 'Pacific Standard Time (Mexico)', utcOffset: 480, dst: true, start: [2015,4,5,3,1,420], end: [2015,10,25,3,1,480] },
  { id: 'US Mountain Standard Time', utcOffset: 420, dst: false },
  { id: 'Mountain Standard Time', utcOffset: 420, dst: true, start: [2015,3,8,3,1,360], end: [2015,11,1,3,1,420] },
  { id: 'Mountain Standard Time (Mexico)', utcOffset: 420, dst: true, start: [2015,4,5,3,1,360], end: [2015,10,25,3,1,420] },
  { id: 'Central America Standard Time', utcOffset: 360, dst: false },
  { id: 'Central Standard Time', utcOffset: 360, dst: true, start: [2015,3,8,3,1,300], end: [2015,11,1,3,1,360] },
  { id: 'Central Standard Time (Mexico)', utcOffset: 360, dst: true, start: [2015,4,5,3,1,300], end: [2015,10,25,3,1,360] },
  { id: 'SA Pacific Standard Time', utcOffset: 300, dst: false },
  { id: 'Eastern Standard Time', utcOffset: 300, dst: true, start: [2015,3,8,3,1,240], end: [2015,11,1,3,1,300] },
  { id: 'Venezuela Standard Time', utcOffset: 270, dst: false },
  { id: 'SA Western Standard Time', utcOffset: 240, dst: false },
  { id: 'Atlantic Standard Time', utcOffset: 240, dst: true, start: [2015,3,8,3,1,180], end: [2015,11,1,3,1,240] },
  { id: 'Paraguay Standard Time', utcOffset: 240, dst: true, start: [2015,10,4,1,0,180], end: [2015,3,22,1,0,240] },
  { id: 'Pacific SA Standard Time', utcOffset: 240, dst: true, start: [2015,10,11,1,0,180], end: [2015,3,15,1,0,240] },
  { id: 'Central Brazilian Standard Time', utcOffset: 240, dst: true, start: [2015,10,18,1,0,180], end: [2015,2,22,1,0,240] },
  { id: 'Newfoundland Standard Time', utcOffset: 210, dst: true, start: [2015,3,8,3,1,150], end: [2015,11,1,3,1,210] },
  { id: 'Argentina Standard Time', utcOffset: 180, dst: false },
  { id: 'Greenland Standard Time', utcOffset: 180, dst: true, start: [2015,3,28,23,1,120], end: [2015,10,24,23,1,180] },
  { id: 'Montevideo Standard Time', utcOffset: 180, dst: true, start: [2015,10,4,3,1,120], end: [2015,3,8,3,1,180] },
  { id: 'E. South America Standard Time', utcOffset: 180, dst: true, start: [2015,10,18,1,0,120], end: [2015,2,22,1,0,180] },
  { id: 'UTC-02', utcOffset: 120, dst: false },
  { id: 'Mid-Atlantic Standard Time', utcOffset: 120, dst: true, start: [2015,3,29,3,1,60], end: [2015,9,27,3,1,120] },
  { id: 'Cape Verde Standard Time', utcOffset: 60, dst: false },
  { id: 'Azores Standard Time', utcOffset: 60, dst: true, start: [2015,3,29,1,1,0], end: [2015,10,25,1,1,60] },
  { id: 'UTC', utcOffset: 0, dst: false },
  { id: 'GMT Standard Time', utcOffset: 0, dst: true, start: [2015,3,29,2,1,-60], end: [2015,10,25,2,1,0] },
  { id: 'Morocco Standard Time', utcOffset: 0, dst: true, start: [2015,3,29,3,1,-60], end: [2015,10,25,3,1,0] },
  { id: 'W. Central Africa Standard Time', utcOffset: -60, dst: false },
  { id: 'W. Europe Standard Time', utcOffset: -60, dst: true, start: [2015,3,29,3,1,-120], end: [2015,10,25,3,1,-60] },
  { id: 'Namibia Standard Time', utcOffset: -60, dst: true, start: [2015,9,6,3,1,-120], end: [2015,4,5,3,1,-60] },
  { id: 'Egypt Standard Time', utcOffset: -120, dst: false },
  { id: 'Jordan Standard Time', utcOffset: -120, dst: true, start: [2015,3,27,1,0,-180], end: [2015,10,30,1,1,-120] },
  { id: 'Israel Standard Time', utcOffset: -120, dst: true, start: [2015,3,27,3,1,-180], end: [2015,10,25,3,1,-120] },
  { id: 'Middle East Standard Time', utcOffset: -120, dst: true, start: [2015,3,29,1,0,-180], end: [2015,10,25,1,0,-120] },
  { id: 'E. Europe Standard Time', utcOffset: -120, dst: true, start: [2015,3,29,3,1,-180], end: [2015,10,25,3,1,-120] },
  { id: 'GTB Standard Time', utcOffset: -120, dst: true, start: [2015,3,29,4,1,-180], end: [2015,10,25,4,1,-120] },
  { id: 'Syria Standard Time', utcOffset: -120, dst: true, start: [2015,4,3,1,0,-180], end: [2015,10,30,1,0,-120] },
  { id: 'Arabic Standard Time', utcOffset: -180, dst: false },
  { id: 'Iran Standard Time', utcOffset: -210, dst: true, start: [2015,3,22,1,0,-270], end: [2015,9,22,1,0,-210] },
  { id: 'Arabian Standard Time', utcOffset: -240, dst: false },
  { id: 'Azerbaijan Standard Time', utcOffset: -240, dst: true, start: [2015,3,29,5,1,-300], end: [2015,10,25,5,1,-240] },
  { id: 'Afghanistan Standard Time', utcOffset: -270, dst: false },
  { id: 'West Asia Standard Time', utcOffset: -300, dst: false },
  { id: 'India Standard Time', utcOffset: -330, dst: false },
  { id: 'Nepal Standard Time', utcOffset: -345, dst: false },
  { id: 'Central Asia Standard Time', utcOffset: -360, dst: false },
  { id: 'Myanmar Standard Time', utcOffset: -390, dst: false },
  { id: 'SE Asia Standard Time', utcOffset: -420, dst: false },
  { id: 'China Standard Time', utcOffset: -480, dst: false },
  { id: 'Tokyo Standard Time', utcOffset: -540, dst: false },
  { id: 'AUS Central Standard Time', utcOffset: -570, dst: false },
  { id: 'Cen. Australia Standard Time', utcOffset: -570, dst: true, start: [2015,10,4,3,1,-630], end: [2015,4,5,3,1,-570] },
  { id: 'E. Australia Standard Time', utcOffset: -600, dst: false },
  { id: 'AUS Eastern Standard Time', utcOffset: -600, dst: true, start: [2015,10,4,3,1,-660], end: [2015,4,5,3,1,-600] },
  { id: 'Russia Time Zone 10', utcOffset: -660, dst: false },
  { id: 'Russia Time Zone 11', utcOffset: -720, dst: false },
  { id: 'Kamchatka Standard Time', utcOffset: -720, dst: true, start: [2015,3,29,3,1,-780], end: [2015,10,25,3,1,-720] },
  { id: 'New Zealand Standard Time', utcOffset: -720, dst: true, start: [2015,9,27,3,1,-780], end: [2015,4,5,3,1,-720] },
  { id: 'Fiji Standard Time', utcOffset: -720, dst: true, start: [2015,10,25,3,1,-780], end: [2015,1,18,3,1,-720] },
  { id: 'Tonga Standard Time', utcOffset: -780, dst: false },
  { id: 'Samoa Standard Time', utcOffset: -780, dst: true, start: [2015,9,27,1,1,-840], end: [2015,4,5,1,1,-780] },
  { id: 'Line Islands Standard Time', utcOffset: -840, dst: false },
];
