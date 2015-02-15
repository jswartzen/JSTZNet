// Copyright 2015 John L. Swartzentruber

(function() {
    window.jstznet = window.jstznet || {};

    // Initialize our internal data structure from the window.jstznet.zones data

    // This object will have an object for every base offset value from UTC.
    // Each of those objects can contain an entry for any time zones with that offset
    // that do not use DST as well as an array of entries for each time zone that uses
    // DST.
    var zones = {};
    if (window.jstznet.zones) {
        window.jstznet.zones.forEach(function(z) {
            var o = zones[z.utcOffset];
            if (!o) {
                o = zones[z.utcOffset] = {};
            }

            if (!z.dst) {
                o.noDst = z;
            } else {
                if (!o.dst) {
                    o.dst = [];
                }

                o.dst.push(z);
            }
        });
    }

    // This is the external function. It returns the name of the Windows/.NET
    // time zone that corresponds to the current user time zone.
    window.jstznet.determine = function() {
        var now = new Date(),
            jan = new Date(now.getFullYear(), 1, 1),
            july = new Date(now.getFullYear(), 7, 1),
            janOffset = jan.getTimezoneOffset(),
            julyOffset = july.getTimezoneOffset(),
            hasDst = julyOffset !== janOffset,
            utcBase = Math.max(janOffset, julyOffset),
            baseObj = zones[utcBase],
            i, zoneInfo, startDate, endDate;

        if (baseObj) {
            if (!hasDst) {
                return baseObj.noDst.id;
            } else if (baseObj.dst) {
                for (i = 0; i < baseObj.dst.length; ++i) {
                    zoneInfo = baseObj.dst[i];
                    startDate = new Date(zoneInfo.start[0], zoneInfo.start[1] - 1, zoneInfo.start[2], zoneInfo.start[3], zoneInfo.start[4]);
                    endDate = new Date(zoneInfo.end[0], zoneInfo.end[1] - 1, zoneInfo.end[2], zoneInfo.end[3], zoneInfo.end[4]);
                    if (startDate.getTimezoneOffset() === zoneInfo.start[5] && endDate.getTimezoneOffset() === zoneInfo.end[5]) {
                        return zoneInfo.id;
                    }
                }
            }
        }

        return null;
    };

})();